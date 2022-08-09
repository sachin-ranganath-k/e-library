import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import userReducer from "../../redux/users/userReducer";
import AdminReducer from "../../redux/admin/adminReducer";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () =>
  createStore(
    combineReducers({
      userReducer: userReducer,
      adminReducer:AdminReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

export default configureStore;