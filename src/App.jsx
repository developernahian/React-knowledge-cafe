
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBooksmarks] = useState([])

  const handleAddToBookmark = (blog) => {

    // console.log('bookmark adding soon')
    // console.log(blog)

    const newBookmarks = [...bookmarks, blog]
    setBooksmarks(newBookmarks)
  }

  return (
    <>
      <Header></Header>

    <main className='md:flex max-w-7xl mx-auto'>
    <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
    <Bookmarks bookmarks={bookmarks}></Bookmarks>
    </main>

      
    </>
  )
}

export default App
