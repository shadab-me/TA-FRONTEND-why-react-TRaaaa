let fruits = [
  { id: "apple", value: "🍎 apple" },
  { id: "orange", value: "🍊 orange" },
  { id: "grape", value: "🍇 grape" },
  { id: "pear", value: "🍐 pear" },
];

function Fruits() {
  return fruits.map((fr) => {
    <Fruit />;
  });
}

function Fruit(props) {
  <button
    onClick={() => {
      alert("hfhf");
    }}
  >
    props.id
  </button>;
}

export default Fruits;
