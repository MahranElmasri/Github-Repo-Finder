import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Search({
  onSearchvalue,
  clearRepos,
  showClearbtn,
  setAlert
}) {
  const [searchvalue, setSearchValue] = useState("");
  const onChange = e => {
    setSearchValue(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (searchvalue === "") {
      setAlert("Please enter your keyword to search on it");
    } else {
      onSearchvalue(searchvalue);
      setSearchValue("");
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          value={searchvalue}
          onChange={onChange}
          name="search"
          placeholder="Search Repsitories.."
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-success btn-block"
        />
      </form>
      {showClearbtn && (
        <button onClick={clearRepos} className=" btn btn-danger btn-block">
          Clear
        </button>
      )}
    </div>
  );
}
Search.propType = {
  onSearchvalue: PropTypes.func.isRequired,
  clearRepos: PropTypes.func.isRequired,
  showClearbtn: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};
