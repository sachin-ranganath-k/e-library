import * as actionTypes from "./adminActionConstants";

export const getAdminData = (payload) => {
  return {
    type: actionTypes.GET_ADMIN_DATA,
    payload
  };
};
