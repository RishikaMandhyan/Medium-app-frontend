import React from "react"
import { Link } from "react-router-dom"
import { styled } from "styled-components";



const Btn= styled.button `
width: fit-content;
padding: 10px;
margin: 5px 5px;
height: 33px;
border-radius: 8px;
text-decoration: none;
border:none;
background-color:#e3e4e6;
`

const Subheading=styled.h2`
margin-top:0px;
`
export const CategoryList=(props)=>{

    //console.log(props.categories);
    return (
    <>
    <div class="c6">
     <Subheading>Explore Categories</Subheading>
         <div>
            {
                props.categories.map(function(item){

                    return (<>
                        <Btn><Link to={`/category/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>{item.name}</Link></Btn>
                    </>)
                })
            }
         </div>

         </div>

    </>)
}