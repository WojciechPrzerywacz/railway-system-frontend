import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  passageName: "",
  startingPlace: "",
  endingPlace: "",
};

export const passagesSlice = createSlice({
  name: "passage",
  initialState,
  reducers: {
    setPassageName: (state, action) => {
      state.passageName = action.payload;
    },
    setStartingPlace: (state, action) => {
      state.startingPlace = action.payload;
    },
    setEndingPlace: (state, action) => {
      state.endingPlace = action.payload;
    },
  },
});

export const { setStartingPlace, setEndingPlace, setPassageName } =
  passagesSlice.actions;

export default passagesSlice.reducer;
