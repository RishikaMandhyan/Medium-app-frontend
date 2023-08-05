import { useState } from "react";
import { TodoList } from "./Home";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const CategoryBlogs=(props)=>{

    const location= useLocation();
    const category_id= location.pathname.split("/")[2];

    console.log(props.blogs);
    var categoryblogs=[...props.blogs];

        for(var i=0;i<categoryblogs.length;i++)
        {
            //console.log("hi");
            if(categoryblogs[i].category==category_id)
            {
                categoryblogs[i].display=true;   
            }
            else {
                categoryblogs[i].display=false;
            }
        }

  
    console.log(categoryblogs);

    return (<>
    <TodoList blogs={categoryblogs} setBlogs={props.setBlogs} blog_user_likes={props.blog_user_likes} setBlogUserLikes={props.setBlogUserLikes} 
    blog_user_saves={props.blog_user_saves} setBlogUserSaves={props.setBlogUserSaves} currentuser={props.currentuser} setCurrentuser={props.setCurrentuser}/>
    </>)

}

export default CategoryBlogs;

