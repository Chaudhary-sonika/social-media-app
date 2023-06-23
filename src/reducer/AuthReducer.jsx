
export const AuthReducer =(state, action)=>{
   switch (action.type) {
    case "set_user":
        console.log(action.payload);
        return {...state, user: action.payload}
    case "set_token":
        return {...state, token: action.payload} 
    default:
        return state;       
   }
}