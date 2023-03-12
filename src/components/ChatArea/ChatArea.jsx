import React from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import styles from "./ChatArea.module.scss";
import MessageIcon from "../icons/MessageIcon";
import MyMessage from "../Message/MyMessage";
import OthersMessage from "../Message/OthersMessage";
import convertEpoch from "../../utils/convertEpoch";
import SystemMessage from "../AdditionalItems/SystemMessage";
import NewMessage from "../AdditionalItems/NewMessage";
import InputArea from "../InputArea/InputArea";
const ChatArea = () => {
  const chatHeader = useSelector((state) => state.chat.chatHeader);
  const messages = useSelector((state) => state.chat.messages);
  let newMsg = 0;

  return (
    <main className={styles["chat-area"]}>
      <div className={styles["chat-area__top"]}>
        <MessageIcon />
        <Header>{chatHeader}</Header>
      </div>
      <div className={styles["chat-area__main"]}>
        {messages.map((message, i) => {
          const currMsgDate = convertEpoch(message.created_at, "date");
          const prevMsgDate = message
            ? convertEpoch(messages[i - 1]?.created_at, "date")
            : currMsgDate;
          if (message.is_new) newMsg++;
          if (message.user.you) {
            return (
              <div key={message.id}>
                {currMsgDate !== prevMsgDate ? (
                  <SystemMessage sysMessage={currMsgDate} />
                ) : (
                  ""
                )}
                <MyMessage
                  message={message.message}
                  time={convertEpoch(message.created_at, "time")}
                />
              </div>
            );
          } else if (!message.user.you)
            return (
              <div key={message.id}>
                {currMsgDate !== prevMsgDate ? (
                  <SystemMessage sysMessage={currMsgDate} />
                ) : (
                  ""
                )}

                <OthersMessage
                  src={message.user.avatar}
                  size="sm"
                  name={message.user.name}
                  surname={message.user.surname}
                  message={message.message}
                  time={convertEpoch(message.created_at, "time")}
                />
                {message.is_new && newMsg <= 1 ? (
                  <NewMessage newMsg="Новые сообщения" />
                ) : (
                  ""
                )}
              </div>
            );
        })}
      </div>
      <InputArea />
    </main>
  );
};

export default ChatArea;
