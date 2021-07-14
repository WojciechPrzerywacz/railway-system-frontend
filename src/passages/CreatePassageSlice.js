import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  startingPlace: "",
  endingPlace: "",
  locomotiveId: 0,
};

export const trainsSlice = createSlice({
  name: "createpassage",
  initialState,
  reducers: {
    setStartingPlace: (state, action) => {
      state.startingPlace = action.payload;
    },
    setEndingPlace: (state, action) => {
      state.endingPlace = action.payload;
    },
    locomotiveId: (state, action) => {
      state.locomotiveId = action.payload;
    },
  },
});

export const { setStartingPlace, setEndingPlace, locomotiveId } =
  trainsSlice.actions;

export default trainsSlice.reducer;
