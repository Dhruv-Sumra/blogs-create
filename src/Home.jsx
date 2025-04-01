import React from 'react'
import BlogList from './BlogList'

const Home = ({blogList , handleDelete}) => {
  return (
    <div className='light-bg component-size min-h-screen dark-text pt-5'>
        <h2 className='text-4xl font-semibold'>Here are some blogs</h2>
        <BlogList blogList={blogList} handleDelete={handleDelete}/>
    </div>
  )
}

export default Home