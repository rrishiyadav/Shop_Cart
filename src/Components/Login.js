import { useState } from "react"

export default function Login(){
    const[email ,setEmail] = useState('');
    const[password,setPassword]=useState('');
    
    const loginData=()=>{
        alert("hello")
    }

    return(
        <div className="Newlogin">
            <h3>Login Page</h3>
            <input className="inBox" type="email"
            value={email} onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter Email"/>

            <input className="inBox" type="password"
            value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password"/>

            <button onClick={loginData} className="loButton">Login</button>

        </div>
    )
}