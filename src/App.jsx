import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBooksmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    // console.log('bookmark adding soon')
    // console.log(blog)

    const newBookmarks = [...bookmarks, blog];
    setBooksmarks(newBookmarks);
  };

  const handleMarkAsRead = (id,time) => {
    console.log('marking as read',time)

    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime)
    // OR shortcut
    // setReadingTime(readingTime + time);

    
    // console.log('remove bookmark', id)
    const remainingBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBooksmarks(remainingBookmarks);
  };

  return (
    <>
      <Header></Header>

      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
