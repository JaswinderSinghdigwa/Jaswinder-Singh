import React, { useState } from "react"


const App = () =>{
    
    const[name, setName]=useState();
    const[Comname, setComname] =useState();
    const upDate = (event) =>
     {
         console.log(event.target.value);
        setName(event.target.value);

     }
     const onSubmit = (event)  => 
      {
          console.log(event.target.value);
        setComname(name);
    }
    return(
        <>
        <h1>Hello {Comname} </h1> 
        <input type="input" placeholder="Enter the Value of Password" onChange= {event=>upDate(event)} value = {name}></input>
        <button onClick={onSubmit}>click here</button>
        </>
    )
};
 
export default App;