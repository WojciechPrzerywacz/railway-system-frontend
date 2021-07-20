import { createSlice } from "@reduxjs/toolkit";
import { myfetch, getTemplate } from "../app/myFetch";

const initialState = {
  trainTypes: [],
  wagonTypes: [],
};

export const trainsSlice = createSlice({
  name: "trainslist",
  initialState,
  reducers: {
    setTrainTypes: (state, action) => {
      state.trainTypes = action.payload;
    },
    setWagonTypes: (state, action) => {
      state.wagonTypes = action.payload;
    },
  },
});

const { setTrainTypes, setWagonTypes } = trainsSlice.actions;

export const fetchTrainTypes = (request) => async (dispatch) => {
  const response = await myfetch(request, getTemplate);
  if (response.ok) {
    console.log(response);
    const json = await response.json();
    dispatch(setTrainTypes(json));
  } else {
    alert("GET train types error");
  }
};

export const fetchWagonTypes = (request) => async (dispatch) => {
  const response = await myfetch(request, getTemplate);
  if (response.ok) {
    console.log(response);
    const json = await response.json();
    dispatch(setWagonTypes(json));
  } else {
    alert("GET wagon types error");
  }
};

export default trainsSlice.reducer;
