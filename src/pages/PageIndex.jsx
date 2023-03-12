import React from "react";
import ChatArea from "../components/ChatArea/ChatArea";
import ChatListArea from "../components/ChatListArea/ChatListArea";
import styles from "./PageIndex.module.scss";

function PageIndex() {
  return (
    <>
      <div className={styles.index}>
        <ChatListArea />
        <ChatArea />
      </div>
      <div className={styles["below-700px"]}>
        Просим прощения, но для мобильных телефонов у нас есть приложение
      </div>
    </>
  );
}

export default PageIndex;
