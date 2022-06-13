import propTypes from "prop-types";
import SPianosCard from "./style";

export default function PianosCard({ brand, name, img, price }) {
  return (
    <SPianosCard>
      <div className="brandContainer">
        <h1>{brand}</h1>
        <h2>{name}</h2>
      </div>
      <img src={img} alt="pianopic" />
      <p>{price}€</p>
    </SPianosCard>
  );
}
PianosCard.propTypes = {
  brand: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
};
