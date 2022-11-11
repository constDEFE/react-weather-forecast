import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../redux/slices/weatherSlice";
import searchReducer from "../redux/slices/searchSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    weather: weatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
