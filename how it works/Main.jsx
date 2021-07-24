import React from "react"
import { LogSign } from "../login/loginsignup"
import { First } from "./Firstcomp"
// import { LogSign } from "./loginsignup"
// import { Log } from "./Log"
//import { LogSign } from "./loginsignup"

export function Main(){
    return <>
     <img src="https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/how-it-works/t-sl.jpg" alt="" srcSet="" />
        {/* <First/> */}
        
        <LogSign/>
    </>
}