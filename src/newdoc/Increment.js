import React ,{useState} from 'react';

const Spp = () =>
{
    const [count,setCount]=useState(0);
    const onAdd = (e) =>
        {
            setCount(count+1);
        }
    const onSub = (e) =>
    {
        if(count===0){
            return
        }
        setCount(count-1);
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={e=>onAdd()}></button>
        <button onClick={e=>onSub()}></button>
        </>
    );
}
export default Spp;