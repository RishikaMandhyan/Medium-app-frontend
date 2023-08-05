import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


export const EditBlog=(props)=>{

const location= useLocation();
const blog_id= location.pathname.split("/")[2];

var authorid, num_likes, num_saves;

//finding the author id for this particular blog
useEffect(()=>{
    props.blogs.map(function(item){
        if(item.id==blog_id){
            props.setInput(item.input);
            props.setContent(item.content);
            props.setCategory(item.category);
        }
    })
}, []);



const takeUserTitle=(e)=>
{
    props.setInput(e.target.value); 
}

const takeUserContent=(e)=>
{
    props.setContent(e.target.value); 
}

const takeUserFile=(e)=>
{
    props.setFile(URL.createObjectURL(e.target.files[0]));
}
const takeUserDate=(e)=>{

    props.setDueyear(new Date(e.target.value).getFullYear());
    props.setDuemonth(new Date(e.target.value).getMonth());
    props.setDueday(new Date(e.target.value).getDay());
    
}

const addCategory=(e)=>{

    props.setCategory(e.target.value);
}

const addBlog=()=>
{
    
    props.blogs.map(function(item){
        if(item.id==blog_id){

            console.log("hi");
            authorid=item.author_id;
            console.log(authorid);
            num_likes=item.number_likes;
            num_saves=item.number_saves;
        }
    })

    var new_blog={
        "input": props.input,
        "content":props.content,
        "id": blog_id,
        "display": true,
        "category": props.category,
        "done":false,
        "dueyear":props.dueyear,
        "duemonth":props.duemonth,
        "file": props.file,
        "author_id": authorid,
        "number_likes":num_likes,
        "number_saves":num_saves,
        "number_comments":3
    };

    var temp_arr=new Array(0);
    for(var i=0;i<props.blogs.length;i++){

        if(props.blogs[i].id==blog_id){

            //console.log(props.blogs[i].id,blog_id);
            temp_arr.push({...new_blog});
        }

        else{

            temp_arr.push({...props.blogs[i]});
        }
    }

    props.setBlogs([...temp_arr]);

    //props.setBlogs([...props.blogs, new_blog]);
    props.setInput("");
    props.setContent("");
    //console.log(props.blogs);

}


    return (
        <>
            <input class="title" type="text" value={props.input} onChange={takeUserTitle}></input>
            <textarea class="content" type="text" value={props.content} onChange={takeUserContent}></textarea>
            <input class="file" type="file" id="myFile" name="filename" accept="image/*, image/jpeg" onChange={takeUserFile}></input>

          
            <select class="category" name="category" onChange={addCategory}>
            <option>Select Category</option>
            <option>tech</option>
            <option>education</option>
            <option>product</option>
            <option>api</option>
            <option>java</option>
            <option>ai</option>
            <option>devops</option>
            <option>uiux</option>
            </select>

            <br/><br/>

        {/* <label for="dateInput">Date:</label>
        <input type="date" onChange={takeUserDate} id="dateInput" required/> */}

        <button class = "submit" onClick={addBlog}> Submit</button>

        </>
    )
}







