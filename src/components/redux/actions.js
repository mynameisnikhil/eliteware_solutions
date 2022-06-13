import axios from "axios";
export const BOOKMARK = "BOOKMARK";
export const REMOVE = "REMOVE";
export const REMOVE_USER = "REMOVE_USER";
export const ADDBACK = "ADDBACK";
export const FETCH_USERS_REQ = "FETCH_USERS_REQ";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAIL = "FETCH_USERS_FAIL";

export const fetchUsersReq = () => {
  return {
    type: FETCH_USERS_REQ,
  };
};

export const fetchUsersSuccess = (data) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: data,
  };
};

export const fetchUsersFail = (error) => {
  return {
    type: FETCH_USERS_FAIL,
    payload: error,
  };
};

export const fetchUsers = (page) => {
  console.log("action is fired");
  return async (dispatch) => {
    dispatch(fetchUsersReq());
    try {
      const response = await axios.get(
        `https://api.github.com/users?since=${page * 30}`
      );
      dispatch(fetchUsersSuccess(response.data));
    } catch (error) {
      dispatch(fetchUsersFail(error));
    }
  };
};

export const bookmarkUser = (user) => {
  return {
    type: BOOKMARK,
    payload: user,
  };
};

export const removeUser = (user) => {
  return {
    type: REMOVE_USER,
    payload: user,
  };
};

export const unBookmarkUser = (user) => {
  return {
    type: REMOVE,
    payload: user,
  };
};

export const addBackUser = (user) => {
  return {
    type: ADDBACK,
    payload: user,
  };
};
