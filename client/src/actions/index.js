import axios from "axios";
import {
  FETCH_USERS_STARTED,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from "../types";

// Action creator function that uses thunk
export const fetchUsers = () => dispatch => {
  dispatch({ type: FETCH_USERS_STARTED });
  return axios
    .get("http://localhost:9000/users")
    .then(res => {
      dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_USERS_FAILURE, payload: err.data });
    });
};