import { useState } from "react";
import "../components/cssComponent/EditProfileModal.css";
import { useUser } from "../contexts/UserContext";
import { AvatarModal } from "./Avatar";
export const EditProfileModal =({setEditProfileModal, userData})=>{
    const {editUserdata} = useUser();
    const [showAvatarModal, setShowAvatarModal] = useState(false);
    const [userInput, setUserInput] = useState({
        firstName: userData?.firstName,
        lastName: userData?.lastName,
        username: userData?.username,
        profileAvatar: userData?.profileAvatar,
        bio: userData?.bio,
        website: userData?.website,
      });
      const changeHandler = (e)=>{
       const {name, value} = e.target;
       setUserInput((userInput)=>({...userInput, [name]:value}));
      };
      const submitHandler =(e)=>{
        e.preventDefault();
        editUserdata(userInput);
        setEditProfileModal(false);
      };
    return(
        <>
        {showAvatarModal && (<AvatarModal setShowAvatarModal={setShowAvatarModal} userInput={userInput} setUserInput={setUserInput}/>)}
        <div className="modal_wrapper" onClick={()=>setEditProfileModal(false)} style={{zIndex: "96"}}></div>
        <div className="modal_container" style={{zIndex: "97"}}>
          <form className="edit_profile_form" onSubmit={submitHandler} key={userData?.username}>
            <img className="edit_profile_img" src={userInput?.profileAvatar} alt="avatar"/>
            <div className="button_div">
                <button className="Button_addAvatar" onClick={(e)=>{e.preventDefault(); setShowAvatarModal(true);}}>Add Avatar</button>
                <label>Upload:<input className="input_file_btn" type="file" accept="/image*" onChange={(e)=>setUserInput({...userInput, profileAvatar:URL.createObjectURL(e.target.files[0]),})}/></label>
            </div>
            <div className="edit_profile_info">
                
                <label htmlFor="firstName_id">First Name:<input type="text" value={userInput?.firstName} id="firstName_id" name="firstName" onChange={changeHandler}/></label>
                <label htmlFor="lastName_id">Last Name:<input type="text" value={userInput?.lastName} id="lastName_id" name="lastName" onChange={changeHandler}/></label>
                <label htmlFor="bio_id">Bio:<input type="text" value={userInput?.bio} id="bio_id" name="bio" onChange={changeHandler}/></label>
                <label htmlFor="website_id">Website:<input type="text" value={userInput?.website} id="website_id" name="website" onChange={changeHandler}/></label>
                <div>
                    <input className="save_Btn_input" value="Save" type="submit"/>
                    <button className="save_Btn_input" onClick={()=>setEditProfileModal(false)}>Cancel</button>
                </div>
            </div>
          </form>
        </div>
        </>
    )
}