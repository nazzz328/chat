import { useRef } from "react";
import AttachIcon from "../icons/AttachIcon";
import SendIcon from "../icons/SendIcon";
import styles from "./InputArea.module.scss";

const InputArea = (props) => {
  const inputRef = useRef();
  const inputHeightHandler = (e) => {
    if (e.target.textContent.length > 100 && e.target.textContent.length < 200)
      inputRef.current.style.height = "5.5rem";
    if (e.target.textContent.length < 100)
      inputRef.current.style.height = "4rem";
    if (
      e.target.textContent.length > 200 &&
      e.target.textContent.length < 300
    ) {
      inputRef.current.style.height = "7.5rem";
    }
    if (
      e.target.textContent.length < 300 &&
      e.target.textContent.length > 200
    ) {
      inputRef.current.style.height = "7.5rem";
    }
    if (e.target.textContent.length > 300) {
      inputRef.current.style.overflow = "auto";
    }
    if (
      e.target.textContent.length < 300 &&
      e.target.textContent.length > 200
    ) {
      inputRef.current.style.height = "7.5rem";
      inputRef.current.style.overflow = "visible";
    }
  };
  // };
  return (
    <div className={styles["input-area"]}>
      <div
        className={styles["input-area__input"]}
        contentEditable={true}
        placeholder="Type message"
        ref={inputRef}
        onInput={inputHeightHandler}
      ></div>
      <div className={styles["input-area__actions"]}>
        <AttachIcon />
        <SendIcon />
      </div>
    </div>
  );
};

export default InputArea;
