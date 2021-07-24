import axios from "axios"
import { useEffect, useState } from "react"
export function Sign(){
    const [user,setuser]=useState({org:"",email:"",num:"",password:""})
    
    const style2={
        marginTop:"30px"
    }
    const handleOnChange=(e)=>{
        let data={
            ...user,
            [e.target.name]:e.target.value
        }
        setuser(data)
    }
    const handleOnSubmit=(e)=>{
        e.preventDefault()
        console.log(user)
        axios.post("http://localhost:3001/project",{
            user
        }).then((e)=>{
            console.log(e)
        }).catch((e)=>{
            console.log(e)
        })
        
    }
    // useEffect(()=>{
        
    // },[user])
    return <>
    <form onSubmit={handleOnSubmit}>
        <input style={style2} onChange={handleOnChange} type="text" placeholder='Organisation Name'name='org' /><br/>
        <input style={style2} onChange={handleOnChange} type='password' placeholder='passsword'name='password' /><br/>
        <input style={style2} onChange={handleOnChange} type="email" placeholder='email' name='email'/><br/>
        <input style={style2} onChange={handleOnChange} type="Number" placeholder='Phone Number' name='num'/><br/>
        <input style={style2} type="submit" value='submit' />
    </form>
    
    
    </>
}