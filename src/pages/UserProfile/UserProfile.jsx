
import { useAuth } from "../../contexts/AuthContext";
import { useUser } from "../../contexts/UserContext";
import "./UserProfile.css";

export const UserProfile =()=>{
   const {userLoading} = useUser();
   const {localStorageItem} = useAuth();
   

    return(
        <div>
            <div className="user-header">
               <h1 className="h1_user">User Profile</h1>
            </div>
            <div>
                <div className="profile_header_div">
                    {/* <img className="profile_header_img" src={profileAvatar} alt="pic"/>
                    <div>
                     <h3>{firstName} {lastName}</h3> 
                     <p>{username}</p>  
                    </div> */}
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}