let fruits = [
  { id: "apple", value: "🍎 apple" },
  { id: "orange", value: "🍊 orange" },
  { id: "grape", value: "🍇 grape" },
  { id: "pear", value: "🍐 pear" },
];
function clickHandler(value) {
  alert(value);
}

function Fruits() {
  return fruits.map((fr) => {
    return <Fruit id={fr.id} value={fr.value} key={fr.id} />;
  });
}

function Fruit(props) {
  return (
    <div className="fruits-btn">
      <button onClick={() => clickHandler(props.value)}>{props.id}</button>
    </div>
  );
}

export default Fruits;
