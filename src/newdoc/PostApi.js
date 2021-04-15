import axios from 'axios';
import React from 'react';
import {useState} from 'react';


const App = () =>{

    const [name, setName] = useState({
        fname :"",
        lname : "",
        email :"",
        id : "",
       });
       const onInput = (event) =>
       {
           setName({[event.target.name] : event.target.value});
           
       } 
           const onSubmit = async(event) =>
           {
               event.preventDefault();
               const res = await axios.post('https://jsonplaceholder.typicode.com/posts',name)
               .then (response => {
                   console.log(response)
               })
               .catch (error => {
                   console.log(error);
               })
        
           };
       return(
       <>
       <form onSubmit={e=>onSubmit(e)}></form>
       <h1>Hello World {name.fname} {name.lname} {name.email}</h1>
       <input  name = "fname" placeholder="Enter the Password" onChange={e=>onInput(e)} value={name.fname}></input>
       <input  name = "lname" placeholder="Enter the Password" onChange={e=>onInput(e)} value={name.lname}></input>
       <input  name = "email" placeholder="Enter the Password" onChange={e=>onInput(e)} value={name.email}></input>
       <input  name = "id" placeholder="Enter the Password" onChange={e=>onInput(e)} value={name.id}></input>
       <button  onClick={e=>onSubmit(e)}>click here</button>
       </>
       );

};
   export default App;  