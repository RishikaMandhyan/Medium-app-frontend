import { useState , useEffect} from "react";
//import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
//import { MyContext, MyContextProvider } from "./MyContext.js";
import Home from "./pages/Home.jsx"
import { SearchedBlogsPage } from "./pages/SearchedBlogsPage.jsx";
import AddBlog from "./pages/addBlog.jsx"
import { useLocation } from "react-router-dom";
import { SignUp } from "./components/Signup.jsx";
import { Login } from "./components/Login.jsx";
import { CategoryBlogsPage } from "./pages/CategoryBlogsPage.jsx";
import { ProfilePage } from "./pages/ProfilePage.jsx";
import EditBlogPage from "./pages/EditBlog.jsx";
import { Blogpage } from "./pages/Blog.jsx";


function App()
{

var y= JSON.parse(localStorage.getItem("users"));
if(y==null) y=new Array({id: "17", name: "rishika@29", email: "rishika@gmail.com", password: "123", dob:"11/11/1111", number_followers:0, number_following:0,plan_id:3, views: 0});
const [users, setUsers]= useState(y);

var b= JSON.parse(localStorage.getItem("currentuser"));
if(b==null) b={id: "17", name: "rishika@29", email: "rishika@gmail.com", password: "123", dob:"11/11/1111", number_followers:0, number_following:0, plan_id:3, views: 0};
const [currentuser, setCurrentuser]= useState(b);
const [user_uid, setUseruid]=useState(JSON.parse(localStorage.getItem("user_uid")));
if(user_uid==null) setUseruid(parseInt("0"));

useEffect(()=>{

    localStorage.setItem("user_uid", user_uid);
},[user_uid]);


const [input, setInput]= useState("");
const [content, setContent]= useState("");
const [file, setFile]= useState("");

var x= JSON.parse(localStorage.getItem("blogs"));
if(x==null) x=new Array(0);
const [blogs, setBlogs]= useState(x);

//stores 2 columns, blog id and user id who liked tht particular blog
var z= JSON.parse(localStorage.getItem("blog_user_likes"));
if(z==null) z=new Array(0);
const [blog_user_likes, setBlogUserLikes]= useState(z);

//stores 2 columns, blog id and user id who saved tht particular blog
var a= JSON.parse(localStorage.getItem("blog_user_saves"));
if(a==null) a=new Array(0);
const [blog_user_saves, setBlogUserSaves]= useState(a);

//stores 2 columns, 1st column is user id and 2nd column is user id of person following the userid
var c= JSON.parse(localStorage.getItem("user_follower"));
if(c==null) c=new Array(0);
const [user_follower, setUserfollower]= useState(c);

console.log(blog_user_likes, blog_user_saves);

const [dueyear, setDueyear]= useState(new Date().getFullYear());
const [duemonth, setDuemonth]= useState(new Date().getMonth());
const [dueday, setDueday]= useState(new Date().getDate());
const [category, setCategory]= useState("Tech");

const categories=[{"name": "Technology", "id":"tech"},
{"name": "Education", "id":"education"},
{"name": "Product Management", "id":"product"},
{"name": "API", "id":"api"},
{"name": "Java", "id":"java"},
{"name": "AI", "id":"ai"},
{"name": "DevOps", "id":"devops"},
{"name": "UI/UX", "id":"uiux"},]


useEffect(()=>{

  console.log("blogs also changed yr");
    localStorage.setItem("blogs", JSON.stringify(blogs));
 }, [blogs]);   //so everytime blogs changes, localstorage is set to the new blogs

 useEffect(()=>{

  localStorage.setItem("users", JSON.stringify(users));
}, [users]);   

useEffect(()=>{

  localStorage.setItem("currentuser", JSON.stringify(currentuser));
}, [currentuser]);  

useEffect(()=>{

  localStorage.setItem("blog_user_likes", JSON.stringify(blog_user_likes));
}, [blog_user_likes]);  

useEffect(()=>{

  localStorage.setItem("blog_user_saves", JSON.stringify(blog_user_saves));
}, [blog_user_saves]);  

useEffect(()=>{

  localStorage.setItem("user_follower", JSON.stringify(user_follower));
}, [user_follower]);  

return (<>

    <Router>
        <Routes>
                <Route path="/" element={<Home user_follower={user_follower} setUserfollower={setUserfollower} users={users}  setUsers={setUsers} categories={categories} currentuser={currentuser} setCurrentuser={setCurrentuser}  blogs={blogs} setBlogs={setBlogs} input={input} setInput={setInput} content={content} setContent={setContent} 
                file={file} setFile={setFile} blog_user_likes={blog_user_likes} setBlogUserLikes={setBlogUserLikes} blog_user_saves={blog_user_saves} setBlogUserSaves={setBlogUserSaves}  />}></Route>
                
                <Route path="/:id/add" element={<AddBlog  users={users} blogs={blogs} setBlogs={setBlogs} input={input} setInput={setInput} content={content} setContent={setContent} file={file} setFile={setFile} category={category} setCategory={setCategory} 
                dueyear={dueyear} setDueyear={setDueyear} currentuser={currentuser} setCurrentuser={setCurrentuser}  duemonth={duemonth} setDuemonth={setDuemonth} dueday={dueday} setDueday={setDueday}/>}></Route>
                
                <Route path="/search" element={<SearchedBlogsPage user_follower={user_follower} setUserfollower={setUserfollower} users={users}  setUsers={setUsers} categories={categories} blogs={blogs} setBlogs={setBlogs}  blog_user_likes={blog_user_likes} setBlogUserLikes={setBlogUserLikes} 
                blog_user_saves={blog_user_saves} setBlogUserSaves={setBlogUserSaves} currentuser={currentuser} setCurrentuser={setCurrentuser}/>}></Route>
                
                <Route path="/signup" element={<SignUp user_uid={user_uid} setUseruid={setUseruid} users={users} setUsers={setUsers}/>}></Route>
                
                <Route path="/login" element={<Login/>}></Route>

                <Route path="/category/:category_id" element={<CategoryBlogsPage user_follower={user_follower} setUserfollower={setUserfollower} users={users}  setUsers={setUsers} categories={categories} blogs={blogs} setBlogs={setBlogs}  blog_user_likes={blog_user_likes} setBlogUserLikes={setBlogUserLikes}  
                blog_user_saves={blog_user_saves} setBlogUserSaves={setBlogUserSaves} currentuser={currentuser} setCurrentuser={setCurrentuser}/>}></Route>

                <Route path="/profile/:user_id" element={<ProfilePage user_follower={user_follower} setUserfollower={setUserfollower}  setUsers={setUsers} categories={categories} blogs={blogs} setBlogs={setBlogs}  blog_user_likes={blog_user_likes} 
                setBlogUserLikes={setBlogUserLikes} users={users}   currentuser={currentuser} setCurrentuser={setCurrentuser} blog_user_saves={blog_user_saves} setBlogUserSaves={setBlogUserSaves} />}></Route>

                <Route path="/edit/:blog_id" element={<EditBlogPage blogs={blogs} setBlogs={setBlogs} input={input} setInput={setInput} content={content} setContent={setContent} file={file} setFile={setFile} category={category} setCategory={setCategory} 
                dueyear={dueyear} setDueyear={setDueyear} currentuser={currentuser} setCurrentuser={setCurrentuser} duemonth={duemonth} setDuemonth={setDuemonth} dueday={dueday} setDueday={setDueday}/>}></Route>

                <Route path="/blog/:blog_id" element={<Blogpage user_follower={user_follower} setUserfollower={setUserfollower} users={users}  setUsers={setUsers} categories={categories} currentuser={currentuser} setCurrentuser={setCurrentuser}  blogs={blogs} setBlogs={setBlogs} input={input} setInput={setInput} content={content} setContent={setContent} 
                file={file} setFile={setFile} blog_user_likes={blog_user_likes} setBlogUserLikes={setBlogUserLikes} blog_user_saves={blog_user_saves} setBlogUserSaves={setBlogUserSaves} />}></Route>
                
        </Routes>    
    </Router>
    </>
)
}

export default App;



