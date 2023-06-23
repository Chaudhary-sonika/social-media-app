
export const UserReducer = (state, action)=>{
    switch (action.type){
        case "get_user":
            return (state = action.payload);
        default :
        return state;    
    }
}