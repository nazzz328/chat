import React from "react";
import ChatItem from "./ChatItem";
import { useSelector } from "react-redux";
import convertEpoch from "../../utils/convertEpoch";

function ChatItemList() {
  const chatList = useSelector((state) => state.chatList.chats);
  if (chatList.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {chatList.map((chat) => (
        <ChatItem
          key={chat.id}
          id={chat.id}
          avatar={chat.avatar}
          title={chat.title}
          message={chat.message}
          createdAt={convertEpoch(chat.createdAt, "time")}
        />
      ))}
    </>
  );
}

export default ChatItemList;
