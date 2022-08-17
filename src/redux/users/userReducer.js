import { GET_USERS, GET_USER_DETAILS, SHOW_USER_ERROR } from "./userActionConstants";

const initialState={
    loadAllUsers:[],
    userDetails:{
        // userName:"",
        userEmail:""
    },
    showError:false
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

            case SHOW_USER_ERROR:
                return{
                    ...state,
                    showError:action.payload
                }
        

            default: return state;
    }
}

export default userReducer;