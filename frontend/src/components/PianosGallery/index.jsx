import { useState, useEffect } from "react";
import axios from "axios";
import PianosCard from "@components/PianosCard";
import SGallery from "./style";

export default function Gallery() {
  const [pianos, setPianos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/pianos").then(({ data }) => {
      setPianos(data);
    });
  }, []);

  return (
    <SGallery>
      {pianos.map((piano) => {
        return (
          <PianosCard
            key={piano.id}
            brand={piano.brand}
            name={piano.name}
            img={piano.img}
            price={piano.price}
          />
        );
      })}
    </SGallery>
  );
}
