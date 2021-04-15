import React, { useState } from "react";


const Render = () =>
{
    const [name, setName] = useState({
     fname :"",
     lname : "",
     email :"",
    });
    const [fullname, setfullname] =useState();
    const onInput = (event) =>
    {
        setName(event.target.value);
        console.log(event.target.value);
        
        
             // const value = event.target.value;
        // const name = event.target.name;
        // setName((preValue) => {
        //     console.log(preValue);
        //     if(name === "fname"){
        //     return{
        //         fname:value,
        //         lname:preValue.lname,
        //         email:preValue.email,
        //     };
        // }
        //     else if(name === "lname"){
        //     return{
        //         fname:preValue.fname,
        //         lname:value,
        //         email:preValue.email,
        //     };
        // }
        //     else if(name === "email"){
        //     return{
        //         fname:preValue.fname,
        //         lname:preValue.lname,
        //         email:value,
        //     };
        // }
        // }
        // );
    } 
        const onSubmit = (event) =>
        {
             
            event.preventDefault();
        };
    return(
    <>
    <form onSubmit={e=>onSubmit(e)}></form>
    <h1>Hello World {name.fname} {name.lname} {name.email}</h1>
    <input  name = "fname" placeholder="Enter the Password" onChange={e=>onInput(e)} value={name.fname}></input>
    <input  name = "lname" placeholder="Enter the Password" onChange={e=>onInput(e)} value={name.lname}></input>
    <input  name = "email" placeholder="Enter the Password" onChange={e=>onInput(e)} value={name.email}></input>
    <button  onSubmit={e=>onSubmit(e)}>click here</button>
    </>
    );
}
    export default Render;  