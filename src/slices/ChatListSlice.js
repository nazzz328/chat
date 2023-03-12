import { createSlice } from "@reduxjs/toolkit";

const chatListSlice = createSlice({
  name: "chatList",
  initialState: {
    chats: [],
  },
  reducers: {
    retrieve(state, action) {
      const newChats = action.payload.filter((chat) => {
        return !state.chats.find((c) => c.id === chat.id);
      });
      state.chats.push(...newChats);
    },
  },
});

export const { retrieve } = chatListSlice.actions;
export const chatListReducer = chatListSlice.reducer;
