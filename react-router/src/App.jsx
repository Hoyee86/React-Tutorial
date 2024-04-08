import { Route, Routes, useNavigate } from "react-router-dom"
import About from "./About"
import Footer from "./Footer"
import Header from "./Header"
import Home from "./Home"
import Missing from "./Missing"
import Nav from "./Nav"
import NewPost from "./NewPost"
import PostPage from "./PostPage"
import { useState } from "react";
import { format} from 'date-fns';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      tittle: "My first Post",
      dateTime: "April 04, 2024 11:01:34 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore quod dicta aliquid in excepturi, porro ducimus? Est necessitatibus dolores tempore sint accusantium voluptates, voluptatibus quae ducimus repudiandae earum magni."
    },
    {
      id: 2,
      tittle: "My second Post",
      dateTime: "April 04, 2024 11:01:34 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore quod dicta aliquid in excepturi, porro ducimus? Est necessitatibus dolores tempore sint accusantium voluptates, voluptatibus quae ducimus repudiandae earum magni."
    },
    {
      id: 3,
      tittle: "My third Post",
      dateTime: "April 04, 2024 11:01:34 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore quod dicta aliquid in excepturi, porro ducimus? Est necessitatibus dolores tempore sint accusantium voluptates, voluptatibus quae ducimus repudiandae earum magni."
    },
    {
      id: 4,
      tittle: "My fourth Post",
      dateTime: "April 04, 2024 11:01:34 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore quod dicta aliquid in excepturi, porro ducimus? Est necessitatibus dolores tempore sint accusantium voluptates, voluptatibus quae ducimus repudiandae earum magni."
    },
    {
      id: 5,
      tittle: "My fifth Post",
      dateTime: "April 04, 2024 11:01:34 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore quod dicta aliquid in excepturi, porro ducimus? Est necessitatibus dolores tempore sint accusantium voluptates, voluptatibus quae ducimus repudiandae earum magni."
    },
  ])
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [searchResult, setSeachResult] = useState([])
  const [postTittle, setPostTittle] = useState('');
  const [postBody, setPostBody] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length -1].id +1: 1
    const dateTime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = {id, tittle: postTittle, dateTime, body: postBody}
    const allposts = [...posts, newPost] // this variable is declare to match old posts and newpost together with the of spread notation;
    setPosts(allposts)
    setPostTittle('')
    setPostBody('')



    navigate('/')
  }
  
  const handleDelete = (id) => {
     const postList = posts.filter(post => post.id !== id)
     setPosts(postList)
     navigate('/')
  }

  return (
    <div className="App">
      <Header tittle="DLT Blogs"/>
      <Nav search={search} setSearch={setSearch}/>
      <Routes>
        <Route  path="/" element={<Home posts={posts}/>}/>
        <Route path="/post" element={<NewPost
         handleSubmit={handleSubmit}
         postTittle={postTittle}
         setPostTittle={setPostTittle}
         postBody={postBody}
         setPostBody={setPostBody}
        />}/>
        <Route path="/post/:id"element={<PostPage posts={posts} handleDelete={handleDelete}/>}/>
        <Route path="/about"  element={<About/>} />
        <Route path="*" element={<Missing/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
