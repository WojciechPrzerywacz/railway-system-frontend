import { configureStore } from "@reduxjs/toolkit";
import trainsListReducer from "../trains/trainsSlice";
import createTrainReducer from "../trains/createTrainForm/createTrainSlice";

export const store = configureStore({
  reducer: {
    trainslist: trainsListReducer,
    createTrain: createTrainReducer,
  },
});
