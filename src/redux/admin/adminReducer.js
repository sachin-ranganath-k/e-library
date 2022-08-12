import {
  GET_ADMIN_DATA,
  GET_ADMIN_DETAILS,
  GET_BOOKS,
} from "./adminActionConstants";

const initialState = {
  loadAdminData: [],
  adminDetails: {
    adminEmail: "",
  },

  loadBooksData: [],
};

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADMIN_DATA:
      return {
        ...state,
        loadAdminData: action.payload,
      };

    case GET_ADMIN_DETAILS:
      return {
        ...state,
        adminDetails: {
          adminEmail: action.payload,
        },
      };

    case GET_BOOKS:
      return {
        ...state,
        loadBooksData: action.payload,
      };
    default:
      return state;
  }
};

export default AdminReducer;
