import { createContext, useEffect, useReducer } from "react";
import { postReducer } from "../reducer/postReducer";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "./AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router";

const PostContext = createContext();
export const PostProvider =({children})=>{
    const initialState = {
        postLoading: false,
        post:[],
        userPost:[],
        sortBy: "",
    }
    const [postState, postDispatch] = useReducer(postReducer, initialState);
    const {authState} = useAuth();
    const navigate = useNavigate();
    const getPostData = async()=>{
        try{
            postDispatch({ type: "post_loading", payload: true });
            const {data, status} = await axios({
                method: "GET",
                url: "/api/posts",
            });
            if(status === 200 || status === 201){
                postDispatch({type:"get_post", payload: data?.posts});
                postDispatch({type: "post_loading", payload: false});
            }
        }catch(e){
            toast.error(e.response.data.errors[0]);
        }
    }

    const getUserPost =async(username)=>{
        try{
         const {data, status} = await axios({
            method: "GET",
            url: `/api/posts/user/${username}`,
         });
         if(status === 200 || status === 201){
            postDispatch({type: "user_post", payload: data?.posts});
         }
        }catch(e){
          console.log(e);
        }
    }
    const likePost = async(postId)=>{
        try{
            const {data, status} = await axios({
                method: "POST",
                url: `/api/posts/like/${postId}`,
                headers:{authorization: authState?.token},
            });
            if(status===200 || status ===201){
                postDispatch({type:"get_post", payload: data?.posts});
                return data.posts.find(post => post._id === postId);
                console.log("hello");
            }
        }catch(e){
            console.log(e);
        }
    }

    const dislikePost =async(postId)=>{
        try{
            const {data, status} = await axios({
                method: "POST",
                url: `/api/posts/dislike/${postId}`,
                headers: {authorization: authState?.token},
            });
            if(status ===200 || status === 201){
                postDispatch({type:"get_post", payload: data?.posts});
            }
        }catch(e){
            console.error(e);
        }
    }

    const deletePost =async(postId)=>{
        try{
            const {data, status} = await axios({
               method: "DELETE",
               url:`/api/posts/${postId}`,
               headers: { authorization: authState?.token },
            });
            if(status === 200 || status === 201){
                postDispatch({type:"get_post", payload: data?.posts});
            }
        }catch(e){
            console.log(e);
        }
    }

    const createNewPost = async(postData)=>{
        try{
            const {data, status} = await axios.post(`/api/posts`, {postData}, {headers:{authorization: authState?.token }});
            if(status===201){
                postDispatch({type:"get_post", payload: data?.posts});
            }
        }catch(e){
            console.log(e);
        }
    }
    const editPost = async(postId, postData)=>{
        try{
            const {data, status} = await axios.post(`/api/posts/edit/${postId}`, {postData}, {headers:{authorization: authState?.token}});
            if(status ===201){
                postDispatch({type:"get_post", payload: data?.posts});
            }
        }catch(e){
            console.log(e);
        }
    }



    useEffect(()=>{
        if(authState?.token){
            getPostData();
        }
    }, [authState?.token]);
    return(
        <PostContext.Provider value={{postState, postDispatch, getPostData, getUserPost, likePost,dislikePost, deletePost, createNewPost, editPost}}>
            {children}
        </PostContext.Provider>
    )
}
export const usePost = () => useContext(PostContext);