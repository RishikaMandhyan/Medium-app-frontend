import { Blog } from "../components/Blog"
import { SimilarAuthorPosts } from "../components/SimilarAuthorPosts"
import { Profile } from "../components/Profile";
import {SearchBar, FilterCategoryDropdown, ViewTaskDropdown, TodoList, CancelSearch} from "../components/Home.jsx"
import UserList from "../components/UserList.jsx";
import { Link } from "react-router-dom";
import { SavedPosts } from "../components/SavedPosts.jsx";
import { LikedBlogs } from "../components/LikedBlogs.jsx";
import { styled } from "styled-components";
import { TopPosts } from "../components/TopPosts.jsx";
import { CategoryList } from "../components/CategoryList.jsx";
import { Plan_popup } from "../components/Plan_popup";



const Master_container= styled.div `
display: flex;
flex-direction: column;
width: 100vw;
height: fit-content;
${'' /* background-color: #cfc7d4; */}
position: absolute;
top:0;
`
const Navbar_container= styled.div `
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
height: 65px;
background-color: white;
padding: 10px 30px 10px 10px;
position: sticky;
top:0;
box-shadow:  rgba(0, 0, 0, 0.14) 0px 3px 6px;
`
const Container2= styled.div `
display: flex;
flex-direction: row;
width: 100%;
height: fit-content;
${'' /* background-color: gray; */}
`
const Container3= styled.div `
display: flex;
flex-direction: column;
width: 80%;
padding:  20px 70px;
height: fit-content;
${'' /* background-color: yellow; */}
`
const Container4= styled.div `
display: flex;
flex-direction: column;
width: 20%;
padding: 20px;
height: fit-content;
border-left: 1px solid #bfc0c1;
${'' /* background-color: pink; */}
`

const Btn= styled.button `

width: 70px;
padding: 10px;
margin: 0px 10px;
height: 35px;
border-radius: 8px;
border:0;
background-color:#e3e4e6;
`

const Navheading= styled.h1`
margin: 0px 20px;
`

const C2=styled.div`
width: fit-content;
display: flex;
align-items: center;
display: flex;
`



export const Blogpage=(props)=>{
    return (
        <>
<Master_container>
{props.currentuser.views>props.currentuser.plan_id
? 
<Plan_popup users={props.users}  setUsers={props.setUsers} currentuser={props.currentuser} setCurrentuser={props.setCurrentuser} /> 
: 
null}

<Navbar_container>    
<Navheading><Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>Blogger</Link></Navheading>   

<C2>
<SearchBar blogs={props.blogs} setBlogs={props.setBlogs}/>

<Btn><Link to={`/${props.currentuser.id}/add`} style={{ textDecoration: 'none', color: 'black' }}>Publish</Link></Btn>
<div>
    <Link to={`/profile/${props.currentuser.id}`} style={{ textDecoration: 'none', color: 'black' }}>
    <span class="material-symbols-outlined">account_circle</span>
    </Link>
</div>
</C2> 

</Navbar_container>

<Container2>

    <Container3>
    {/* <ViewTaskDropdown blogs={props.blogs} setBlogs={props.setBlogs}/> */}

    <Blog user_follower={props.user_follower} setUserfollower={props.setUserfollower} users={props.users}  setUsers={props.setUsers} categories={props.categories} currentuser={props.currentuser} setCurrentuser={props.setCurrentuser}  blogs={props.blogs} 
            setBlogs={props.setBlogs} input={props.input} setInput={props.setInput} content={props.content} setContent={props.setContent} 
                file={props.file} setFile={props.setFile} blog_user_likes={props.blog_user_likes} setBlogUserLikes={props.setBlogUserLikes} 
                blog_user_saves={props.blog_user_saves} setBlogUserSaves={props.setBlogUserSaves} />
    </Container3>

    <Container4>
    <SimilarAuthorPosts blogs={props.blogs}/>
       {/* <CategoryList categories={props.categories}/> */}
       <TopPosts blogs={props.blogs}/>
       <UserList user_follower={props.user_follower} setUserfollower={props.setUserfollower} 
currentuser={props.currentuser} setCurrentuser={props.setCurrentuser} users={props.users} setUsers={props.setUsers}/>
               <SavedPosts blogs={props.blogs}  currentuser={props.currentuser} blog_user_saves={props.blog_user_saves} setBlogUserSaves={props.setBlogUserSaves}/>

               <LikedBlogs blogs={props.blogs}  currentuser={props.currentuser} blog_user_likes={props.blog_user_likes}/>


    </Container4>

</Container2>
{/* <CancelSearch blogs={props.blogs} setBlogs={props.setBlogs} /> */}

</Master_container>








         
            

           
        </>
    )
}