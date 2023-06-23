import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react"
import { AuthReducer } from "../reducer/AuthReducer";

import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";

const AuthContext = createContext();
export const AuthProvider = ({children})=>{
   const navigate = useNavigate();
   
   const localStorageItem = JSON.parse(localStorage.getItem("data"));
   const initialState = {user: {}, token: localStorageItem?.token ||""};

   const [authState, authDispatch] = useReducer(AuthReducer, initialState);
const userLogin = async(loginDetail)=>{
    try{
        const {data, status} = await axios({
            method: "POST",
            data: loginDetail,
            url: "/api/auth/login",
        });
   if(status === 200){
    authDispatch({type: "set_user", payload: data?.foundUser});
    authDispatch({type: "set_token", payload: data?.encodedToken});
    localStorage.setItem("data", JSON.stringify({user: data?.foundUser, token: data?.encodedToken}));
    // navigate(location?.state?.from?.pathname || "/");
    navigate("/");
    toast.success("Successfully Logged In!");
   }

    }catch(e){
        toast.error(e.response.data.errors[0]);
    }
    }
    const userSignUp = async(signupDetails) =>{
        try{
            const {data, status} = await axios({
                method: "POST",
                data: signupDetails,
                url:"/api/auth/signup",
            });
            if(status === 201){
                authDispatch({type: "set_user", payload: data?.createdUser});
                authDispatch({type: "set_token", payload: data?.encodedToken});
                localStorage.setItem("data", JSON.stringify({user: data?.createdUser, token: data?.encodedToken}));
                // navigate(location?.state?.from?.pathname || "/");
                navigate("/");
                toast.success("Successfully Logged In!");
            }
        }catch(e){
            toast.error(e.response.data.errors[0]);
        }
    }

    const userLogout =()=>{
        authDispatch({type: "set_user", payload:{} });
        authDispatch({type: "set_token", payload: ""});
        localStorage.removeItem("data");
        toast.success("Logout Successfully..")
    }

    useEffect(()=>{
        if (localStorageItem) {
            authDispatch({ type: "set_user", payload: localStorageItem?.user });
            authDispatch({ type: "set_token", payload: localStorageItem?.token });
          }
    }, []);
    return(
       <AuthContext.Provider value={{authDispatch, authState, userLogin, userLogout, userSignUp, localStorageItem}}>
        {children}
       </AuthContext.Provider>
    )
}
export const useAuth =()=>useContext(AuthContext);