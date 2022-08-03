import * as actionTypes from "./userActionConstants"

export const getUsers=(payload)=>{
    return{
        type:actionTypes.GET_USERS,
        payload
    }
}