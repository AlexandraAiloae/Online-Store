import { USER_ACTION_TYPES } from "./user.types";
//keep track of these variables, these string values

const INITIAL_STATE = {
  currentUser: null,
};

//return an object that spreads to the previous state, and then update the relevant values
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
