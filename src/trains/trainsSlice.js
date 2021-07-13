import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trains: [],
  locomotives: [],
  wagons: [],
};

export const trainsSlice = createSlice({
  name: "trainslist",
  initialState,
  reducers: {
    setTrainsListJson: (state, action) => {
      state.trains = action.payload;
    },
    setLocomotives: (state, action) => {
      state.locomotives = action.payload;
    },
    setWagons: (state, action) => {
      state.wagons = action.payload;
    },
  },
});

const { setTrainsListJson, setLocomotives, setWagons } = trainsSlice.actions;

export const fetchTrainsList = (request) => async (dispatch) => {
  const response = await fetch(request, {});
  const json = await response.json();
  dispatch(setTrainsListJson(json));
};

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
