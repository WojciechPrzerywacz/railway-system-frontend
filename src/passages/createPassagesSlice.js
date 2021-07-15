import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  startingPlace: "",
  endingPlace: "",
  locomotiveId: -1,
};

export const passagesSlice = createSlice({
  name: "passage",
  initialState,
  reducers: {
    setStartingPlace: (state, action) => {
      state.startingPlace = action.payload;
    },
    setEndingPlace: (state, action) => {
      state.endingPlace = action.payload;
    },
    setLocomotiveId: (state, action) => {
      state.locomotiveId = action.payload;
    },
  },
});

export const { setStartingPlace, setEndingPlace, setLocomotiveId } =
  passagesSlice.actions;

export default passagesSlice.reducer;
