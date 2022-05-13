import { useState } from "react"
import axios from 'axios'
import { Button } from "@mui/material"
import { Paper } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"

function RegisterAdmin(){
    
    const [userId,setUserId]=useState('')
    const [useriderr,setUserErr]=useState('')
    const [password,setPassword]=useState('')
    const [passworderr,setPasswordErr]=useState('')
    const [utype,setUtype]=useState('')
    const [roleerr,setRoleErr]=useState('')
    const [status,setStatus]=useState('')
    var navigate=useNavigate()
    return(<>
    <div style={{height:600,position:"revert"}}>
        <div style={{marginLeft:500}}><br/><br/><br/>
        <h2 style={{marginLeft:60}}> Register </h2>
        
        <input style={{position:"relative",width:230,height:20,borderRadius:'10px',fontSize:'17px',boxShadow:'1px 2px 2px'}} type='text' placeholder="Email"  onChange={(e)=>{
            let email=e.target.value
            var exp=String(email).toLowerCase().match(/\S+@\S+\.\S+/)
            if(exp)
            {
                setUserId(e.target.value)
                setUserErr('')
            }
            else
            {
                setUserErr("email id is not correct")
            }
        }}/> <br/>
        <label style={{color:"red"}} data-testId="usererrlbl">{useriderr}</label><br/>

     
        
        <input style={{width:230,height:20,top:-15,borderRadius:'10px',fontSize:'17px',boxShadow:'1px 2px 2px'}} type='password' placeholder="Password"  onChange={(e)=>{
            let psw=e.target.value
            if(psw.length>=3){
            setPassword(e.target.value)
            setPasswordErr('')
            }
            else{
                setPasswordErr("password should not be less than 3")
            }
        }}/> <br/>
        <label style={{color:"red"}} data-testId="passworderrlbl">{passworderr}</label><br/>
        
        <input style={{width:230,height:20,top:-15,borderRadius:'10px',fontSize:'17px',boxShadow:'1px 2px 2px'}} type='password' placeholder="Usertype"  onChange={(e)=>{
            let role=e.target.value
            if(role.length>=3){
            setUtype(e.target.value)
            setRoleErr('')
            }
            else{
                setRoleErr("role should be admin")
            }
        }}/> <br/>
        <label style={{color:"red"}} data-testId="roleerrlbl">{roleerr}</label><br/>
        


        <Button style={{left:45,top:10,width:160,height:35}} variant="contained" onClick={()=>{
            var admin={
                "username":userId,
                "role":utype,
                "password":password
            }
          
               axios.post('http://localhost:8081/addadmin',admin)
           .then((res)=>{
               console.log(res)
                navigate("/admin")         
           })   
            //setStatus("Registration Successfull")     
}}>REGISTER </Button>
    <div style={{position:"relative",left:55,top:-35}}>
    {status}
    </div>
    </div> 
    </div>
    </>)
}
export default RegisterAdmin;