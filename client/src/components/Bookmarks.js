import React, { useEffect, useState } from "react";
import axios from "axios";
import BookmarkItem from "./BookmarkItem";

const Bookmarks = () => {
  const [bookmarks, setBookmark] = useState([]);

  const removeBookmark = async id => {
    if (id !== null) {
      await axios.get(`/api/bookmarks/remove/?${id}`);
      fetchData();
    }

    console.log("id", id);
  };

  const fetchData = async () => {
    const res = await axios.get("/api/bookmarks/list");
    setBookmark(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid-2">
      {bookmarks.map(bookmark => (
        <BookmarkItem
          key={bookmark.id}
          bookmark={bookmark}
          removeBookmark={removeBookmark}
        />
      ))}
    </div>
  );
};

export default Bookmarks;
