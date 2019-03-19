import {
    FETCH_USERS_START,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,

    DELETE_USER_START,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,

    CREATE_USER_START,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE,

    UPDATE_USER_START,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
} from "../types";

const initialState = {
  users: [],
  fetching: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_START:
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
        error: "Fetch Failure",
        fetching: false
      };

    case DELETE_USER_START:
      return {
        ...state,
        fetching: true,
        error: null
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        fetching: false,
        users: state.users.filter(user => (
          user.id !== action.payload
        )),
        error: null
      };
    case DELETE_USER_FAILURE:
      return {
        ...state,
        error: "Delete Failure",
        fetching: false
      };

    case UPDATE_USER_START:
      return {
        ...state,
        fetching: true,
        error: null
      }
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        fetching: false,
        users: state.users.map(user =>
					user.id === action.payload.id
						? action.payload
						: user
				),
        error: null
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        error: "Update Failure",
        fetching: false
      };    

    default:
      return state;
  }
};