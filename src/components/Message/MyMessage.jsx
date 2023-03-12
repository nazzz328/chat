import styles from "./MyMessage.module.scss";
import DeliveredIcon from "../icons/DeliveredIcon";

const MyMessage = (props) => {
  return (
    <div className={`${styles["my-message__wrapper"]}`}>
      <div className={`${styles["my-message"]}`}>
        <p className={styles["my-message__text"]}>{props.message}</p>
        <div className={styles["my-message__time-block"]}>
          <p className={styles["my-message__time"]}>{props.time}</p>
          <DeliveredIcon />
        </div>
      </div>
    </div>
  );
};

export default MyMessage;
