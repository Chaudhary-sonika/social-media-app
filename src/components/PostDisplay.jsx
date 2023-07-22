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
import { useNavigate } from "react-router";
import { useBookmark } from "../contexts/BookmarkContext";
import Popup from "reactjs-popup";
import { EditPostModel } from "./EditPostModel";
export const PostDisplay =({userPost})=>{
    const { _id, content, postImage, likes, comments, username, createdAt} = userPost;
    const {userState} = useUser();
    const {authState} = useAuth();
    const {likePost,dislikePost, deletePost} = usePost();
    const {bookmarkState, addBookmarkData, removeBookmarkData} = useBookmark();
    const [userDetails, setUserDetails] = useState({});
    const navigate = useNavigate();
    // console.log(userPost, "User");
    
    const [showEditPostModal, setShowEditPostModal] = useState(false);

    useEffect(()=>{
    setUserDetails(userState.find((user) => user.username === username));
    }, [username, userState]);

    const likedByUser =()=>{
       return userPost?.likes?.likedBy.filter((user)=> user?._id === authState?.user?._id).length !== 0;
    }
    const bookmarkedByUser =()=>{
        return  bookmarkState?.bookmark?.filter((post) => post._id === _id)?.length !== 0;
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
            {showEditPostModal && (
           <EditPostModel
             userPost={userPost}
             setShowEditPostModal={setShowEditPostModal}
             showEditPostModal={showEditPostModal}
             />
             )}
            <div className="post_header_div">
                <div className="avatar_Div_postedBy" onClick={()=>navigate(`/userprofile/${userDetails?.username}`)}>
                <img src={userDetails?.profileAvatar} alt="avatar" className="profile_Avatar"/>
                <div className="NU_Div">
                <h5 className="name_PostedBy">{userDetails?.firstName} {userDetails?.lastName}</h5>
                <p className="created_PostedBy">{userDetails?.createdAt}</p>
                </div>
                </div>
                {(authState?.user?.username===userDetails?.username) && (<Popup trigger={<MoreVertIcon/>} position="left center">
                    <div className="popup_main_div">
                    <li className="popup_li"onClick={()=>setShowEditPostModal(true)} >Edit Post</li>
                    <li className="popup_li" onClick={()=>deletePost(_id)}>Delete Post</li>
                    </div>
                </Popup>)}
            </div>
            <div>
                <div onClick={() => navigate(`/post/${_id}`)}>
                <p className="content_para">{content}</p>
                {postImage && (<img src={postImage} alt="postImage" className="Post_Image"/>)}
                <div className="likes_Div">
                  <p>{likes?.likeCount} Likes</p>
                  <p style={{marginLeft:"10%"}}>{comments?.length>0 && comments?.length + `${comments.length === 1 ? " comment" : " comments"}`}</p>
                </div>
                </div>
                <hr/>
                <div className="like_comm_book_div">
                 <div className="tab_like_bm" onClick={likeHandlerToggle}>
                    {likedByUser() ? (<div className="tab_like_align">
                     <FavoriteIcon/><span> Liked</span>
                    </div>):(<div className="tab_like_align"><FavoriteBorderIcon/><span>Like</span></div>)}
                 </div>
                 <div className="tab_like_align">
                  <CommentIcon/><span>comment</span>
                 </div>
                 <div className="tab_like_bm">
                  {bookmarkedByUser() ? (
                    <div onClick={()=>removeBookmarkData(_id)} className="tab_like_align">
                        <BookmarkIcon/><span>Bookmarked</span>
                    </div>
                  ):(<div onClick={()=> addBookmarkData(_id)} className="tab_like_align">
                    <BookmarkBorderIcon/><span>Bookmark</span>
                  </div>)}
                 </div>
                </div>
            </div>
        </div>
    )
}