import {Link, NavLink} from "react-router-dom";
export const Sidebar =()=>{
    return(
        <aside>
            <ul>
                <li>
                    <Link>NetLink</Link>
                </li>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                <NavLink to="/explore">Explore</NavLink>
                </li>    
                <li>    
                    <NavLink to="/userprofile">Profile</NavLink>
                </li>
            </ul>
            
        </aside>
    )
}