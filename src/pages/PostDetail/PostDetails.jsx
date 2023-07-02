import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import { useUser } from "../../contexts/UserContext";
import { usePost } from "../../contexts/PostContext";
import { useEffect } from "react";
import axios from "axios";
import { PostDisplay } from "../../components/PostDisplay";
import { ClipLoader } from "react-spinners";
import "../PostDetail/PostDetails.css";
import { useComment } from "../../contexts/CommentContext";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { EditCommentmodal } from "../../components/EditCommentModal";

export const PostDetails =()=>{
    document.title = "NetLink | Post Details";
    const { postId } = useParams(); 
    const {authState} = useAuth();
    const {userState} = useUser();
    const {getUserPost, postState} = usePost();
    const {addComments, editComments, deleteComments} = useComment();
    const [postDetails, setPostDetails] = useState({});
    const [postLoading, setPostLoading] = useState(false);
    const [commentInput, setCommentInput] = useState("");
    const [showEditModal, setShowEditModal] = useState(false);
    const navigate = useNavigate();
    const getPostDetails = async () => {
        try {
          setPostLoading(true);
          const { data, status } = await axios({
            method: "GET",
            url: `/api/posts/${postId}`,
          });
          if (status === 200 || status === 201) {
            setPostDetails(data?.post);
            setPostLoading(false);
          }
        } catch (e) {
          console.log(e);
        }
      };
     
      useEffect(()=>{
        getPostDetails();
      }, [postState?.post]);
      console.log(postDetails, "post");
    return(
        <div>
            <h1>Post Details</h1>
            <div>
              
                {postLoading ? (<ClipLoader/>):(<div>
                    <PostDisplay userPost={postDetails}/>
                    <div>
                      <div>
                      <input className="input_place" value={commentInput} onChange={(e) => setCommentInput(e.target.value)} placeholder="Add Comment..."/>
                      <button className="input_button" onClick={() => {
                    addComments(postId, commentInput);
                    setCommentInput("");
                  }}>Comment</button>
                      </div>
                        {postDetails?.comments?.map((comm)=>(
                            <div className="comment_div">
                              {showEditModal && (<EditCommentmodal setShowEditModal={setShowEditModal} showEditModal={showEditModal} postId={postDetails?._id} comment={comm}/>)}
                            <div className="avatar_Div_postedBy" key={comm?._id} onClick={()=>navigate(`/userprofile/${comm?.username}`)}>
                            <img src={comm?.profileAvatar} alt="avatar" className="profile_Avatar"/>
                            <div className="NU_Div">
                            <h5 className="name_PostedBy">{comm?.fullName}
                            </h5>
                            <p className="created_PostedBy">{comm?.createdAt}</p>
                            </div>
                            </div>
                            <div className="comm_delete_div">
                            <p style={{textAlign:"left"}}>{comm?.comment}</p>
                            <div className="edit_trash_div">
                            <span className="trash_span" onClick={()=>setShowEditModal(true)}><EditIcon/></span>
                            <span onClick={()=> deleteComments(postDetails?._id, comm?._id)} className="trash_span"><DeleteIcon/></span>
                            </div>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>)}
                
            </div>
        </div>
    )
}