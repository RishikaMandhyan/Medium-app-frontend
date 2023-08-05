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

export const SimilarAuthorPosts=(props)=>{

const location=useLocation();
const blog_id= location.pathname.split("/")[2];

var blog_category;
props.blogs.map(function(item){
   
    if(item.id==blog_id) {
        blog_category=item.category;
    }
})

var new_arr=new Array(0);
props.blogs.map(function(item){

    if(item.category==blog_category) new_arr.push(item);
})

    return (
    <>
     <div class="c6">
    <Subheading>Posts from similar authors</Subheading>
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