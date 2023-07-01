import { useState } from "react";
import { useComment } from "../contexts/CommentContext";
import "../components/cssComponent/EditCommentModal.css";


export const EditCommentmodal = ({setShowEditModal,  postId, comment})=>{
    const {editComments}= useComment();
    const [commentInput, setCommentInput] = useState({_id: comment?._id,
    comment: comment?.comment});
    console.log(commentInput, "comm");
    return(
        <>
        <div className="editcomment_wrapper"></div>
        <div className="modal_container">
            <div className="modal_header">
                <h2>Edit Comment:</h2>
                <button className="btn_header" onClick={()=>setShowEditModal(false)}>X</button>
            </div>
            <div className="modal_body">
                {commentInput?.comment && (
                    <textarea className="edit_textarea" value={commentInput?.comment} onChange={(e)=> setCommentInput({...commentInput, comment: e.target.value})}></textarea>
                )}
                
            </div>
            <div className="footer_div">
            <button className="btn_save_cancel" onClick={()=>{editComments(postId, commentInput?._id, commentInput?.comment); setShowEditModal(false); }}>Save</button>
            <button className="btn_save_cancel" onClick={()=>setShowEditModal(false)}>Cancel</button>
            </div>
        </div>
        </>
    )
}