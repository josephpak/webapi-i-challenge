import {
    FETCH_USERS_STARTED,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from "../types";

const initialState = {
  users: [],
  fetching: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_STARTED:
      return {
        ...state,
        fetching: true,
        error: null
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        users: action.payload  
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        error: "Fetch failure",
        fetching: false
      };
    default:
      return state;
  }
};