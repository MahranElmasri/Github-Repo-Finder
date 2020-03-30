const router = require("express").Router();
const axios = require("axios");
let fs = require("fs");

router.get("/search", async (req, res) => {
  try {
    let searchQuery = req.query.q;
    let url = ` https://api.github.com/search/repositories?q=${searchQuery}`;
    const items = await axios.get(url, {
      headers: { "content-type": "application/json" }
    });

    let data = [];
    for (item in items.data.items) {
      let { id, name, owner, watchers, forks } = items.data.items[item];
      data.push({
        id: id,
        avatar_url: owner.avatar_url,
        name: name,
        owner: owner.login,
        stars: watchers,
        forks: forks
      });
    }
    res.json(data);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
