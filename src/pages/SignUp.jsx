import { useNavigate } from "react-router"
import "../pages/SignUp.css";
import { useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {  IconButton } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
export const SignUp =()=>{
    const navigate = useNavigate();
    const {userSignUp} = useAuth();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [userSignupDetails, setUserSignupDetails] = useState({
        firstname:"",
        lastname:"",
        username:"",
        email:"",
        password:"",
    });
    const signupSubmitHandler = (e)=>{
     e.preventDefault();
     userSignUp(userSignupDetails);
    }
    return(
        <>
        <div className="signup_main_div">
            <div className="signup_detail_div">
                <h1 style={{color:"#374151", fontWeight:"500"}}>Enter all the <span className="header_span">Details</span> here</h1>
            <form className="signup_form" onSubmit={signupSubmitHandler}>
                <div className="form_div_name">
                <div className="name_div">
                    <label for="firstname"><span style={{color:"red"}}>*</span>First Name:</label>
                    <input required name="firstname" id="firstname"  placeholder="John" value={userSignupDetails.firstname} onChange={(e)=>setUserSignupDetails({...userSignupDetails, firstname: e.target.value})}/>
                </div>
                <div className="name_div">
                    <label for="lastname"><span style={{color:"red"}}>*</span>Last Name:</label>
                    <input required name="lastname" id="lastname" placeholder="Wick" value={userSignupDetails.lastname} onChange={(e)=>setUserSignupDetails({...userSignupDetails, lastname: e.target.value})}/>
                </div>
                </div>
                <div className="user_pass_div">
                    <label for="username"><span style={{color:"red"}}>*</span>Username:</label>
                    <input required name="username" id="username" placeholder="John_123" value={userSignupDetails.username} onChange={(e)=>setUserSignupDetails({...userSignupDetails, username: e.target.value})}/>
                </div>
                <div className="user_pass_div">
                    <label for="email"><span style={{color:"red"}}>*</span>Email:</label>
                    <input required name="email" id="email" placeholder="JW007@gmail.com" value={userSignupDetails.email} onChange={(e)=>setUserSignupDetails({...userSignupDetails, email: e.target.value})}/>
                </div>
                <div className="user_pass_div">
                    <label for="password"><span style={{color:"red"}}>*</span>Password:</label>
                    <input className="pass_input" required type={isPasswordVisible? "text":"password"} name="password" id="password" placeholder={isPasswordVisible?"password" : "******"} value={userSignupDetails.password} onChange={(e)=>setUserSignupDetails({...userSignupDetails, password:e.target.value})}/>
                    {isPasswordVisible?<IconButton className="eye_btn" onClick={()=>setIsPasswordVisible((prev) => !prev)}><VisibilityIcon/></IconButton>:<IconButton className="eye_btn" onClick={()=>setIsPasswordVisible((prev) => !prev)}><VisibilityOffIcon /></IconButton>}
                </div>
                <input className="login_input" type="submit" value="Sign Up"/>
            </form>
            <p>Already have a account? <span className="span_signup" onClick={()=>navigate("/login")}>Login</span> here</p>
            </div>
        </div>
        </>
    )
}