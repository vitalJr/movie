import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/AuthReducer";
import MovieReducer from "./reducers/MovieReducer";

const store = configureStore({
  reducer: {
    authentication: AuthReducer,
    movie: MovieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
