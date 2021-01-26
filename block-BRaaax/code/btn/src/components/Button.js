import "./Button.css";
function clickHandler() {
  alert("You clicked me");
}
function Button(props) {
  return (
    <button
      className={props.type + " " + props.size || "btn"}
      type={props.type}
      label={props.label}
      onClick={props.onClickHandler}
    >
      Button
    </button>
  );
}

export default Button;
