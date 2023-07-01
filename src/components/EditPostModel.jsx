import { useState } from "react"
import { usePost } from "../contexts/PostContext";
import CancelIcon from '@mui/icons-material/Cancel';
import "../components/cssComponent/EditPostModal.css";
import { useEffect } from "react";
export const EditPostModel = ({userPost, setShowEditPostModal, showEditPostModal})=>{
    const [postValue, setPostValue] = useState({_id: userPost?._id,
     content: userPost?.content,
     imageUrl: userPost?.postImage,});
    const {editPost} = usePost();
    const editUserPost = () => {
        editPost(postValue?._id, postValue);
        setShowEditPostModal(false);
      };
    useEffect(()=>{
     document.body.style.overflowY = "hidden";
     return()=>{
        document.body.style.overflowY = "scroll";
     };
    }, []);
    return(
        <>
        <div className="modal_wrapper"></div>
          <div className="modal_background">
            <div className="modal_header">
                <h2>Edit your post</h2>
                <button className="btn_header" onClick={()=>setShowEditPostModal(false)}>X</button>
            </div>
            <div className="modal_body">
                {postValue?.content && (
                    <textarea className="edit_textarea" value={postValue?.content} onChange={(e)=> setPostValue({...postValue, content: e.target.value})}></textarea>
                )}
                {postValue?.imageUrl && (
                    <div className="image_div">
                       <span onClick={()=>setPostValue({...postValue, imageUrl:""})}><CancelIcon/></span>
                       <img src={postValue?.imageUrl} alt="postImage" className="image_imgTag"/>
                    </div>    
                )}
            </div>
            <div className="footer_div">
            <button className="btn_save_cancel" onClick={editUserPost}>Save</button>
            <button className="btn_save_cancel" onClick={()=>setShowEditPostModal(false)}>Cancel</button>
            </div>
            
          </div>

        </>
    )
}