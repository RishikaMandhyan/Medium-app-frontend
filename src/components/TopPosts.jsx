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

export const TopPosts=(props)=>{

    var new_arr=[...props.blogs];
    //console.log(props.blogs);
    new_arr.sort(function(a,b){
        if (a.number_likes+a.number_saves+a.number_views< b.number_likes+b.number_saves+b.number_views) return 1;
        else return -1;
    }) 

    var new_arr2=[...new_arr.splice(0,6)];
    
    //console.log(new_arr2);
    return (
    <>
    <div class="c6">
    <Subheading>Top blogs</Subheading>
    {
        new_arr2.map(function(item)
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



{/* <div>
{props.blogs.map((item)=>{
    
    if(item.display){
        return( <>
        
        </>)
    }
    
})}
</div> */}