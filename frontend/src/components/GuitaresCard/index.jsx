import propTypes from "prop-types";
import SGuitareCard from "./style";

export default function GuitaresCard({ brand, name, img, price }) {
  return (
    <SGuitareCard>
      <div className="brandContainer">
        <h1>{brand}</h1>
        <h2>{name}</h2>
      </div>
      <img src={img} alt="guitarepic" />
      <p>{price}€</p>
    </SGuitareCard>
  );
}
GuitaresCard.propTypes = {
  brand: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
};
