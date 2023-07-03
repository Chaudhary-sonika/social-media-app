import { FilterBy } from "../../components/FilterBy";
import { useAuth } from "../../contexts/AuthContext";
import { usePost } from "../../contexts/PostContext";
import { ClipLoader } from "react-spinners";
import "./Explore.css";
import { PostDisplay } from "../../components/PostDisplay";
export const Explore =()=>{
    document.title = "NetLink | Explore";
    const {authState} = useAuth();
    const {postState} = usePost();
    let userExplore = [];
    const exploreData = postState?.post?.filter((data)=>data?.username !== authState?.user?.username);
    console.log(exploreData, "explore");
    userExplore = [...exploreData];

    if(postState?.sortBy === "Trending"){
        userExplore = userExplore?.sort((a, b) => b.likes.likeCount - a.likes.likeCount);
    }else if(postState?.sortBy === "Latest"){
        userExplore = userExplore?.sort((a, b)=>new Date(b.createdAt)- new Date(a.createdAt));
    }
    return(
        <div>
            <h2 className="explore-header">Explore </h2>
            <FilterBy/>
            {postState.postLoading && (<ClipLoader/>)}
            <div>
            {exploreData?.length ===0 && (<h1>No Posts.... </h1>)}
                {userExplore?.map((posts)=>(
                    <div>
                        <PostDisplay userPost={posts}/>
                    </div>
                ))}
            </div>
        </div>
    )
}