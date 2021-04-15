import React, { useState } from "react";

const Jas = () => {
    const [cont ,setcount] = useState("");
    const [date , setdata] = useState();
    const [num ,setnum] = useState("");
    const [int , setint] = useState();


    const oninput = (event) =>
    {
        setcount(event.target.value);
    }
    const showdata =()=>
    {
        setdata(cont);
    }
    const onoutput =(event) =>
    {
        setnum(event.target.value);
    }
    const showconcat = () =>
    {
        setint(num);
    }
    return(
        <>
        <h1>Hello {date} {int}</h1>
        <input type="text" placeholder="Enter the Password"onChange={e=> oninput(e) } value={date}></input>
        <input type="text" placeholder="Write Your Text" onChange={e=> onoutput(e) } value={int}></input>
        <button onClick = {e=>{showdata(); showconcat()}}>click here</button>
        </>
    );
};

export default Jas;