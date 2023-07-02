import "../components/cssComponent/EditProfileModal.css";
export const EditProfileModal =({setEditProfileModal})=>{
    return(
        <>
        <div className="modal_wrapper" onClick={()=>setEditProfileModal(false)}></div>
        <div className="modal_container">

        </div>
        </>
    )
}