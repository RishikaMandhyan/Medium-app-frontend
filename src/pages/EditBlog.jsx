import { EditBlog } from "../components/EditBlog.jsx";
import {SearchBar, FilterCategoryDropdown, ViewTaskDropdown, TodoList, CancelSearch} from "../components/Home.jsx"
import { Link } from "react-router-dom";

import { styled } from "styled-components";


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
padding: 50px;
display: flex;
flex-direction: column;
width: 100%;
height: fit-content;
justify-content: center;
align-items: center;
${'' /* background-color: gray; */}
`
const Container3= styled.div `
padding: 10px;
display: flex;
flex-direction: column;
justify-content: center;
width: 70%;
height: fit-content;
${'' /* background-color: gray; */}
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



function EditBlogPage(props){
    return (<>
        <Master_container>

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
<EditBlog blogs={props.blogs} setBlogs={props.setBlogs} input={props.input} setInput={props.setInput} content={props.content} setContent={props.setContent} file={props.file} setFile={props.setFile} category={props.category} setCategory={props.setCategory} 
                dueyear={props.dueyear} setDueyear={props.setDueyear}  duemonth={props.duemonth} setDuemonth={props.setDuemonth} dueday={props.dueday} setDueday={props.setDueday}/>
        </Container3>
</Container2>

</Master_container>


    </>)
}

export default EditBlogPage;