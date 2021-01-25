import "./App.css";
import ClassApp from "./ClassApp";
import Fruits from "./Fruit";

function App() {
  function clickHandler(name) {
    alert(`Hello ${name}`);
  }
  let fruits = [
    { id: "apple", value: "🍎 apple" },
    { id: "orange", value: "🍊 orange" },
    { id: "grape", value: "🍇 grape" },
    { id: "pear", value: "🍐 pear" },
  ];

  return (
    <div className="App">
      <button onClick={() => alert("Hello React Event")}>Click Me</button>
      <button name="Arya" onClick={() => clickHandler("Arya")}>
        Arya
      </button>
      <button name="John" onClick={() => clickHandler("John")}>
        John
      </button>
      <button name="Bran" onClick={() => clickHandler("Bran")}>
        Bran
      </button>

      <ClassApp />
      <Fruits />
    </div>
  );
}

export default App;
