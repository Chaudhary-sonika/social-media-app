import { useContext, useEffect, useReducer, useState } from "react";
import { createContext } from "react";
import { UserReducer } from "../reducer/UserReducer";
import { useAuth } from "./AuthContext";
import axios from "axios";
import { toast } from "react-toastify";


const UserContext = createContext();
export const UserProvider =({children})=>{
    const {authState} = useAuth();
    const [userLoading, setUserLoading] = useState(false);

    const [userState, userDispatch] = useReducer(UserReducer, []);

    const getUserData =async()=>{
        try{
            setUserLoading(true);
            const {data, status} = await axios({
                method:"GET",
                url: "api/users",
            });
            if(status === 200 || status === 201){
             userDispatch({type: "get_user", payload: data?.users});
             setUserLoading(false);
            }
        }catch(e){
        toast.error(e.response.data.errors[0]);
        }
    }
    useEffect(()=>{
        getUserData();
    }, []);
    
    return(
        <UserContext.Provider value={{getUserData,userLoading, userState}}>
            {children}
        </UserContext.Provider>
    )
}
export const useUser = ()=>useContext(UserContext);