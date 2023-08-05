import { Link } from "react-router-dom";
import { styled } from "styled-components";


const Subheading=styled.h2`
margin-top:20px;
margin-bottom:30px;
`
const Subheading2=styled.p`
margin-top:10px;
margin-bottom: 5px;
font-weight: 600;
font-size:18px;
`

const BlogItem= styled.div`
margin: 0px 0px;
${'' /* border-bottom: 1px solid #bfc0c1; */}
padding-bottom: 0px;
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

export const LikedBlogs=(props)=>{

    var new_arr=[...props.blog_user_likes];
    console.log(props.blogs);
    
    const user_id= props.currentuser.id;

    var blog_arr= new Array(0);

    new_arr.map(function(item){
        if(item.user_id==user_id){
            blog_arr.push(item.blog_id);
        }
    })

    console.log(blog_arr);


    var blog_arr2= new Array(0);
    blog_arr.map(function(item)
    {
         props.blogs.map(function(item2)
         {
            if(item2.id==item){

                blog_arr2.push(item2);

            }
         })
    })

    
    console.log(blog_arr2);

    return (
    <>
    <div class="c6">
    <Subheading>Liked Blogs</Subheading>
    {
        blog_arr2.map(function(item)
        {
            return (<>
 
            <BlogItem>
        <div><Link to={`/blog/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <Subheading2 id={item.id} >{item.input}</Subheading2>
        </Link>
        </div>
        
        <div class="c5">
        <Author>{item.author_name}</Author>
        <div class="c3">
          <Btn2>
            <span>{item.category}</span>
            </Btn2>   
        </div>
 </div>  
        </BlogItem>
            </>)
            })
    }
    </div>
    </>)
}