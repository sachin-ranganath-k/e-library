import types from "../actionTypes/dummyActionTypes";

const initialState = {
};

const dummyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DUMMY:
      return {};
    default:
      return state;
  }
};

export default dummyReducer;