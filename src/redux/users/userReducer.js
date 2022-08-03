import { GET_USERS } from "./userActionConstants";

const initialState={
    loadAllUsers:[]
}
const userReducer=(state=initialState, action)=>{

    switch(action.type){
        case GET_USERS:
            return{
                ...state,
                loadAllUsers:action.payload
            }

            default: return state;
    }
}

export default userReducer;