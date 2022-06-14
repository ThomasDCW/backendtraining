import { useState, useEffect } from "react";
import axios from "axios";
import PianosCard from "@components/PianosCard";
import SPianoGallery from "./style";

export default function PianosGallery() {
  const [pianos, setPianos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/pianos").then(({ data }) => {
      setPianos(data);
    });
  }, []);

  return (
    <SPianoGallery>
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
    </SPianoGallery>
  );
}
