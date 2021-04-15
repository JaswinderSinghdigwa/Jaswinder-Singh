
import  React , { useState } from 'react'

const App = () =>{
    const purple= "#8e44ad";
    const Naam = "shineind";
    const [color , setColor] = useState(purple);
    const [name, setName] = useState(Naam);
const bgchange = () =>
{
    let newBg="#FFBD33";
    setColor(color === newBg ? purple : newBg);
}
const nameChange = () =>{
    setName(name);
}

return(
    <div style={{background : color}}>
    <button onClick = {e=>{bgchange(); nameChange()}} > Click Me </button>
    </div>
);
}
export default App;

