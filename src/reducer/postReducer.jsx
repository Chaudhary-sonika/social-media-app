export const postReducer = (state, action)=>{
  switch (action.type) {
    case "post_loading":
        return {...state, postLoading: action.payload};
    case "get_post":
        return {...state, post: action.payload};
    case "user_post":
        return {...state, userPost: action.payload};
    default:
        return state;            
  }
};