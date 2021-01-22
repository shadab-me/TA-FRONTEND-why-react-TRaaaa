import cards from "../config/data";
import "./Articles.css";
function Articles() {
  return cards.map((card) => {
    return (
      <div className="card">
        <div className="img">
          <img src={card.urlToImage} />
        </div>
        <div className="title">
          <h5>{card.title}</h5>
        </div>
      </div>
    );
  });
}

export default Articles;
