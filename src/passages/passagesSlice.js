import { createSlice } from "@reduxjs/toolkit";
import { getTemplate, myfetch } from "../app/myFetch";

const initialState = {
  passages: [],
  selectedPassageId: -1,
  currentPassage: {},
  responseStatus: "",
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
    setResponseStatus: (state, action) => {
      state.responseStatus = action.payload;
    },
  },
});

export const { setSelectedPassageId } = passagesSlice.actions;
const { setPassagesList, setCurrentPassage, setResponseStatus } =
  passagesSlice.actions;

export const fetchPassagesList = (request) => async (dispatch) => {
  const response = await myfetch(request, getTemplate);
  if (response.ok) {
    const json = await response.json();
    dispatch(setPassagesList(json));
    dispatch(setResponseStatus(response.ok));
  } else {
    dispatch(setResponseStatus("Passages list fetching error"));
  }
};

export const fetchCurrentPassage = (request) => async (dispatch) => {
  const response = await myfetch(request, getTemplate);
  if (response.ok) {
    const json = await response.json();
    dispatch(setCurrentPassage(json));
    dispatch(setResponseStatus(response.ok));
  } else {
    const errorMessage = await response.text();
    alert(errorMessage);
  }
};

export default passagesSlice.reducer;
