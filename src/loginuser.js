import { Button, Card, CardContent, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";

function LoginUser()
{
    const [userId,setUserId]=useState('')
    const [useriderr,setUserErr]=useState('')
    const [password,setPassword]=useState('')
    const [passworderr,setPasswordErr]=useState('')
    const [status,setStatus]=useState('')
    const navigate=useNavigate()

    return(<>
        <div style={{backgroundImage:Image,height:600, width:1500}}>
            <div style={{marginLeft:500}}><br/><br/><br/>
                    <h1 style={{marginLeft:550}}>Login Page</h1>
                        <Typography sx={{mt:3,ml:69}}>
                        <label style={{color:"InfoText",marginTop:20}} data-testid="usernamelbl" for="username"> Enter UserName</label><br/>
                        <input type='text' style={{marginTop:10}} id="username" data-testid="username" onChange={(e)=>{

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

                         }} /><br/> 
                         <span style={{color:"darkred"}} data-testId="usererrlbl">{useriderr}</span><br/>
                        <label style={{color:"InfoText",marginTop:20}} data-testid="passwordlbl" for="password">Enter Password</label><br/>
                        <input type='password' style={{marginTop:10}} id="password" data-testid="password" onChange={(e)=>{
                            let psw=e.target.value
                            if(psw.length>=3){
                            setPassword(e.target.value)
                            setPasswordErr('')
                            }
                            else{
                                setPasswordErr("password should not be less than 3")
                            }
                        }}/><br/>
                        <span style={{color:"darkred"}} data-testId="passworderrlbl">{passworderr}</span><br/>
                        <input type='button' value='Login' data-testId="loginuserlbl" style={{marginLeft:60,marginTop:20}} onClick={()=>{

                        axios.get(`http://localhost:8081/findBidder/${userId}`)
                        .then((res)=>{
                         var data=res.data
                         if(data.role==="user")
                        {

                             if(data.email===userId && data.password===password )
                        {
                             sessionStorage.setItem("username",data.email)
                             setStatus("valid details") 
                              navigate("/home/user")        
                        }
                        else
                        {
                                setStatus("invalid details")
                        }
                    }
            })
            }} /><br/>
            Dont have an account?
            <Link to="/register" style={{textDecoration:"none"}} data-testId="registerlbl">Register</Link>
            <label style={{color:"darkred"}} data-testId="statuslbl">{status}</label>
                        </Typography>
    </div>
    </div>
    </>)
}

export default LoginUser;