import "./Avatar.scss";

const Avatar = (props) => {
  const { src, size = "sm" } = props;

  const className = `component-avatar component-avatar--${size}`;

  return (
    <div className={className}>
      <img src={src} alt="chat-avatar" />
    </div>
  );
};

export default Avatar;
