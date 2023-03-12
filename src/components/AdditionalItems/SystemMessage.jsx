import styles from "./SystemMessage.module.scss";
const SystemMessage = (props) => {
  return (
    <div className={styles["system-message__wrapper"]}>
      <span className={styles["system-message"]}>{props.sysMessage}</span>
    </div>
  );
};

export default SystemMessage;
