import { useState } from "react";
import { useAuth } from "../contexts/AuthContext"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {  IconButton } from "@mui/material";
import "../pages/Login.css";
import { useNavigate } from "react-router";
export const Login =()=>{
    const {userLogin,  } = useAuth();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [userLoginDetails, setUserLoginDetails] = useState({username: "", password: ""});
    const navigate = useNavigate();
    const guestLoginDetails = {
        username: "adarshbalika",
        password: "adarsh@123",
    }
    const submitHandler =(e)=>{
        e.preventDefault();
        userLogin(userLoginDetails);
    }
    return(
        <>
        <div className="login_mainDiv">
         <div className="detail_box">
            <h1 style={{color:"#374151", fontWeight:"500"}}>Welcome to the <span className="header_span">NetLink</span></h1>
            <p style={{color:"#047857", fontWeight:"500"}}>Please Login for continue.. </p>
         <form onSubmit={submitHandler} className="login_form">
            <label for="username">Username<span style={{color:"red"}}>*</span></label>
            <input required name="username" id="username" placeholder="adarshbalika" value={userLoginDetails.username} onChange={(e)=>setUserLoginDetails({...userLoginDetails, username: e.target.value,})}/>
            <label for="password">Password<span style={{color:"red"}}>*</span></label>
            
            <input required type={isPasswordVisible? "text":"password"} name="password" id="password" placeholder={isPasswordVisible?"password" : "******"} onChange={(e)=>setUserLoginDetails({...userLoginDetails, password:e.target.value,})} value={userLoginDetails.password}/>
            {isPasswordVisible?<IconButton onClick={()=>setIsPasswordVisible((prev) => !prev)}><VisibilityIcon/></IconButton>:<IconButton onClick={()=>setIsPasswordVisible((prev) => !prev)}><VisibilityOffIcon /></IconButton>}
            
            <input className="login_input" type="submit" value="Log In"/>
            <button className="btn_guestLogin" type="button" onClick={(e)=>{
                 e.preventDefault(); 
                //  setUserLoginDetails(guestLoginDetails);
                 userLogin(guestLoginDetails);}}>Guest Login</button>
         </form>
         <p>Don't have a account? <span className="span_signup" onClick={()=>navigate("/signup")}>Sign Up</span> here</p>
         </div>
        </div>
        </>
    )
}