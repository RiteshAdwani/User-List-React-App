import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_REQUEST,
  SHOW_USER_DETAILS_CARD,
  HIDE_USER_DETAILS_CARD,
} from "../constants";
import axios from "axios";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const showUserDetailsCard = (user) => {
  return {
    type: SHOW_USER_DETAILS_CARD,
    userID: user._id,
  };
};

export const hideUserDetailsCard = () => {
  return {
    type: HIDE_USER_DETAILS_CARD,
  };
};

export const fetchUsers = (currentPage) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get(
        `https://servers-omega.vercel.app/users/p?limit=8&page=${
          currentPage - 1
        }`
      )
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};
