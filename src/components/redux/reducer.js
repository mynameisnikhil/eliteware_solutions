import {
  FETCH_USERS_REQ,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  BOOKMARK,
  REMOVE,
  REMOVE_USER,
} from "./actions";

const initialState = {
  loading: false,
  error: false,
  payload: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQ:
      return {
        ...initialState,
        loading: true,
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...initialState,
        payload: action.payload,
      };
    case FETCH_USERS_FAIL:
      return {
        ...initialState,
        error: true,
        payload: action.payload,
      };
    case REMOVE_USER:
      return {
        ...initialState,
        payload: state.payload.filter((item) => action.payload.id !== item.id),
      };

    default:
      return state;
  }
};

export const bookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKMARK:
      console.log(action.payload, "action payload");
      return {
        ...initialState,
        payload: [...state.payload, action.payload],
      };

    case REMOVE:
      return {
        ...initialState,
        payload: state.payload.filter((item) => action.payload.id !== item.id),
      };

    default:
      return state;
  }
};
