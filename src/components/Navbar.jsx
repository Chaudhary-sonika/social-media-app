import DarkModeIcon from '@mui/icons-material/DarkMode';
import Diversity3Icon from '@mui/icons-material/Diversity3';
export const Navbar =()=>{
    return(
        <div className='navBar_div'> 
            <h1><Diversity3Icon/> <span style={{color:"#047857"}}>Net</span>Link</h1>
            <div>
            <h4><span className='navBar_rightDiv'><DarkModeIcon/></span>Hello! User</h4>
            
            </div>
        </div>
    )
}