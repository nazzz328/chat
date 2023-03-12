import styles from "./NewMessage.module.scss";
const NewMessage = (props) => {
  return (
    <div className={styles["new-message__wrapper"]}>
      <span className={styles["new-message"]}>{props.newMsg}</span>
    </div>
  );
};

export default NewMessage;
