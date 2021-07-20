import { configureStore } from "@reduxjs/toolkit";
import trainsListReducer from "../trains/trainsSlice";
import createTrainReducer from "../trains/createTrainForm/createTrainSlice";
import passagesSlice from "../passages/createPassageForm/createPassagesSlice";
import passagesListSlice from "../passages/passagesSlice";

export const store = configureStore({
  reducer: {
    trainslist: trainsListReducer,
    createTrain: createTrainReducer,
    createPassage: passagesSlice,
    passageslist: passagesListSlice,
  },
});
