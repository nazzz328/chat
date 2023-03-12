import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    currChat: {},
    messages: [],
  },
  reducers: {
    loadCurrChat: (state, action) => {
      state.chatHeader = action.payload.chatHeader;
      state.messages = action.payload.messages;
    },
  },
});

export const { loadCurrChat } = chatSlice.actions;
export const chatReducer = chatSlice.reducer;
