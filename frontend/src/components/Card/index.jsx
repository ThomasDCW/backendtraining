import propTypes from "prop-types";
import SCard from "./style";

export default function Card({ brand, name, img, price }) {
  return (
    <SCard>
      <div className="brandContainer">
        <h1>{brand}</h1>
        <h2>{name}</h2>
      </div>
      <img src={img} alt="guitarepic" />
      <p>{price}</p>
    </SCard>
  );
}
Card.propTypes = {
  brand: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
};
