import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  SHOW_USER_DETAILS_CARD,
  HIDE_USER_DETAILS_CARD,
} from "../constants";

const initialState = {
  loading: false,
  users: [],
  error: "",
  userID: null,
  singleUser: {},
};

const fetchUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload.users,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    case SHOW_USER_DETAILS_CARD: {
      const singleUser = state.users.find((user) => user._id === action.userID);
      return {
        ...state,
        userID: action.userID,
        singleUser: singleUser || {},
      };
    }

    case HIDE_USER_DETAILS_CARD:
      return {
        ...state,
        userID: action.userID,
      };
    default:
      return state;
  }
};

export default fetchUserReducer;
