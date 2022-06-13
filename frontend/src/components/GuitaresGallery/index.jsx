import { useState, useEffect } from "react";
import axios from "axios";
import GuitaresCard from "@components/GuitaresCard";
import SGallery from "./style";

export default function Gallery() {
  const [guitares, setGuitares] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/guitares").then(({ data }) => {
      setGuitares(data);
    });
  }, []);

  return (
    <SGallery>
      {guitares.map((guitare) => {
        return (
          <GuitaresCard
            key={guitare.id}
            brand={guitare.brand}
            name={guitare.name}
            img={guitare.img}
            price={guitare.price}
          />
        );
      })}
    </SGallery>
  );
}
