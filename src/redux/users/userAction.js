import * as actionTypes from "./userActionConstants"

export const getUsers=(payload)=>{
    return{
        type:actionTypes.GET_USERS,
        payload
    }
}

export const getUserDetails=(payload)=>{
    return{
        type:actionTypes.GET_USER_DETAILS,
        payload
    }
}

export const showUserError=(payload)=>{
    return{
        type:actionTypes.SHOW_USER_ERROR,
        payload
    }
}