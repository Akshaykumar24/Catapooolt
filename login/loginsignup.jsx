import { useState } from 'react'
import { Log } from './Log'
import './logsin.css'
import { Sign } from './Sign'

export function LogSign(){
    const [togle,settogle]=useState(0)
    return<>
        <div id='logsinmain'>
            <div style={{display: "flex", width: "70%", margin: "auto",border: "2px solid green",gap: "30%"}}>
            <div id='logsinlog' onClick={()=>{settogle(togle-1)}}><p>Log in</p></div>
            <div id="logsinsignup" onClick={()=>{settogle(togle+1)}}><p>Register </p></div>
            </div>
            {togle===0? <Log/> :<Sign/>}
            
        </div>
    </>
        
    
}
