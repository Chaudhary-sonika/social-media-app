import DarkModeIcon from '@mui/icons-material/DarkMode';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router';
export const Navbar =()=>{
    const {authState} = useAuth();
    const navigate = useNavigate();
    return(
        <div className='navBar_div'> 
            <h1><Diversity3Icon/> <span style={{color:"#047857"}}>Net</span>Link</h1>
            <div>
            <h4>Hello! <span className='navbar_username' onClick={()=>navigate(`/userprofile/${authState?.user?.username}`)}>{authState?.user?.firstName} {authState?.user?.lastName}</span></h4>
            
            </div>
        </div>
    )
}