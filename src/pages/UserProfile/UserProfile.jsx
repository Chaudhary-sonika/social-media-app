
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useUser } from "../../contexts/UserContext";
import "./UserProfile.css";
import { usePost } from "../../contexts/PostContext";
import axios from "axios";
import { useEffect } from "react";
import InterestsIcon from '@mui/icons-material/Interests';
import LinkIcon from '@mui/icons-material/Link';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { PostDisplay } from "../../components/PostDisplay";
export const UserProfile =()=>{
    document.title = "NetLink | Profile";
   const {userState, followUser, unFollowUser} = useUser();
   const {postState, getUserPost} = usePost();
   const {authState} = useAuth();
   const {username, profileAvatar, firstName, lastName} = authState?.user;
  const [userData, setUserData] = useState({});
  const [dataLoading, setDataLoading] = useState(false);
  
  const getUserDetails =async()=>{
    try{
        setDataLoading(true);
        const { data, status } = await axios({
          method: "GET",
          url: `/api/users/${username}`,
        });
        if (status === 200 || status === 201) {
            setUserData(data?.user);
            setDataLoading(false);
            getUserPost(username);
          }
    }catch(e){
        console.log(e);
    }
  };
  console.log(postState, "sonika");
  useEffect(()=>{
    getUserDetails();
  }, [username, postState.post, userState])
    return(
        <div>
            <div className="user-header">
               <h1 className="h1_user">User Profile</h1>
            </div>
            <div>
                <div >
                  <div className="profile_header_div">
                    <img className="profile_header_img" src={profileAvatar} alt="pic"/>
                    <div className="name_header_div">
                     <h3>{firstName} {lastName}</h3> 
                     <h5>@{username}</h5>
                     <p><InterestsIcon style={{fontSize:"medium"}}/>  {authState?.user?.bio}</p> 
                     <p><LinkIcon style={{fontSize:"medium"}}/>  {authState?.user?.website} </p>
                     <p><CalendarTodayIcon style={{fontSize:"medium"}}/>  {authState?.user?.createdAt}</p> 
                    </div>
                  </div>
                  <div className="post_follower_divP">
                   <p>{postState?.userPost?.length +
                      `${postState?.userPost?.length === 1 ? " Post" : " Posts"}`}
                   </p> 
                   <p>
                     {userData?.followers?.length +
                      `${
                        userData?.followers?.length === 1
                          ? " Follower"
                          : " Followers"
                      }`}
                    </p>
                    <p>
                    {userData?.following?.length +
                      `${
                        userData?.following?.length === 1
                          ? " Following"
                          : " Followings"
                      }`}
                     </p> 
                  </div>
                </div>
                <div>
                  {postState?.userPost?.map((post)=>(
                    <div>
                       <PostDisplay userPost={post}/>
                    </div>
                  ))}
                 
                 
                </div>
            </div>
        </div>
    )
}