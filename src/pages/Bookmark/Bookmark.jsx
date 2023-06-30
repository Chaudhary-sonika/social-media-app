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
            <h1 className="bookmark-header">
             Bookmarked post here
            </h1>
            {bookmarkState?.bookmark?.length===0 ? (<h2>No Bookmark Data</h2>):(
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