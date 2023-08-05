import { useState } from "react";
import { TodoList } from "./Home";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { styled } from "styled-components";


const Btn= styled.div `
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
cursor: pointer;
`

const Subheading=styled.h2`
margin-top:10px;
margin-bottom: 10px;
`
const UserList=(props)=>{

//array of ppl excluding the user himself
var follow_arr=new Array(0);
props.users.map(function(item){

    if(item.id!=props.currentuser.id){
        follow_arr.push(item);
    }

})


//here id received from the button is the id of the person tht the currentuser wanna follow
function follow(id)
{
   
   props.setCurrentuser({...props.currentuser, number_following: props.currentuser.number_following+1});
   
   props.setUserfollower([...props.user_follower,{user_id: id, follower_id:props.currentuser.id}]);


    for( var i=0;i<props.users.length;i++){

        
        //console.log(props.users[i].id, props.currentuser.id);

         if(props.users[i].id==props.currentuser.id){
    
        console.log(props.users[i].id, props.currentuser.id);

        var temp2= {...props.users[i], number_following: props.currentuser.number_following+1};
        console.log(temp2);

        var temp=[...props.users.splice(0,i), ...props.users.splice(i+1)];
        console.log(temp);

        props.setUsers([...temp, temp2]);
        }
    }

   }


    return (<>
    <div class="c6">
    <Subheading>Users to follow</Subheading>
        {follow_arr.map(function(item){
            return (
                <>
                    <div class="c7">
                        <span><Link to={`/profile/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>{item.name}</Link></span>
                        <Btn onClick={()=>{follow(item.id)}}>Follow</Btn>
                    </div>
                </>
            )
        })}
    </div>

    </>)

}

export default UserList;

