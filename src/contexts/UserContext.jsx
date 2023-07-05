import { useContext, useEffect, useReducer, useState } from "react";
import { createContext } from "react";
import { UserReducer } from "../reducer/UserReducer";
import { useAuth } from "./AuthContext";
import axios from "axios";
import { toast } from "react-toastify";


const UserContext = createContext();
export const UserProvider =({children})=>{

    const {authState, authDispatch} = useAuth();
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
    const followUser = async(userId)=>{
        
        try{
            const { data, status } = await axios.post(
                `/api/users/follow/${userId}`,
                {},
                { headers: { authorization: authState?.token } }
              );
            
             if (status === 200 || status === 201) {
                userDispatch({ type: "update_user", payload: data?.followUser });
                userDispatch({ type: "update_user", payload: data?.user });
                toast.success("Followed by you!");
              }
            
        }catch(e){
            toast.error(e.response.data.errors[0]);
        }
    }

    const unfollowUser = async (userId) => {
        try {
          const { data, status } = await axios.post(
            `/api/users/unfollow/${userId}`,
            {},
            { headers: { authorization: authState?.token } }
          );
          if (status === 200 || status === 201) {
            userDispatch({ type: "update_user", payload: data?.followUser });
            userDispatch({ type: "update_user", payload: data?.user });
            toast.success("Unfollowed!");
          }
        } catch (e) {
            toast.error(e.response.data.errors[0]);
        }
      };
    
      const editUserdata = async (userData) => {
        try {
          const { data, status } = await axios.post(
            "/api/users/edit",
            { userData },
            { headers: { authorization: authState?.token } }
          );
          if (status === 201) {
            userDispatch({ type: "update_user", payload: data?.user });
            authDispatch({ type: "set_user", payload: data?.user });
            toast.success("Profile updated successfully!");
          }
        } catch (e) {
            toast.error(e.response.data.errors[0]);
        }
      }; 
    useEffect(()=>{
        authState?.token && getUserData();
    }, [authState?.token]);
    
    return(
        <UserContext.Provider value={{getUserData,userLoading, userState, followUser, unfollowUser, editUserdata}}>
            {children}
        </UserContext.Provider>
    )
}
export const useUser = ()=>useContext(UserContext);