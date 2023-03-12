import React from "react";
import styles from "./ChatListArea.module.scss";
import Header from "../Header/Header";
import ChatItemList from "./ChatItemList";
import { useSelector } from "react-redux";

function ChatListArea() {
  const chat = useSelector((state) => state.chat.currentChat);
  return (
    <section className={styles["chat-list"]}>
      <Header>All Chats</Header>
      <ChatItemList />
    </section>
  );
}

export default ChatListArea;
