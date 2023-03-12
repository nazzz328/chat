import React from "react";
import Avatar from "../Avatar/Avatar";
import styles from "./ChatItem.module.scss";
import { useDispatch } from "react-redux";
import { getMsgs } from "../../api/chat";
import { loadCurrChat } from "../../slices/ChatSlice";
function ChatItem(props) {
  const dispatch = useDispatch();
  const changeChatHandler = async () => {
    const messages = await getMsgs(props.id);
    const chatHeader = props.title;
    dispatch(
      loadCurrChat({
        messages,
        chatHeader,
      })
    );
  };
  return (
    <button className={styles["chat-item__button"]} onClick={changeChatHandler}>
      <div className={styles["chat-item"]}>
        <Avatar src={props.avatar} size="md" />
        <div className={styles["chat-item__text"]}>
          <div className={styles["chat-item__text--top"]}>
            <h3 className={styles["chat-item__header"]}>{props.title}</h3>
            <p className={styles["chat-item__time"]}>{props.createdAt}</p>
          </div>
          <p className={styles["chat-item__message"]}>{props.message}</p>
        </div>
      </div>
    </button>
  );
}

export default ChatItem;
