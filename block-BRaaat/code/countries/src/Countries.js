import countries from "./config/countries.json";
import "./Countries.css";
function clickHandler(country) {
  alert(
    `country Name is ${country.name} and country emoji is ${country.emoji}...`
  );
}

function Countries() {
  return countries.map((country) => {
    return (
      <div className="country">
        <div className="card">
          <h2 style={{ width: "100%" }}>{country.emoji}</h2>
          <div className="container">
            <h4
              className="name"
              onClick={() => {
                clickHandler(country);
              }}
            >
              {country.name}
            </h4>
          </div>
        </div>
      </div>
    );
  });
}

export default Countries;
