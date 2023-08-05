
import { useState } from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

// import { MyContext } from "../MyContext";


function CancelSearch(props){


    const cancel_search_func=(e)=>
    {
        var newBlogs=new Array(0);
            for(var i=0;i<props.blogs.length;i++)
            {
                    newBlogs.push({...(props.blogs)[i], display:true});
            }
            props.setBlogs(newBlogs);
    }

    return (<>
        <button  onClick={cancel_search_func}> Cancel search</button> 
    </>)
}

const BlogItem= styled.div`
margin: 15px 0px;
border-bottom: 1px solid #bfc0c1;
padding-bottom: 10px;
`

const Subheading=styled.h2`
margin: 0px 0px 10px 0px;
height: fit-content;
max-height: 60px;
overflow: hidden;
`
const BlogContent=styled.h3`
margin: 0px 0px 5px 0px;
font-weight: 400;
height: fit-content;
overflow: hidden;
max-height: 80px;
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

function TodoList(props){

console.log(props);
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

    return (<>
        <div>
            {props.blogs.map((item)=>{
                
                if(item.display){
                    return( <>
                    <BlogItem>
                    <div><Link to={`/blog/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <Subheading id={item.id} >{item.input}</Subheading>
                    <BlogContent >{item.content}</BlogContent>
                    </Link>
                    </div>
                    <div class="c3">
                      <Btn2>
                        <span>{item.category}</span>
                        </Btn2>  
                        <div class="c4">                        
                        <Icons>
                        <span  onClick={()=>{handleLike(item.id)}}class="heart_icon material-symbols-outlined">favorite</span>
                        {item.number_likes}</Icons>
                        <Icons><span onClick={()=>{handleSave(item.id)}} class=" save_icon material-symbols-outlined">bookmark</span>{item.number_saves}</Icons>
</div>               
                    </div>
                    <div class="c5"><Author>{item.author_name}</Author>
                    <Author>July 30</Author> </div>  
                    </BlogItem>
                    </>)
                }
                
            })}
            </div>

    </>)
}


function ViewTaskDropdown(props){


    const viewTask=(e)=>{

        if(e.target.value=="Select") props.setBlogs(props.blogs);
    
        else 
        { 
            var newBlogs=new Array(0);
            newBlogs=[...props.blogs];
            props.blogs.map(function(item)
            {
               
              if(e.target.value=="Likes (High to Low)") 
              {
                 newBlogs.sort(function(a,b){
                    if(a.number_likes<b.number_likes) return 1;
                    else return -1;
                 })
              } 
              else if (e.target.value=="Likes (Low to High)")
              {
                newBlogs.sort(function(a,b){
                    if(a.number_likes<b.number_likes) return -1;
                    else return 1;
                 })
              }
                
              else if (e.target.value=="Views (High to Low)")
              {
                newBlogs.sort(function(a,b){
                    if(a.number_views<b.number_views) return 1;
                    else return -1;
                 })
              }

              else if (e.target.value=="Views (Low to High)")
              {
                newBlogs.sort(function(a,b){
                    if(a.number_views<b.number_views) return -1;
                    else return 1;
                 })
              }

              
            })
            props.setBlogs(newBlogs);    
        }
            
    }


    return (<>
        {/* can be made into a seperate component */}
        {/* <label for="view">Sort By</label> */}
        <select name="view" onChange={viewTask}>
        <option>Sort by</option>
        <option>Likes (High to Low)</option>
        <option>Likes (Low to High)</option>
        <option>Views (High to Low)</option>
        <option>Views (Low to High)</option>

    </select>
   
    </>)

}

function FilterCategoryDropdown(props)
{

     
 const filterCategory=(e)=>{
    var newBlogs=new Array(0);
    props.blogs.map(function(item){
            //console.log(e.target.value, item.category);
           
            if(item.category!=e.target.value){
                newBlogs.push({...item, display:false});
            } 
            else newBlogs.push({...item, display: true});
        })
        props.setBlogs(newBlogs);    
}

    return (<>
         {/* can be made into a seperate component */}
        <label for="filterCategory">Filter by Category</label>
        <select name="filterCategory" onChange={filterCategory}>
        <option>Select</option>
        <option>Tech</option>
        <option>Education</option>
        <option>Product</option>
    </select>
  
    </>)
}

const SearchContainer=styled.div`
height: 35px;
border-radius: 8px;
border: 1px solid gray;
`

const SearchInput=styled.input`
height: 30px;
border: none;
border-radius: 8px;
`

const Btn= styled.button `
width: 70px;
padding: 10px;
margin: 0px 0px 0px 0px;
height: 34px;
border-top-right-radius: 8px;
border-bottom-right-radius: 8px;
border:0;
background-color:#e3e4e6;
`

function SearchBar(props){

const [search, setSearch]=useState("");

    const takeSearchInput=(e)=>
    {
        var searchQuery=e.target.value.replace(/ /g, '+');
        setSearch(searchQuery);
    }


    return (<>
    <SearchContainer>
    <SearchInput type="text" value={search} onChange={takeSearchInput}></SearchInput>
    <Btn> <Link to ={`/search?q=${search}`} style={{ textDecoration: 'none', color: 'black' }}>Search</Link></Btn>

    </SearchContainer>
    </>)
}

export {SearchBar, FilterCategoryDropdown, ViewTaskDropdown, TodoList, CancelSearch};




