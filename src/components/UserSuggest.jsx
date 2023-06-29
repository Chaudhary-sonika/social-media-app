import { useAuth } from "../contexts/AuthContext"
import { usePost } from "../contexts/PostContext";
import { useUser } from "../contexts/UserContext";
import { ClipLoader } from "react-spinners";
import "./cssComponent/UserSuggest.css";
export const UserSuggest = ()=>{
    const {authState} = useAuth();
    const {getUserPost} = usePost();
    const {userState, userLoading, followUser, unfollowUser} = useUser();
    const isFollow = (userId)=> userState
    ?.find((user) => user._id === userId)
    ?.followers.some((user) => user._id === authState?.user?._id);
        //  authState?.user?.followers?.find((user)=>
        //     user?._id === userId)
   
    console.log(isFollow(3), "Abhi");
    return(
        <div>
          {userLoading ? (<ClipLoader/>):(
          userState?.slice(0, 5)?.map((user)=>(
            <div key={user._id} className="rightBar_main_Div">
           {user?.username !== authState?.user?.username ?(
            <div key={user?._id} className="right_bar_user_tile">
             <div className="user_profile_div">
                <img src={user?.profileAvatar} alt="avatar" className="right_bar_avatar"/>
                <div>
                    <h5 className="name_hTag">{`${user?.firstName} ${user?.lastName}`}</h5>
                    <p className="username_para">@{user?.username}</p>
                </div>
             </div>
             {isFollow(user?._id)?(
                <button onClick={() => unfollowUser(user?._id)}>Following</button>
             ):(
                <button onClick={() => followUser(user?._id)}>Follow</button>
             )}
            </div>
           ): null}
            </div>
          )))}
        </div>
    )
}