import { useState } from "react"
import axios from 'axios'
import { Button } from "@mui/material"
import { Paper } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"

function RegisterUser(){
    
    const [userId,setUserId]=useState('')
    const [useriderr,setUserErr]=useState('')
    const [userName,setUserName]=useState('')
    const [usernameerr,setUserNameErr]=useState('')
    const [password,setPassword]=useState('')
    const [passworderr,setPasswordErr]=useState('')
    const [name,setName]=useState('')
    const [nameerr,setnameErr]=useState('')
    const [mobile,setMobileNo]=useState(0)
    const [mobileerr,setMobileErr]=useState('')
    const [utype,setUtype]=useState('')
    const [roleerr,setRoleErr]=useState('')
    const [status,setStatus]=useState('')
    var navigate=useNavigate()
    return(<>
    <div style={{backgroundImage:Image,height:600}}>
        <div style={{marginLeft:500}}><br/><br/><br/>
        <h2 style={{marginLeft:65}}> Register </h2>
        
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

        
        <input style={{width:230,height:20,top:-30,borderRadius:'10px',fontSize:'17px',boxShadow:'1px 2px 2px'}} type='text' placeholder="name"  onChange={(e)=>{
            let name=e.target.value
            if(name.length>4){
            setName(e.target.value)
            setnameErr('')
            }
            else{
                setnameErr("name should not be less than 4")
            }
        }}/> <br/>
    
        <label style={{color:"red"}} data-testId="pswerrlbl">{nameerr}</label><br/>

        
        <input style={{width:230,height:20,top:-30,borderRadius:'10px',fontSize:'17px',boxShadow:'1px 2px 2px'}} type='text' placeholder="Mobile No"  onChange={(e)=>{
            let mobile=e.target.value
            if(mobile.length==10){
            setMobileNo(e.target.value)
            setMobileErr('')
            }
            else{
                setMobileErr("Mobile No should not be less than 10 or greater than 10")
            }
        }}/> <br/>
        <label style={{color:"red"}} data-testId="mobileerrlbl">{mobileerr}</label><br/>
    
       

        
        <input style={{width:230,height:20,top:-30,borderRadius:'10px',fontSize:'17px',boxShadow:'1px 2px 2px'}} type='text' placeholder="Username"  onChange={(e)=>{
            let userName=e.target.value
            if(userName.length>3){
            setUserName(e.target.value)
            setUserNameErr('')
            }
            else{
                setUserNameErr("UserName should not be less than 3")
            }
        }}/> <br/>
        <label style={{color:"red"}} data-testId="usernamelbl">{usernameerr}</label><br/>
        

     
        
        <input style={{width:230,height:20,top:-30,borderRadius:'10px',fontSize:'17px',boxShadow:'1px 2px 2px'}} type='password' placeholder="Password"  onChange={(e)=>{
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
        
        
        <input style={{width:230,height:20,top:-30,borderRadius:'10px',fontSize:'17px',boxShadow:'1px 2px 2px'}} type='password' placeholder="Usertype"  onChange={(e)=>{
            let role=e.target.value
            if(role.length>=3){
            setUtype(e.target.value)
            setRoleErr('')
            }
            else{
                setRoleErr("role should be user")
            }
        }}/> <br/>
        <label style={{color:"red"}} data-testId="roleerrlbl">{roleerr}</label><br/>
    


        <Button style={{left:41,top:10,width:160,height:35}} variant="contained" onClick={()=>{
            var user={
                "userName":userName,
                "email":userId,
                "role":utype,
                "phoneNo":mobile,
                "password":password,
                "name":name
            }
          
               axios.post('http://localhost:8081/addBidder',user)
           .then((res)=>{
               console.log(res)
                navigate("/")         
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
export default RegisterUser;