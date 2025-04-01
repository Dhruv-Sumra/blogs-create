import React,{useState , useEffect} from 'react'

const Create = ({addBlog}) => {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('')
    const [id , setId] = useState(Math.floor(Math.random(5)*100))

    const handleInput=(e)=>{
        e.preventDefault();
        const blog = {id,title,body,author};
       addBlog(blog)
        setTitle('')
        setBody('')
        setAuthor('')
    }

  return (
    <div className='light-bg component-size min-h-screen dark-text pt-5'>
        <h2 className='text-3xl font-semibold'>Add new blog</h2>

        <form className='space-y-1 flex flex-col mt-10'>
            <label>Title</label>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} className='outline-1 px-2 rounded-sm' type="text" />
            <br />
            <label>Author</label>
            <input value={author} onChange={(e)=>setAuthor(e.target.value)} className='outline-1 px-2 rounded-sm' type="text" />
            <br />
            <label>Body</label>
            <textarea value={body} onChange={(e)=>setBody(e.target.value)} className='outline-1 px-2 h-20 rounded-sm' type="text" />
            <br />
            <button onClick={handleInput} className='w-30 hover:bg-purple-100 hover:outline-1 outline-purple-500 hover:text-purple-950 cursor-pointer px-2 py-0.5 text-purple-100 rounded-sm bg-purple-500'>Add blog</button>
        </form>
    </div>
  )
}

export default Create