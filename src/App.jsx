import React , {useState} from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Create from './Create'

const App = () => {
  let [blogList , setBlogList] = useState([
    {
      "id": 1,
      "title": "Consistency is the key",
      "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      "author": "Daniel"
    },
    {
      "id": 2,
      "title": "Money is everything",
      "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      "author": "Gun"
    },
    {
      "id": 3,
      "title": "Do it today",
      "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      "author": "Vasco"
    },
    {
      "id": 4,
      "title": "All about hard work",
      "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.", 
      "author": "Mike"
    }
  ])

  const handleDelete = (id)=>{
    setBlogList(blogList.filter(blog=>blog.id !== id)) 
  }

  const addBlog = (newBlog) => {
    setBlogList((prev) => [...prev, newBlog]);
    console.log(newBlog)
  };

  return (
    <div className='min-h-screen w-full border-2'>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home blogList={blogList} handleDelete={handleDelete}/>}/>
          <Route path='create' element={<Create addBlog={addBlog}/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App