import { NavLink, Outlet, useNavigate} from "react-router-dom";
import "./cssComponent/Sidebar.css";
import { useAuth } from "../contexts/AuthContext";
import ExploreIcon from '@mui/icons-material/Explore';
import HomeIcon from '@mui/icons-material/Home';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { UserSuggest } from "./UserSuggest";
import Popup from "reactjs-popup";
import { useUser } from "../contexts/UserContext";
import { useState } from "react";
export const Sidebar =()=>{
    const {userLogout, authState} = useAuth();
    const {username, profileAvatar, firstName, lastName} = authState?.user;
    const {userState, followUser, unfollowUser} = useUser();
    const [searchInput, setSearchInput] = useState("");
    const filteredSearch = searchInput?.trim().length > 0 && userState?.filter((user)=>user?.firstName?.toLowerCase().includes(searchInput.trim().toLowerCase()) || user?.lastName?.toLowerCase().includes(searchInput.trim().toLowerCase()) || user?.username?.toLowerCase().includes(searchInput.trim().toLowerCase()));
    const navigate = useNavigate();
    const getStyles = ({ isActive }) => ({
        backgroundColor: isActive ? "#d1fae5" : "",
        borderRadius: isActive ? "0.5rem" : "",
    
      });
    
      const isFollow = (userId)=> userState
      ?.find((user) => user._id === userId)
      ?.followers.some((user) => user._id === authState?.user?._id);  
    return(
        <><div className="sidebar-mainDiv">
            <div className="list_Div_sidebar">
                <ul className="ul-list">

                    <li className="li-sidebar">
                        <NavLink style={getStyles} className="link-sidebar" to="/"><HomeIcon /><span className="webresponsive_mobile">Home</span></NavLink>
                    </li>
                    <li className="li-sidebar">
                        <NavLink style={getStyles} className="link-sidebar" to="/explore"><ExploreIcon /> <span className="webresponsive_mobile">Explore</span></NavLink>
                    </li>
                    <li className="li-sidebar">
                        <NavLink style={getStyles} className="link-sidebar" to="/bookmark"><BookmarkIcon /> <span className="webresponsive_mobile">Bookmark</span></NavLink>
                    </li>
                    <li className="li-sidebar">
                        <NavLink style={getStyles} className="link-sidebar" to={`/userprofile/${username}`}> <AccountCircleIcon /><span className="webresponsive_mobile">Profile</span> </NavLink>
                    </li>
                    <li className="li-sidebar">
                        <button onClick={userLogout}><LogoutIcon /><span className="webresponsive_mobile">Logout</span></button>
                    </li>
                </ul>
                <div className="profile_last_div" onClick={() => navigate(`/userprofile/${username}`)}>
                    {profileAvatar ? (<img src={profileAvatar} alt="profileAvatar" />) : (<div className="not_avatar">
                        <h4>{firstName?.slice(0, 1)}</h4>
                    </div>)}
                    <div>
                        <p className="p_name_div">{firstName} {lastName}</p>
                        <p className="p_username_div">@{username}</p>
                    </div>
                </div>

            </div>
            <div className="outlet-component">
                <Outlet />
            </div>
            <div className="right_bar_div">
                <Popup trigger={<input className="search_users_input" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder="Search users.." />} position="bottom">
                    <div className="popup_div">
                        {searchInput?.length > 0 && (
                            <div>{filteredSearch?.length === 0 && <h4>No Users Found</h4>}</div>
                        )}
                        {searchInput?.length === 0 && <h4>No Users Found</h4>}
                        <div>
                            {filteredSearch?.length > 0 && (
                                <div>
                                    {filteredSearch?.map((user) => (
                                        <div className="popup_main_div">
                                            <div className="popup_detail_div" onClick={() => navigate(`/userprofile/${user?.username}`)}>
                                                <img src={user?.profileAvatar} alt="avatar" className="popup_img" />
                                                <div>
                                                    <h5 className="popup_name_hTag">{user?.firstName} {user?.lastName}</h5>
                                                    <p className="popup_username_para">@{user?.username}</p>
                                                </div>
                                            </div>
                                            
                                                {isFollow(user?._id)?(<button className="follow_button" onClick={() => unfollowUser(user?._id)}>Following</button>):(<button className="follow_button" onClick={() => followUser(user?._id)}>Follow</button>)}
                                            

                                         </div>
                                ))}
                        </div>
                        )}
                    </div>
                </div>
        </Popup><h2>Suggested Users</h2><UserSuggest />
            </div>
        </div>
        </>
    )
}