import axios from "axios";
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

// Action creator function that uses thunk
export const fetchUsers = () => dispatch => {
  dispatch({ 
    type: FETCH_USERS_START 
  });
  
  axios
    .get("http://localhost:9000/users")
    .then(res => {
      dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_USERS_FAILURE, payload: err.data });
    });
};

export const deleteUser = userId => dispatch => {
  dispatch({
		type: DELETE_USER_START
  });
  
  axios
		.delete(`http://localhost:9000/users/${userId}`)
		.then(res => {
			dispatch({
				type: DELETE_USER_SUCCESS,
				payload: userId
			});
		})
		.catch(err => {
			dispatch({
				type: DELETE_USER_FAILURE,
				payload: err
			});
		});
}

export const updateUser = (user, userId) => dispatch => {
  dispatch({
		type: UPDATE_USER_START
  });
  
  axios
		.put(`http://localhost:9000/users/${userId}`, user)
		.then(res => {
      const updated = {...user, id: userId}
			dispatch({
				type: UPDATE_USER_SUCCESS,
				payload: updated
			});
		})
		.catch(err => {
			dispatch({
				type: UPDATE_USER_FAILURE,
				payload: err
			});
		});
}