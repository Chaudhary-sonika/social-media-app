import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { usePost } from "../contexts/PostContext";
import { useUser } from "../contexts/UserContext";
import { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import "../components/cssComponent/PostDisplay.css";

export const PostDisplay =({userPost})=>{
    const { _id, content, postImage, likes, comments, username, createdAt} = userPost;
    const {userState} = useUser();
    const {authState} = useAuth();
    const {likePost,dislikePost, deletePost} = usePost();
    const [userDetails, setUserDetails] = useState({});
    // console.log(userPost, "User");


    useEffect(()=>{
    setUserDetails(userState.find((user) => user.username === username));
    }, [username, userState]);

    const likedByUser =()=>{
       return userPost?.likes?.likedBy.filter((user)=> user?._id === authState?.user?._id).length !== 0;
    }
    const bookmarkedByUser =()=>{
        return 
    }
    const likeHandlerToggle =()=>{
        if(likedByUser()) {
            dislikePost(_id);
        } else {
            likePost(_id);
        }
    }
    // console.log(likedByUser(), "like");
    return(
        <div className="post_Main_Div">
            <div className="post_header_div">
                <div className="avatar_Div_postedBy">
                <img src={userDetails?.profileAvatar} alt="avatar" className="profile_Avatar"/>
                <div className="NU_Div">
                <h5 className="name_PostedBy">{userDetails?.firstName} {userDetails?.lastName}</h5>
                <p className="created_PostedBy">{userDetails?.createdAt}</p>
                </div>
                </div>
                <MoreVertIcon/>
            </div>
            <div>
                <p className="content_para">{content}</p>
                {postImage && (<img src={postImage} alt="postImage" className="Post_Image"/>)}
                <div className="likes_Div">
                  <p>{likes?.likeCount} Likes</p>
                  <p style={{marginLeft:"10%"}}>{comments?.length>0 && comments?.length + `${comments.length === 1 ? " comment" : " comments"}`}</p>
                </div>
                <hr/>
                <div className="like_comm_book_div">
                 <div onClick={likeHandlerToggle}>
                    {likedByUser() ? (<div>
                     <FavoriteIcon/><span> Liked</span>
                    </div>):(<div><FavoriteBorderIcon/><span>Like</span></div>)}
                 </div>
                 <div>
                  <CommentIcon/><span>comment</span>
                 </div>
                 <div>
                  {bookmarkedByUser() ? (
                    <div>
                        <BookmarkIcon/><span>Bookmarked</span>
                    </div>
                  ):(<div>
                    <BookmarkBorderIcon/><span>Bookmark</span>
                  </div>)}
                 </div>
                </div>
            </div>
        </div>
    )
}