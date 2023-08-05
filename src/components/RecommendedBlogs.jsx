import { useLocation} from "react-router-dom";
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
margin: 2px 0px;
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

export const RecommendedBlogs=(props)=>{

var user_id= props.currentuser.id;

var blog_category= new Array(0);  //in this array we are storing all posts liked or saved by user
var x=new Array(0);

props.blog_user_likes.map(function(item){
    if(item.user_id==user_id) {
        blog_category.push(item.blog_id);
        x.push({blog_id:item.blog_id, user_id: item.user_id});
    }
})

props.blog_user_saves.map(function(item){
    if(item.user_id==user_id) {
        blog_category.push(item.blog_id);
        x.push({blog_id:item.blog_id, user_id: item.user_id});
    }
})

var categories_arr= new Array(0);

props.blogs.map(function(item){
    blog_category.map(function(item2){
        if(item.id==item2){
           categories_arr.push(item.category);
        }
    })
})

//console.log(categories_arr);
var new_arr= new Array(0);
props.blogs.map(function(item){

    if(categories_arr.includes(item.category) && !x.find(e=> e.blog_id==item.id && e.user_id==user_id )) {
      
          new_arr.push(item);
    }})

//console.log(new_arr);

    return (
    <>
     <div class="c6">
    <Subheading>Recommended for you</Subheading>
    {
        new_arr.map(function(item)
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