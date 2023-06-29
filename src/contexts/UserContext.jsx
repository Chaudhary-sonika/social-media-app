import { useContext, useEffect, useReducer, useState } from "react";
import { createContext } from "react";
import { UserReducer } from "../reducer/UserReducer";
import { useAuth } from "./AuthContext";
import axios from "axios";
import { toast } from "react-toastify";


const UserContext = createContext();
export const UserProvider =({children})=>{
    // const token1 =JSON.parse(localStorage.getItem("data"))
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
        // console.log(token1.token, "token");
        try{
            const { data, status } = await axios.post(
                `/api/users/follow/${userId}`,
                {},
                { headers: { authorization: authState?.token } }
              );
            // const response = await fetch(`/api/users/follow/${userId}`,
            // { method: "POST",
            // headers: { authorization: token1.token },
            //  });
             if (status === 200 || status === 201) {
                userDispatch({ type: "update_user", payload: data?.followUser });
                userDispatch({ type: "update_user", payload: data?.user });
              }
            
            // const data = await response.json();
            // console.log(data);
            
            //     userDispatch({ type: "update_user", payload: {loggedUser: data.user, followedUser: data.followUser} });
                // userDispatch({ type: "update_user", payload: data?.user });
            
        }catch(e){
          console.log(e);
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
          }
        } catch (e) {
          console.error(e);
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
          }
        } catch (e) {
          console.error(e);
        }
      }; 
    useEffect(()=>{
        getUserData();
    }, []);
    
    return(
        <UserContext.Provider value={{getUserData,userLoading, userState, followUser, unfollowUser, editUserdata}}>
            {children}
        </UserContext.Provider>
    )
}
export const useUser = ()=>useContext(UserContext);