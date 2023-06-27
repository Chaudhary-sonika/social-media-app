import { usePost } from "../contexts/PostContext"
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import UpdateIcon from '@mui/icons-material/Update';
import "../components/cssComponent/FilterBy.css";
export const FilterBy = ()=>{
    document.title = "NetLink | Home";
    const {postDispatch, postState} = usePost();
    return(
        <div>
            <div className="filterBy_main_Div">
                <button onClick={()=>postDispatch({type: "sort", payload: "trending"})}><TrendingUpIcon/> Trending</button>
                <button onClick={()=>postDispatch({type: "sort", payload: "latest"})}><UpdateIcon/> Latest</button>
            </div>
            {postState?.sortBy && (<h3>{postState?.sortBy} Posts</h3>)}
        </div>
    )
}