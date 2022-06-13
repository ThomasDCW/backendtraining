import { useState } from "react";
import Card from "@components/Card";
import SGallery from "./style";

export default function Gallery() {
  const [guitares] = useState([
    {
      id: 1,
      brand: "Gibson",
      name: "50s LG-2 Vintage Sunburst",
      img: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/482809/14775001_800.jpg",
      price: "2290",
    },
    {
      id: 2,
      brand: "Taylor",
      name: "GS Mini-e Koa Plus",
      img: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/prod/483250.jpg",
      price: "1099",
    },
    {
      id: 3,
      brand: "Takamine",
      name: "P3NY",
      img: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/prod/295056.jpg",
      price: "1129",
    },
    {
      id: 4,
      brand: "Furch",
      name: "LJ-10 w/LR Baggs EAS-VTC",
      img: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/prod/486375.jpg",
      price: "1398",
    },
  ]);

  return (
    <SGallery>
      {guitares.map((guitare) => {
        return (
          <Card
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
