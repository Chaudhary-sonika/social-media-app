import { createContext } from "react";
import { useAuth } from "./AuthContext";
import { useReducer } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { toast } from "react-toastify";

const bookmarkReducer =(state, action)=>{
 switch(action.type){
    case "bookmark_loading":
        return {...state, isBookmarkLoading:action.payload};
    case "set_bookmark":
        return {...state, bookmark:action.payload};
    default:
        return state;        
 }
}

const BookmarkContext = createContext();
export const BookmarkProvider =({children})=>{
    const {authState} = useAuth();
    const initialState = {
        isBookmarkLoading: false,
        bookmark:[],
    };
    const [bookmarkState, bookmarkDispatch] = useReducer(bookmarkReducer, initialState);
    const getBookmarkData =async()=>{
        try{
            bookmarkDispatch({ type: "bookmark_loading", payload: true });
            const {data, status} = await axios({
                method: "GET",
                url: "/api/users/bookmark",
                headers:{authorization: authState?.token},
            });
            if(status===200 || status===201){
                bookmarkDispatch({ type: "set_bookmark", payload: data?.bookmarks });
                bookmarkDispatch({ type: "bookmark_loading", payload: false });
            }
        }catch(e){
            console.log(e);
        }
    };
    const addBookmarkData = async(postId)=>{
        try{
            bookmarkDispatch({ type: "bookmark_loading", payload: true });
            const {data, status} = await axios({
                method: "POST",
                url: `/api/users/bookmark/${postId}`,
                headers: {authorization: authState?.token},
            });
            
            if(status === 200||status === 201){
                bookmarkDispatch({ type: "set_bookmark", payload: data?.bookmarks });
                bookmarkDispatch({ type: "bookmark_loading", payload: false });
                toast.success("Post added in Your Bookmarks!");
            }
        }catch(e){
            console.log(e);
        }
    };
    const removeBookmarkData = async(postId)=>{
        try{
            bookmarkDispatch({ type: "bookmark_loading", payload: true });
            const {data, status} = await axios({
                method: "POST",
                url: `/api/users/remove-bookmark/${postId}`,
                headers: {authorization: authState?.token},
            });
            if(status===200 || status===201){
                bookmarkDispatch({ type: "set_bookmark", payload: data?.bookmarks });
                bookmarkDispatch({ type: "bookmark_loading", payload: false });
                toast.warning("Post removed from your Bookmarks!"); 
            }
        }catch(e){
            console.log(e);
        }
    }
    useEffect(()=>{
        if(authState?.token){
            getBookmarkData();
        }
    }, [authState?.token]);
    return(
        <BookmarkContext.Provider value={{bookmarkState, addBookmarkData, removeBookmarkData, getBookmarkData}}>
            {children}
        </BookmarkContext.Provider>
    )
}
export const useBookmark =()=> useContext(BookmarkContext);