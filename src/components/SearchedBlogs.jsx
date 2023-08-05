import { useState } from "react";
import { TodoList } from "./Home";
import { useEffect } from "react";

const SearchedBlogs=(props)=>{

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const searchQuery = urlParams.get('q');

    console.log(props.blogs);
    var searchedblogs=[...props.blogs];
    console.log(searchQuery); // Output: "multi-word search"

    if(searchQuery.length>0)
    {
        
        for(var i=0;i<searchedblogs.length;i++)
        {
            console.log("hi");
            if(!(((searchedblogs[i].input).toLowerCase().includes(searchQuery.toLowerCase()))|| ((searchedblogs[i].content).toLowerCase().includes(searchQuery.toLowerCase()))||  ((searchedblogs[i].author_name).toLowerCase().includes(searchQuery.toLowerCase())) ))
            {
                searchedblogs[i].display=false;   
            }
            else {
                searchedblogs[i].display=true;
            }
        }
    }
    console.log(searchedblogs);

    return (<>
    <TodoList blogs={searchedblogs} setBlogs={props.setBlogs} blog_user_likes={props.blog_user_likes} setBlogUserLikes={props.setBlogUserLikes} 
    blog_user_saves={props.blog_user_saves} setBlogUserSaves={props.setBlogUserSaves} currentuser={props.currentuser} setCurrentuser={props.setCurrentuser}/>
    </>)

}

export default SearchedBlogs;

