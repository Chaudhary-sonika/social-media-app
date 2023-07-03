import { FilterBy } from "../../components/FilterBy";
import { useAuth } from "../../contexts/AuthContext";
import { usePost } from "../../contexts/PostContext";
import { useUser } from "../../contexts/UserContext";
import {PostDisplay} from "../../components/PostDisplay";
import "./Home.css";
import { ClipLoader } from "react-spinners";    
import { useState } from "react";
export const Home =()=>{
    document.title = "NetLink | Home";
    const {authState} = useAuth();
    const {postState, createNewPost} =usePost();
    const {userState} = useUser();
    const [inputPost, setInputPost] = useState("");
    let userFeed = [];

    const userLoggedIn = userState?.find(
        ({ id }) => id === authState?.user?.id
      );
     
    const FollowingUserPost =  postState?.post?.filter(({username})=>{
        const followingUsernameArr = userLoggedIn?.following?.map(({username})=>username);
        return followingUsernameArr?.includes(username);
    });
    const FollowerUserPost = postState?.post?.filter(({username})=>{
        const followerUsernameArr = userLoggedIn?.followers?.map(({username})=>username);
        return followerUsernameArr?.includes(username);
    });
    
    userFeed =[...userFeed, ...FollowingUserPost, ...FollowerUserPost, ...postState?.post?.filter(({username})=> username === userLoggedIn?.username),];

    if(postState?.sortBy === "Trending"){
        userFeed = userFeed?.sort((a, b) => b.likes.likeCount - a.likes.likeCount);
    }else if(postState?.sortBy === "Latest"){
        userFeed = userFeed?.sort((a, b)=>new Date(b.createdAt)- new Date(a.createdAt));
    }
    
    return(
        <div className="home-main-div">
            
            <h2 className="home-header"> Home </h2>
            
            
            <FilterBy/>
            {postState.postLoading && (<ClipLoader/>)}
            <div>
                <div className="post_input_div">
                    <input className="post_inputArea" value={inputPost} onChange={(e)=>setInputPost(e.target.value)}  placeholder="Share your thoughts...."/>
                    <button className="button_post" onClick={()=>{createNewPost(inputPost); setInputPost("");}}>Post</button>
                </div>
                {userFeed?.length ===0 && (<h1>No Posts.... </h1>)}
                {userFeed?.map((posts)=>(
                    <div>
                        <PostDisplay userPost={posts}/>
                    </div>
                ))}
            </div>
        </div>
    )
}