import "./Colors.css";
import colors from "../config/colors.json";

function Colors() {
  return [colors].map((color) => {
    return <h1>{color.black}</h1>;
  });
}

export default Colors;
