import userContext from "../context/UserContext";
import { useState , useContext } from "react";

function Login() {
    const[username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const {setUser} = useContext(userContext)

    const handlesubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})

    }

  return (
    <div>
        <input 
    type="text"
    value={username}
    placeholder="username"
    onChange={(e)=>setUsername(e.target.value)}    
    />
    <input 
    type="text"
    value={password}
    placeholder="password"
    onChange={(e)=>setPassword(e.target.value)}    
    />
    <button onClick={handlesubmit}>Submit</button>
    </div>
    
  )
}

export default Login