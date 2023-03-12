import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { chatListReducer } from "./slices/ChatListSlice";
import { chatReducer } from "./slices/ChatSlice";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    chatList: chatListReducer,
    chat: chatReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode> was causing my App component to render twice which caused two identical API calls. Tried to figure this out for 3-5 hours...
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
