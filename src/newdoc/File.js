import React , {useState} from 'react';


const File = ()=>{
    const [name, setName] = useState({
        Num : "",
        lname : "",
       });
    
       const oninput = (event) =>
        {
            const value = event.target.name;
            console.log(event);
            setName ((preValue) =>{
            if(value === "Num")
            {
             return {
                Num : value,
                lname : preValue.lname,
             };
            }
            else if(value === "lname"){
                return{
                Num :preValue.fname,
                lname : value,
                };
            }
        });
    };
    return(
        <>
        <h1>Hello World {name.Num} {name.lname}</h1>
        <h1>Hello World {name.Num} {name.lname}</h1>
        <input name ="text" type="text" placeholder="enter the password" onChange={e => oninput(e)} value={name.Num}></input>
        <input name ="text" type="text" placeholder="enter the password" onChange={e => oninput(e)} value={name.lname}></input> 
        </>
    );
};

export default File;