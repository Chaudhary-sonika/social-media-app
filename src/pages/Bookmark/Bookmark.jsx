import { useBookmark } from "../../contexts/BookmarkContext";
import { usePost } from "../../contexts/PostContext";
import { ClipLoader } from "react-spinners";
import "./Bookmark.css";
import { PostDisplay } from "../../components/PostDisplay";

export const Bookmark =()=>{
    document.title = "NetLink | Bookmark";
    const {postState} = usePost();
    const {bookmarkState} = useBookmark();
    console.log(bookmarkState, "bokSo");
    return(
        <div>
            <h2 className="bookmark-header">
             Bookmarked Post
            </h2>
            {bookmarkState?.bookmark?.length===0 ? (<div>
                <h3>No Bookmark Data...</h3>
                <div>
                    <img className="no_data_foound" src="https://res.cloudinary.com/dej1tezib/image/upload/v1688400867/3009287_jtglez.jpg" alt="no data found"/>
                </div>
            </div>):(
                <div>
                    {bookmarkState?.isBookmarkLoading ? (<ClipLoader/>):(
                        <div>
                            {bookmarkState?.bookmark?.map(({_id})=>(
                                <div>
                                    <PostDisplay userPost={postState?.post?.find(
                                     (post) => post._id === _id
                                     )}/>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}