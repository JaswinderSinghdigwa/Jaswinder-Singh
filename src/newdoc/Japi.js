import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () =>
{
    const [count ,setCount] = useState([]);

    useEffect(() => 
    {
        async function getData  ()  {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(res);
            setCount(res.data);
        }
    getData ();
    }
    ,[]);
return(
    <>
    {
        count.map((cvalue)=>{
            return(<h1>{cvalue.body}</h1>)
        })
    };
    </>
);
};
export default App;