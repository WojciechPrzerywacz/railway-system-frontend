import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locomotives: [],
  locomotiveIdToPost: 0,
  wagons: [],
  wagonsToPost: [],
};

export const trainsSlice = createSlice({
  name: "createtrain",
  initialState,
  reducers: {
    setLocomotives: (state, action) => {
      state.locomotives = action.payload;
    },
    setLocomotiveIdToPost: (state, action) => {
      state.locomotiveIdToPost = action.payload;
    },
    setWagons: (state, action) => {
      state.wagons = action.payload;
    },
    setWagonsToPost: (state, action) => {
      let arrCpy = [...action.payload];
      state.wagonsToPost = arrCpy;
    },
  },
});

export const { setWagonsToPost, setLocomotiveIdToPost } = trainsSlice.actions;
const { setLocomotives, setWagons } = trainsSlice.actions;

export const fetchLocomotives = (request) => async (dispatch) => {
  const response = await fetch(request, {});
  const json = await response.json();
  dispatch(setLocomotives(json));
};

export const fetchWagons = (request) => async (dispatch) => {
  const response = await fetch(request, {});
  const json = await response.json();
  dispatch(setWagons(json));
};

export default trainsSlice.reducer;
