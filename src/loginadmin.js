import { Button, Card, CardContent, Typography } from "@mui/material"
import { useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import axios from "axios";

import { Link } from "react-router-dom";

function LoginAdmin()
{
    const [userId,setUserId]=useState('')
    const [useriderr,setUserErr]=useState('')
    const [password,setPassword]=useState('')
    const [passworderr,setPasswordErr]=useState('')
    const [status,setStatus]=useState('')
    const navigate=useNavigate()
    return (<div>
        <Card sx={{width:1365, height:600}}>
                    <CardContent>
                    {/* <Image src={pic} sx={{width:1365, height:600}}></Image> */}
                    <h1 style={{marginLeft:550}}>Login Page</h1>
                        <Typography sx={{mt:3,ml:69}}>
                        <label style={{color:"white",marginTop:20}} data-testid="usernamelbl" for="username"> Enter UserName</label><br/>
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
                         <label style={{color:"red"}} data-testId="usererrlbl">{useriderr}</label><br/>
                        <label style={{color:"white",marginTop:20}} data-testid="passwordlbl" for="password">Enter Password</label><br/>
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
                        <label style={{color:"red"}} data-testId="passworderrlbl">{passworderr}</label><br/>
                        <input type='button' value='Login' data-testid="loginadminctrl" style={{marginLeft:60,marginTop:20}} onClick={()=>{

                        axios.get(`http://localhost:8081/findadmin/${userId}`)
                        .then((res)=>{
                         var data=res.data
                         if(data.role==="admin")
                         {
                             if(data.username===userId && data.password===password )
                             {
                                  sessionStorage.setItem("username",data.username)
                                  setStatus("valid details") 
                             navigate("/home/admin")
                                   
                             }
                            else
                            {
                                setStatus("invalid details")
                            }
                        }
            })
            }} /><br/>
            Dont have an account?
            <Link to="/admin/register" style={{textDecoration:"none"}} data-testId="registerlbl">Register</Link>
            <label style={{color:"red"}} data-testId="statuslbl">{status}</label>
                        </Typography>
                    </CardContent>
                </Card>
    </div>)
}

export default LoginAdmin;