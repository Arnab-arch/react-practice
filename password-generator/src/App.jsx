
import './App.css';
import PasswordGenerator from './passwordgen.jsx';
// import Counter  from './counter';
// import { useState } from 'react';
function App() {
  
  return (<PasswordGenerator/>)
}










// counter 
// usestate() it allows a creation  of a variable stateful and we set a function to update that updfates 
// its value in virtual dom [name,setName] a usestate function returns two variable a variable and a setter function 



// function App() {
//   const [name,setName] = useState("ashu") ; // ashu is the initial state we can pass a initial state 

  
//   const changename = ()=>{
//     setName("sheru")
//   }
//   return (
//     <>
//     <h1 className='text-8xl text-white' >Name: {name}</h1>
    
//     <button className="text-white text-4xl bg border "onClick={changename}> Toggle Name</button>
    
//     </>
//   )
// }
// function App() {
  
// return (<Counter/>) ;
// }


export default App
