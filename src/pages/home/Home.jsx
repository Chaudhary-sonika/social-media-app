import { FilterBy } from "../../components/FilterBy";
import { useAuth } from "../../contexts/AuthContext";
import { usePost } from "../../contexts/PostContext";
import { useUser } from "../../contexts/UserContext";
import "./Home.css";
export const Home =()=>{
    document.title = "NetLink | Home";
    const {authState} = useAuth();
    const {postState} =usePost();
    const {userState} = useUser();
    let userFeed = [];

    const userLoggedIn = userState?.find(
        ({ _id }) => _id === authState?.user?._id
      );
     
    const FollowingUserPost =  postState?.post?.filter(({username})=>{
        const followingUsernameArr = userLoggedIn?.following?.map(({username})=>username);
        return followingUsernameArr?.includes(username);
    });
    const FollowerUserPost = postState?.post?.filter(({username})=>{
        const followerUsernameArr = userLoggedIn?.followers?.map(({username})=>username);
        return followerUsernameArr?.includes(username);
    });
    
    userFeed =[...userFeed, ...FollowingUserPost, FollowerUserPost, ...postState?.post?.filter(({username})=> username === userLoggedIn?.username),];

    if(postState?.sortBy === "trending"){
        userFeed = userFeed.sort((a, b) => b.likes.likeCount - a.likes.likeCount);
    }else if(postState?.sortBy === "latest"){
        userFeed = userFeed?.sort((a, b)=>new Date(b.createdAt)- new Date(a.createdAt));
    }
    console.log(userLoggedIn, "loggedIn");
    // console.log(userFeed, "home");
    // console.log(FollowerUserPost, "Follower");
    // console.log(FollowingUserPost, "following");
    // console.log(postState, "postState");
    return(
        <div className="home-main-div">
            <h1 className="home-header"> Home </h1>
            <FilterBy/>
        </div>
    )
}