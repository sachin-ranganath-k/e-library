import * as actionTypes from "./adminActionConstants";

export const getAdminData = (payload) => {
  return {
    type: actionTypes.GET_ADMIN_DATA,
    payload
  };
};

export const getAdminDetails=(payload)=>{
  return{
    type:actionTypes.GET_ADMIN_DETAILS,
    payload
  }
}

export const getBooks=(payload)=>{
  return{
    type:actionTypes.GET_BOOKS,
    payload
  }
}
