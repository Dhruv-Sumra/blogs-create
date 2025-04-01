import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='component-size shadow-lg h-15 dark-bg flex'>
        <div className='w-full flex justify-between items-center'>
            <h2 className='light-text text-4xl font-bold'>Blogs</h2>

            <div className='flex items-center space-x-5'>
                <Link className="hover:text-purple-100" to={'/'}>Home</Link>
                <Link className="hover:text-purple-100" to={'create'}>New blog</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar