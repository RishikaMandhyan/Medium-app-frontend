import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


function Input(props){

const [uid, setUid]=useState(JSON.parse(localStorage.getItem("uid")));
if(uid==null) setUid(parseInt("0"));

useEffect(()=>{

    localStorage.setItem("uid", uid);
});

const takeUserTitle=(e)=>
{
    props.setInput(e.target.value); 
}

const takeUserContent=(e)=>
{
    props.setContent(e.target.value); 
}

const location= useLocation();
const user_id= location.pathname.split("/")[1];

var author_name="";
props.users.map(function(item){
    if(item.id==user_id)
    {
        author_name=item.name;
    }
})

const takeUserFile=(e)=>
{
    props.setFile(URL.createObjectURL(e.target.files[0]));
}

const addBlog=()=>
{
    var new_blog={
        "input": props.input,
        "content":props.content,
        "id": uid,
        "display": true,
        "category": props.category,
        "done":false,
        "dueyear":props.dueyear,
        "duemonth":props.duemonth,
        "file": props.file,
        "author_id": user_id,
        "author_name": author_name,
        "number_likes":0,
        "number_saves":0,
        "number_views":0,
        "number_comments":0
    };

    setUid(uid+1);

    props.setBlogs([...props.blogs, new_blog]);
    props.setInput("");
    props.setContent("");
    console.log(props.blogs);
}
    return (
        <>
            <input class="title" placeholder="Title" type="text" value={props.input} onChange={takeUserTitle}></input>
            <textarea class="content" placeholder="Content" type="text" value={props.content} onChange={takeUserContent}></textarea>
            <div class="c9">
            <input class="file" type="file" id="myFile" name="filename" accept="image/*, image/jpeg" onChange={takeUserFile}></input>
            <button class="submit" onClick={addBlog}> Submit</button>
            </div>
            </>
    )
}

function DateTimeBar(props){

    // const takeUserDate=(e)=>{

        props.setDueyear(new Date().getFullYear());
        props.setDuemonth(new Date().getMonth());
        props.setDueday(new Date().getDay());
        
    // }


    // return (<>
    // {/* can be made into a seperate component */}
    // <label for="dateInput">Date:</label>
    // <input type="date" onChange={takeUserDate} id="dateInput" required/>

    // </>)
}

function ChooseCategoryDropdown(props){


    const addCategory=(e)=>{

        props.setCategory(e.target.value);
    }

    return (<>

        {/* can be made into a seperate component */}
        {/* <label for="category">Category</label> */}
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
    </>)
}



export {Input, DateTimeBar, ChooseCategoryDropdown};



