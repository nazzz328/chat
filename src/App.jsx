import React from "react";
import PageIndex from "./pages/PageIndex";
import { getMsgs, getChatList } from "./api/chat";
import { useEffect } from "react";
import { retrieve } from "./slices/ChatListSlice";
import { useDispatch } from "react-redux";
import { loadCurrChat } from "./slices/ChatSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const chatListData = await getChatList();
        const chatList = chatListData.map((chat) => ({
          id: chat.id,
          title: chat.title,
          avatar: chat.avatar,
          createdAt: chat.last_message.created_at,
          message: chat.last_message.message,
        }));
        const messages = await getMsgs(chatListData[0].id);
        const chatHeader = chatListData[0].title;
        dispatch(retrieve(chatList));
        dispatch(
          loadCurrChat({
            messages,
            chatHeader,
          })
        );
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchChatData();
  }, [dispatch]);
  return (
    <>
      <PageIndex />
    </>
  );
}

export default App;
