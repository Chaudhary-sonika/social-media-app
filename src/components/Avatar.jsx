import { useState } from "react";
import { useAuth } from "../contexts/AuthContext"
import {avatar} from "../backend/db/avatar";
import { toast } from "react-toastify";
import "../components/cssComponent/Avatar.css";
export const AvatarModal = ({setUserInput, setShowAvatarModal, userInput})=>{
    const {authState} = useAuth();
    const [selectAvatar, setSelectAvatar] = useState("");
    const saveHandler = ()=>{
        if (selectAvatar.length === 0) {
            toast.warning("Please select an avatar!");
          } else {
            setUserInput({ ...userInput, profileAvatar: selectAvatar });
          }
          setShowAvatarModal(false);
        }
    
    return(
        <>
        <div className="modal_wrapper" style={{zIndex: "98"}}></div>
        <div className="modal_container" style={{zIndex: "99"}}>
         <div>
            <h2>Avatars</h2>
            <div className="avatar_div">
                {avatar?.filter((image) => image !== authState?.user?.profileAvatar).map((image)=>(
                    <div>
                        <img className="avatar_img" src={image} alt="avatar" onClick={()=>{setSelectAvatar(image);}}/>
                    </div>

                ))}
            </div>
            <button onClick={saveHandler}>Save</button>
            <button onClick={()=>setShowAvatarModal(false)}>Cancel</button>
         </div>
        </div>
        </>
    )
}