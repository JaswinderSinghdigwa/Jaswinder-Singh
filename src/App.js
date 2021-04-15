import logo from './logo.svg';
import './App.css';
import Car from './Data';
import Sdar from './Sdar';
import  { useState } from 'react';
import Jas from './newdoc/jas'

 const SlotMac = (props) =>
{
    let x = props.x;
    let y = props.y;
    let z = props.z;

    if (x === y && y === z) {
    return(
    <>
    <h1>{x} {y} {z}</h1>
    <h1>this is matching</h1>
    <hr></hr>
    </>
    );
    }
    else {
        return(
        <>
        <h1>{x} {y} {z}</h1>
        <hr></hr>
        <h1>This is not Matching</h1>
        </>
        );  
    }
};

const App = () => {
  
  const state = useState();
  const V = new Date().toLocaleDateString();
  const [count , setcount] = useState(V);
  
  
const InNum = () =>
  {
   
     setcount(count+10);
  };
  
return(
  <>
  
  <div>
  <button onClick = {InNum}></button>
  <h1>{count}</h1>
</div>
</>
);
}
  
//   { Sdar.map((val,index) => {
//     console.log(index);
//     return(
//       <>
    
//       <Car
//       key={val.id}
//       imgsrc={val.imgsrc}
//       title={val.title}
//       Sname={val.Sname}
//       links={val.links}
//       />
//       <SlotMac x="emoji" y="fun" z="wow"  />
//       <SlotMac x="emoji" y="emoji" z="emoji"  />
//       <SlotMac x="emoji" y="fun" z="fun"  />
//       </>
      
//     );
//   }
//   )
// }
// </>
// }

export default App;
