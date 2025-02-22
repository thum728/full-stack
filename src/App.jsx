import { useState } from "react"

export default function App(){
    const[name, setName]=useState("JITS")
    return(
        <div>
Result of the name is: {name}
<button onClick={()=>setName("JITS Institute of Engg College")}>
    Change</button>
        </div>
    )
}