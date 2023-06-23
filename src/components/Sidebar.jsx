import { NavLink, Outlet} from "react-router-dom";
import "./cssComponent/Sidebar.css";
import { useAuth } from "../contexts/AuthContext";
import ExploreIcon from '@mui/icons-material/Explore';
import HomeIcon from '@mui/icons-material/Home';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
export const Sidebar =()=>{
    const {userLogout, authState} = useAuth();
    const {username, profileAvatar, firstName, lastName} = authState?.user;
    return(
        <div className="sidebar-mainDiv">
            <div className="list_Div_sidebar">
            <ul className="ul-list">
                
                <li className="li-sidebar">
                    <NavLink className="link-sidebar" to="/"><HomeIcon/> Home</NavLink>
                </li>
                <li className="li-sidebar">
                <NavLink className="link-sidebar" to="/explore"><ExploreIcon/> Explore</NavLink>
                </li>    
                <li className="li-sidebar">    
                  <NavLink className="link-sidebar" to="/bookmark"><BookmarkBorderIcon/> Bookmark</NavLink>  
                </li>
                <li className="li-sidebar">
                  <NavLink className="link-sidebar"  to="/userprofile"> <AccountCircleIcon/> Profile</NavLink>
                </li>
                <li className="li-sidebar">    
                    <button onClick={userLogout}><LogoutIcon/>Logout</button>
                </li>
            </ul>
            <div className="profile_last_div">
                {profileAvatar?(<img src={profileAvatar} alt="profileAvatar" />):(<div>
                {firstName?.slice(0, 1)}
              </div>)}
                <div>
                        <p className="p_name_div">{firstName} {lastName}</p>
                        <p className="p_username_div">@{username}</p>
                </div>
            </div>
            
            </div>
            <div className="outlet-component">
               <Outlet/>
            </div>
            <div className="right_bar_div">
                <input placeholder="Search users.."/>
                <h2>Suggested Users</h2>
            </div>
        </div>
    )
}