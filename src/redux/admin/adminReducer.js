import { GET_ADMIN_DATA } from "./adminActionConstants";

const initialState = {
  loadAdminData: [],
};

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADMIN_DATA:
      return {
        ...state,
        loadAdminData: action.payload,
      };
    default:
      return state;
  }
};

export default AdminReducer;
