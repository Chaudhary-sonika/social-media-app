import { Navigate, useLocation } from "react-router"
import { useAuth } from "../contexts/AuthContext"

export const RequireAuth = ({children})=>{
    const {authState}= useAuth()
    const location = useLocation();
    // const { token } = JSON.parse(localStorage.getItem("data"));
    return authState?.token ? (children) : (<Navigate to="/login" state={{ from: location }}/>)
}