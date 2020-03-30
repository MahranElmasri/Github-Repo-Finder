import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

export default function RepoItem({ repo }) {
  const addBookmark = async id => {
    await axios.get(`/api/bookmarks/bookmark/${id}`);
  };

  return (
    <div className="card text-center">
      <img
        src={repo.avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h2>{repo.owner}</h2>
      <div>{repo.name}</div>
      {/* <div>{props.repo.description}</div> */}
      <ul className="grid-3">
        <i className="fas fa-star ">{repo.stars} </i>
        <i className="fas fa-code-branch"> {repo.forks}</i>
        <i
          className="fas fa-bookmark tooltip"
          onClick={() => {
            addBookmark(repo.id);
          }}
        >
          <span className="tooltiptext">Bookmark</span>
        </i>
      </ul>
    </div>
  );
}
RepoItem.propType = {
  repo: PropTypes.object.isRequired
};
