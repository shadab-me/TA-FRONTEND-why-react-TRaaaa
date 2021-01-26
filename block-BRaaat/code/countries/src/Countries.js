import countries from "./config/countries.json";
import "./Countries.css";
function Countries() {
  return countries.map((country) => {
    return (
      <div className="country">
        <div className="card">
          <h2 style={{ width: "100%" }}>{country.emoji}</h2>
          <div className="container">
            <h4>{country.name}</h4>
          </div>
        </div>
      </div>
    );
  });
}

export default Countries;
