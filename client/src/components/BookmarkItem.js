import React from "react";
import PropTypes from "prop-types";

export default function Bookmark({ bookmark, removeBookmark }) {
  return (
    <div>
      <div key={bookmark.id} className="card text-center">
        <img
          src={bookmark.avatar_url}
          alt="avatar"
          className="round-img"
          style={{ width: "60px" }}
        />
        <h2>{bookmark.owner}</h2>
        <div>{bookmark.name}</div>
        <ul className="grid-3">
          <i className="fas fa-star ">{bookmark.stars} </i>
          <i className="fas fa-code-branch"> {bookmark.forks}</i>
          <i
            className="fas fa-bookmark tooltip active"
            onClick={() => {
              removeBookmark(bookmark.id);
            }}
          >
            <span className="tooltiptext">Remove bookmark</span>
          </i>
        </ul>
      </div>
    </div>
  );
}
Bookmark.propType = {
  bookmark: PropTypes.object.isRequired,
  removeBookmark: PropTypes.number.isRequired
};
