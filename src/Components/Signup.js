import { useState } from "react"

export default function Signup(){
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    return(
        <div className="signup">
            <h2>Signup</h2>
           <input className="inBox" placeholder="Enter Name" type="text" value={name} />
            <input className="inBox" placeholder="Enter Email" type="text" value={email} />
            <input className="inBox" placeholder="Enter Password" type="text" value={password} />
            <button className="loButton">Login</button>

            
        </div>
    )
}