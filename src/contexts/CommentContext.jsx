import { useContext } from "react";
import { createContext } from "react";
import { useAuth } from "./AuthContext";
import { usePost } from "./PostContext";
import axios from "axios";


const CommentContext = createContext();
export const CommentProvider = ({children})=>{
    const {authState} = useAuth();
    const {postDispatch} = usePost();
    const addComments = async(postId, commentData)=>{
        try{
            const {data, status} = await axios.post(
                `/api/comments/add/${postId}`,
                { commentData },
                { headers: { authorization: authState?.token } }
            );
            if(status === 200 || status === 201){
                postDispatch({ type: "get_post", payload: data?.posts });
            }
        }catch(e){
            console.log(e);
        }
    }
    const editComments = async(postId, commentId, commentData)=>{
        try{
           const {data, status} = await axios.post(
            `/api/comments/edit/${postId}/${commentId}`,
           { commentData },
           { headers: { authorization: authState?.token } }
           );
           if(status ===200 || status === 201){
            postDispatch({ type: "get_post", payload: data?.posts });
           }
        }catch(e){
            console.log(e);
        }
    }
    const deleteComments = async(postId, commentId)=>{
        try{
          const {data, status} = await axios({
            method: "POST",
            url: `/api/comments/delete/${postId}/${commentId}`,
            headers: { authorization: authState?.token },
          });
          if(status === 200 || status ===201){
            postDispatch({ type: "get_post", payload: data?.posts });
          }
        }catch(e){
            console.log(e);
        }
    }
    return(
        <CommentContext.Provider value={{addComments, editComments, deleteComments}}>
            {children}
        </CommentContext.Provider>
    )
}
export const useComment =()=>useContext(CommentContext);