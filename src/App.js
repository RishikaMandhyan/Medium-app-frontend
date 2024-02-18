import { useState, useEffect } from "react";
//import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { MyContext, MyContextProvider } from "./MyContext.js";
import Blogs from "./pages/Blogs.jsx";
import { SearchedBlogsPage } from "./pages/SearchedBlogsPage.jsx";
import AddBlog from "./pages/addBlog.jsx";
import { useLocation } from "react-router-dom";
import { SignUp } from "./components/Signup.jsx";
import { Login } from "./components/Login.jsx";
import { CategoryBlogsPage } from "./pages/CategoryBlogsPage.jsx";
import { ProfilePage } from "./pages/ProfilePage.jsx";
import EditBlogPage from "./pages/EditBlog.jsx";
import { Blogpage } from "./pages/Blog.jsx";
import ProtectedRoutes from "./components/ProtectedRoutes.js";
import Home from "./pages/Home.js";
import { blogsData, usersData } from "./data.js";

function App() {
  var y = JSON.parse(localStorage.getItem("users"));
  if (y == null) y = usersData;

  const [users, setUsers] = useState(y);

  var b = JSON.parse(localStorage.getItem("currentuser"));
  const [currentuser, setCurrentuser] = useState(b);
  const [user_uid, setUseruid] = useState(
    JSON.parse(localStorage.getItem("user_uid")),
  );
  if (user_uid == null) setUseruid(parseInt("0"));

  useEffect(() => {
    localStorage.setItem("user_uid", user_uid);
  }, [user_uid]);

  const [input, setInput] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");

  var x = JSON.parse(localStorage.getItem("blogs"));
  if (x == null) x = blogsData;
  const [blogs, setBlogs] = useState(x);

  //stores 2 columns, blog id and user id who liked tht particular blog
  var z = JSON.parse(localStorage.getItem("blog_user_likes"));
  if (z == null) z = new Array(0);
  const [blog_user_likes, setBlogUserLikes] = useState(z);

  //stores 2 columns, blog id and user id who saved tht particular blog
  var a = JSON.parse(localStorage.getItem("blog_user_saves"));
  if (a == null) a = new Array(0);
  const [blog_user_saves, setBlogUserSaves] = useState(a);

  //stores 2 columns, 1st column is user id and 2nd column is user id of person following the userid
  var c = JSON.parse(localStorage.getItem("user_follower"));
  if (c == null) c = new Array(0);
  const [user_follower, setUserfollower] = useState(c);

  const [dueyear, setDueyear] = useState(new Date().getFullYear());
  const [duemonth, setDuemonth] = useState(new Date().getMonth());
  const [dueday, setDueday] = useState(new Date().getDate());
  const [category, setCategory] = useState("Tech");

  const categories = [
    { name: "Technology", id: "tech" },
    { name: "Education", id: "education" },
    { name: "Product Management", id: "product" },
    { name: "API", id: "api" },
    { name: "Java", id: "java" },
    { name: "AI", id: "ai" },
    { name: "DevOps", id: "devops" },
    { name: "UI/UX", id: "uiux" },
  ];

  useEffect(() => {
    //console.log("blogs also changed yr");
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]); //so everytime blogs changes, localstorage is set to the new blogs

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    console.log(currentuser);
    localStorage.setItem("currentuser", JSON.stringify(currentuser));
  }, [currentuser]);

  useEffect(() => {
    localStorage.setItem("blog_user_likes", JSON.stringify(blog_user_likes));
  }, [blog_user_likes]);

  useEffect(() => {
    localStorage.setItem("blog_user_saves", JSON.stringify(blog_user_saves));
  }, [blog_user_saves]);

  useEffect(() => {
    localStorage.setItem("user_follower", JSON.stringify(user_follower));
  }, [user_follower]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/signup"
            element={
              <SignUp
                user_uid={user_uid}
                setUseruid={setUseruid}
                users={users}
                setUsers={setUsers}
                setCurrentuser={setCurrentuser}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={<Login users={users} setCurrentuser={setCurrentuser} />}
          ></Route>

          <Route element={<ProtectedRoutes currentuser={currentuser} />}>
            <Route
              path="/blogs"
              element={
                <Blogs
                  user_follower={user_follower}
                  setUserfollower={setUserfollower}
                  users={users}
                  setUsers={setUsers}
                  categories={categories}
                  currentuser={currentuser}
                  setCurrentuser={setCurrentuser}
                  blogs={blogs}
                  setBlogs={setBlogs}
                  input={input}
                  setInput={setInput}
                  content={content}
                  setContent={setContent}
                  file={file}
                  setFile={setFile}
                  blog_user_likes={blog_user_likes}
                  setBlogUserLikes={setBlogUserLikes}
                  blog_user_saves={blog_user_saves}
                  setBlogUserSaves={setBlogUserSaves}
                />
              }
            ></Route>

            <Route
              path="/:id/add"
              element={
                <AddBlog
                  users={users}
                  blogs={blogs}
                  setBlogs={setBlogs}
                  input={input}
                  setInput={setInput}
                  content={content}
                  setContent={setContent}
                  file={file}
                  setFile={setFile}
                  category={category}
                  setCategory={setCategory}
                  dueyear={dueyear}
                  setDueyear={setDueyear}
                  currentuser={currentuser}
                  setCurrentuser={setCurrentuser}
                  duemonth={duemonth}
                  setDuemonth={setDuemonth}
                  dueday={dueday}
                  setDueday={setDueday}
                />
              }
            ></Route>

            <Route
              path="/search"
              element={
                <SearchedBlogsPage
                  user_follower={user_follower}
                  setUserfollower={setUserfollower}
                  users={users}
                  setUsers={setUsers}
                  categories={categories}
                  blogs={blogs}
                  setBlogs={setBlogs}
                  blog_user_likes={blog_user_likes}
                  setBlogUserLikes={setBlogUserLikes}
                  blog_user_saves={blog_user_saves}
                  setBlogUserSaves={setBlogUserSaves}
                  currentuser={currentuser}
                  setCurrentuser={setCurrentuser}
                />
              }
            ></Route>

            <Route
              path="/category/:category_id"
              element={
                <CategoryBlogsPage
                  user_follower={user_follower}
                  setUserfollower={setUserfollower}
                  users={users}
                  setUsers={setUsers}
                  categories={categories}
                  blogs={blogs}
                  setBlogs={setBlogs}
                  blog_user_likes={blog_user_likes}
                  setBlogUserLikes={setBlogUserLikes}
                  blog_user_saves={blog_user_saves}
                  setBlogUserSaves={setBlogUserSaves}
                  currentuser={currentuser}
                  setCurrentuser={setCurrentuser}
                />
              }
            ></Route>

            <Route
              path="/profile/:user_id"
              element={
                <ProfilePage
                  user_follower={user_follower}
                  setUserfollower={setUserfollower}
                  setUsers={setUsers}
                  categories={categories}
                  blogs={blogs}
                  setBlogs={setBlogs}
                  blog_user_likes={blog_user_likes}
                  setBlogUserLikes={setBlogUserLikes}
                  users={users}
                  currentuser={currentuser}
                  setCurrentuser={setCurrentuser}
                  blog_user_saves={blog_user_saves}
                  setBlogUserSaves={setBlogUserSaves}
                />
              }
            ></Route>

            <Route
              path="/edit/:blog_id"
              element={
                <EditBlogPage
                  blogs={blogs}
                  setBlogs={setBlogs}
                  input={input}
                  setInput={setInput}
                  content={content}
                  setContent={setContent}
                  file={file}
                  setFile={setFile}
                  category={category}
                  setCategory={setCategory}
                  dueyear={dueyear}
                  setDueyear={setDueyear}
                  currentuser={currentuser}
                  setCurrentuser={setCurrentuser}
                  duemonth={duemonth}
                  setDuemonth={setDuemonth}
                  dueday={dueday}
                  setDueday={setDueday}
                />
              }
            ></Route>

            <Route
              path="/blog/:blog_id"
              element={
                <Blogpage
                  user_follower={user_follower}
                  setUserfollower={setUserfollower}
                  users={users}
                  setUsers={setUsers}
                  categories={categories}
                  currentuser={currentuser}
                  setCurrentuser={setCurrentuser}
                  blogs={blogs}
                  setBlogs={setBlogs}
                  input={input}
                  setInput={setInput}
                  content={content}
                  setContent={setContent}
                  file={file}
                  setFile={setFile}
                  blog_user_likes={blog_user_likes}
                  setBlogUserLikes={setBlogUserLikes}
                  blog_user_saves={blog_user_saves}
                  setBlogUserSaves={setBlogUserSaves}
                />
              }
            ></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
