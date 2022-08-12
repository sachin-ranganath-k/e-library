import { GET_USERS, GET_USER_DETAILS } from "./userActionConstants";

const initialState={
    loadAllUsers:[],
    userDetails:{
        // userName:"",
        userEmail:""
    }
}
const userReducer=(state=initialState, action)=>{

    switch(action.type){
        case GET_USERS:
            return{
                ...state,
                loadAllUsers:action.payload
            }

        case GET_USER_DETAILS:
            return{
                ...state,
                userDetails:{
                    userEmail:action.payload
                }
            }
        

            default: return state;
    }
}

export default userReducer;