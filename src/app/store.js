import { configureStore } from "@reduxjs/toolkit";
import trainsListReducer from "../trains/trainsSlice";

export const store = configureStore({
  reducer: {
    trainslist: trainsListReducer,
  },
});
