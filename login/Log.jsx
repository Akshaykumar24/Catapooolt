import axios from "axios"
import { useEffect, useState } from "react"
//import {axios} from "axios"
export function Log(){
    const [getdata,setgetdata]=useState([])
    const style1={
        marginTop:'30px'
    }
    const [valid,setvalid]=useState(false)
    const handleOnLogin=(e)=>{
         e.preventDefault()
        getdata.map((el)=>{
          if(el.user.email===email && el.user.password===password){
            // alert("Logged in")
            setvalid(true)   
        } 
      })  
      {valid?alert("loged in"):alert("Password or email is wrong")}
    }
    
    function getdatafun(){
        axios.get('http://localhost:3001/project')
        .then((res)=>{
            setgetdata(...getdata,res.data)
        })
    }
    useEffect(()=>{
        getdatafun()
    },[])
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    
    return <>
    <form onSubmit={handleOnLogin}>
    <input style={style1} type="text" onChange={(e)=>setemail(e.target.value)} placeholder='email'/><br/>
    <input style={style1} type="password" onChange={(e)=>setpassword(e.target.value)} placeholder='password' /><br/>
    <input style={style1} type="submit" value="Submit" />
    </form>
    </>
}