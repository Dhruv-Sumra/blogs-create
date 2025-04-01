import React , {useState} from 'react'

const BlogList = ({blogList,handleDelete}) => {

  return (
    <div className='mt-10 space-y-5'>
        {blogList && blogList.map(item=>(
            <div key={item.id} className='w-full space-y-2 lg:w-2/3'>
                <h2 className='text-xl font-semibold'>{item.title}</h2>
                <p>{item.body}</p>

                <h2 className='text-lg font-semibold text-end'>~{item.author}</h2>
                <button onClick={()=>handleDelete(item.id)} className='hover:bg-purple-100 hover:outline-1 outline-purple-500 hover:text-purple-950 cursor-pointer px-2 py-0.5 text-purple-100 rounded-sm bg-purple-500'>Delete</button>
            </div>
        ))}
    </div>
  )
}

export default BlogList