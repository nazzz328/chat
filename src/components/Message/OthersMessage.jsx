import styles from "./OthersMessage.module.scss";
import Avatar from "../Avatar/Avatar";

const OthersMessage = (props) => {
  return (
    <div className={`${styles["others-message"]}`}>
      <Avatar src={props.src} size={props.size} />
      <div className={`${styles["others-message__main"]}`}>
        <h4 className={`${styles["others-message__author"]}`}>
          {`${props.name} ${props.surname}`}
        </h4>
        <div className={`${styles["others-message__inner"]}`}>
          <p className={styles["others-message__text"]}>{props.message}</p>
          <p className={styles["others-message__time"]}>{props.time}</p>
        </div>
      </div>
    </div>
  );
};

export default OthersMessage;
