const router = require("express").Router();
const axios = require("axios");
let fs = require("fs");

// endpoint to add new repo to bookmark.json file
router.get("/bookmark/:id", async (request, response) => {
  try {
    let bookmarkid = request.params.id;
    let url = `https://api.github.com/repositories/${bookmarkid}`;
    const repos = await axios.get(url, {
      headers: { "content-type": "application/json" }
    });

    let { id, name, owner, login, stargazers_count, forks_count } = repos.data;

    let data = {
      id: id,
      avatar_url: owner.avatar_url,
      name: name,
      owner: owner.login,
      stars: stargazers_count,
      forks: forks_count
    };

    let arr;
    fs.readFile("./bookmarks.json", (err, dat) => {
      if (err) throw err;
      arr = JSON.parse(dat);
      arr.push(data);
      fs.writeFile("./bookmarks.json", JSON.stringify(arr, null, 2), err => {
        if (err) {
          console.error(err);
          return "unable to locate/read the file";
        }
        console.log("File has been updated");
      });
    });
    response.send(`${bookmarkid} added to bookmarks list`);
  } catch (error) {
    console.error(error.response.status, error.response.statusText);
    if (error.response.status === 404) {
      response.json({
        status: error.response.statusText,
        Description: "Please enter a valid repository id"
      });
    }
  }
});

// endpoint to get repo list from bookmark.json file
router.get("/list", (request, response) => {
  try {
    let data = fs.readFileSync("./bookmarks.json");
    let bookmark_json = JSON.parse(data);
    response.json(bookmark_json);
  } catch (err) {
    response.send("error in loading bookmarks");
    console.error(err);
  }
});

// endpoint to remove repo from bookmark.json file
router.get("/remove", (request, response) => {
  try {
    let removeid = request.query.id;
    fs.readFile("./bookmarks.json", (err, data) => {
      if (err) throw err;
      let bookmark_json = JSON.parse(data);
      const index = bookmark_json.findIndex(
        x => x.reposid === Number(removeid)
      );
      if (index !== undefined) bookmark_json.splice(index, 1);
      fs.writeFile(
        "./bookmarks.json",
        JSON.stringify(bookmark_json, null, 2),
        err => {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
    });
    response.json({
      data: `removed bookmark repo with id: ${removeid} successfully`
    });
  } catch (err) {
    response.send(err);
    console.error(err);
  }
});
module.exports = router;
