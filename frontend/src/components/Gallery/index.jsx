import Card from "@components/Card";
import SGallery from "./style";

const guitares = [
  {
    id: 1,
    brand: "Gibson",
    name: "50s LG-2 Vintage Sunburst",
    img: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/482809/14775001_800.jpg",
    price: "2290€",
  },
  {
    id: 2,
    brand: "Taylor",
    name: "GS Mini-e Koa Plus",
    img: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/prod/483250.jpg",
    price: "1099€",
  },
];

export default function Gallery() {
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
