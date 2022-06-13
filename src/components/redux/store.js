import { configureStore } from "@reduxjs/toolkit";
import { usersReducer, bookmarkReducer } from "./reducer";

const store = configureStore({
  reducer: {
    userReducer: usersReducer,
    bookmark: bookmarkReducer,
  },
});

export default store;
