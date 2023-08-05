import { useLocation} from "react-router-dom";
import { useEffect } from "react";
import { styled } from "styled-components";



const BlogItem= styled.div`
margin: 15px 0px;
border-bottom: 1px solid #bfc0c1;
padding-bottom: 10px;
`

const Subheading=styled.h2`
margin: 0px 0px 15px 0px;
height: fit-content;
${'' /* max-height: 60px; */}
`
const BlogContent=styled.h3`
margin: 0px 0px 45px 0px;
font-weight: 400;
height: fit-content;
${'' /* max-height: 65px; */}
`
const Author=styled.h4`
margin: 0px 10px 0px 0px;
font-size: 14px;
font-weight: 400;
`
const Btn2= styled.div `
width: fit-content;
padding: 2px 10px 5px;
margin: 5px 10px 5px 0px;
height: 22px;
border-radius: 10px;
text-decoration: none;
border:none;
background-color:#e3e4e6;
display: flex;
align-items: center;
`
const Icons= styled.span`
font-size: 16px;
display: flex;
margin-left: 20px;
`

export const Blog=(props)=>{
const location=useLocation();
const blog_id= location.pathname.split("/")[2];

console.log(props);

var blog;
props.blogs.map(function(item){
    if(item.id==blog_id){
     
        blog=item;

    }
})


//id here is blog id
const handleLike=(id)=>{


    var editedArr=new Array(0);
    props.blogs.map(function(item){
        if(item.id==id){
         
            editedArr.push({...item, number_likes:item.number_likes+1});
            
        }else{
            editedArr.push(item);
        }
    })


    props.setBlogs(editedArr);
    props.setBlogUserLikes([...props.blog_user_likes, {blog_id: id, user_id: props.currentuser.id}]);
 
}

//id here is blog id
const handleSave=(id)=>{

    var editedArr=new Array(0);
    props.blogs.map(function(item){
        if(item.id==id){
         
            editedArr.push({...item, number_saves:item.number_saves+1});
            
        }else{
            editedArr.push(item);
        }
    })

    props.setBlogs(editedArr);
    props.setBlogUserSaves([...props.blog_user_saves, {blog_id: id, user_id: props.currentuser.id}]);
 
}


useEffect(()=>{

    //handles the increasing of view count of the blog when we visit a blog
    var editedArr=new Array(0);
    props.blogs.map(function(item){
        if(item.id==blog_id){
            
            editedArr.push({...item, number_views:item.number_views+1});
            
        }else{
            editedArr.push(item);
        }
    })

    props.setBlogs(editedArr);


    //handles increasing blog view count of currentuser in both currentuser and users table
    var editedArr2=new Array(0);
    props.users.map(function(item){
        if(item.id==props.currentuser.id)
        {
           editedArr2.push({...item, views: item.views+1});
        }
        else
        {
            editedArr2.push(item);
        }
    })

    props.setCurrentuser({...props.currentuser, views: props.currentuser.views+1});
    props.setUsers(editedArr2)

}, []);

//console.log(props.blogs);
    return (<>

            <BlogItem>
            <div>
            <Subheading id={blog.id} >{blog.input}</Subheading>
            <BlogContent >{blog.content}</BlogContent>

            </div>
            <div class="c3">
            <Btn2>
                <span>{blog.category}</span>
                </Btn2>  
                <div class="c4">                        
                <Icons>
                <span  onClick={()=>{handleLike(blog.id)}}class="heart_icon material-symbols-outlined">favorite</span>
                {blog.number_likes}</Icons>
                <Icons><span onClick={()=>{handleSave(blog.id)}} class=" save_icon material-symbols-outlined">bookmark</span>{blog.number_saves}</Icons>
            </div>               
            </div>
            <div class="c5"><Author>{blog.author_name}</Author>
            <Author>July 30</Author> </div>  
            </BlogItem>

    </>)
}



