const Emoji = (props) => {
  <h1>
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  </h1>;
};
export default Emoji;
