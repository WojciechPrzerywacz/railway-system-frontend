import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trains: [],
};

export const trainsSlice = createSlice({
  name: "trainslist",
  initialState,
  reducers: {
    setTrainsListJson: (state, action) => {
      state.trains = action.payload;
    },
  },
});

const { setTrainsListJson } = trainsSlice.actions;

export const fetchTrainsList = (request) => async (dispatch) => {
  const response = await fetch(request, {});
  const json = await response.json();
  dispatch(setTrainsListJson(json));
};

export default trainsSlice.reducer;
