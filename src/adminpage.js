import { createTheme,ThemeProvider } from '@mui/material/styles';
import { AppBar, Avatar,Button, Card, CardContent, Toolbar, Typography } from "@mui/material"
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { blue, red, yellow } from "@mui/material/colors";
import HomeIcon from '@mui/icons-material/Home';
import LoginAdmin from './loginadmin';


const apptheme=createTheme({
    palette:{
        primary:{
            main:blue[500]
        },
        text:{
            primary:blue[500]
        }
    }
}) 

// const bodytheme=createTheme({
//     palette:{
//         primary:{
//             main:yellow[500]
//         },
//         text:{
//             primary:yellow[500]
//         }
//     }
// })

function AdminPage()
{
    var navigate=useNavigate()
    var user=sessionStorage.getItem("username")

    if(user!=null)
   {
    console.log(user)
    return (<div>
        
        <ThemeProvider theme={apptheme}>
            <AppBar position="fixed">
                <Toolbar>
                
                    
                        <Avatar>
                             {user.slice(0,2).toUpperCase()}
                        </Avatar>
                    
                       <Typography sx={{ml:5, color:"greenyellow"}}>IPL FANTASY LEAGUE</Typography>
                    {/* <Typography sx={{ml:63}}>
                        <input style={{backgroundColor:"grey"}}></input>
                    </Typography> */}
                    <Typography>
                    <Button variant="contained"  style={{marginLeft:800}}
                            onClick={()=>{
                             sessionStorage.clear()
                             navigate("/admin")
                    }}
          
          >Logout</Button>
                    </Typography>
                    {/* <Typography sx={{flexGrow:1,ml:6,position:"relative",color:"#ffcc99"}}>News App</Typography> */}
                </Toolbar>
            </AppBar>
        </ThemeProvider>
        
       
        <div>
        <ThemeProvider theme={apptheme}>
            <AppBar style={{top:560}}>
                <Toolbar style={{ position:"relative"}}> 
                    <Typography sx={{ml:75}}>
                        @Copyright
                    </Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
        </div>
    </div>)
   }
   else{
    return <LoginAdmin/>
   }
}

export default AdminPage;