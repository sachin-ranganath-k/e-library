import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import dummyReducer from "../reducers/dummyReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () =>
  createStore(
    combineReducers({
      dummyReducer: dummyReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

export default configureStore;