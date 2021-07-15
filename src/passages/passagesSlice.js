import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  passages: [],
  selectedPassageId: -1,
  currentPassage: {},
};

export const passagesSlice = createSlice({
  name: "passageslist",
  initialState,
  reducers: {
    setPassagesList: (state, action) => {
      state.passages = action.payload;
    },
    setSelectedPassageId: (state, action) => {
      state.selectedPassageId = action.payload;
    },
    setCurrentPassage: (state, action) => {
      state.currentPassage = action.payload;
    },
  },
});

export const { setSelectedPassageId } = passagesSlice.actions;
const { setPassagesList, setCurrentPassage } = passagesSlice.actions;

export const fetchPassagesList = (request) => async (dispatch) => {
  const response = await fetch(request, {});
  const json = await response.json();
  dispatch(setPassagesList(json));
};

export const fetchCurrentPassage = (request) => async (dispatch) => {
  const response = await fetch(request, {});
  const json = await response.json();
  dispatch(setCurrentPassage(json));
};

export default passagesSlice.reducer;
