import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import SAdmin from "./style";

export default function AdminGuitares() {
  const [formData, setFormData] = useState({
    brand: "",
    name: "",
    img: "",
    price: "",
  });

  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post("http://localhost:5000/guitares", formData)
      .then(() => {
        toast("Wow so easy!");
      })
      .catch(() => {
        toast.error("Aww, it broke!");
      });
  };

  const hChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <SAdmin action="" onSubmit={hSubmit}>
      <input
        className="textfield"
        type="text"
        placeholder="Marque de la guitare"
        name="brand"
        value={formData.brand}
        onChange={hChange}
      />
      <input
        className="textfield"
        type="text"
        placeholder="Model de la guitare"
        name="name"
        value={formData.name}
        onChange={hChange}
      />
      <input
        className="textfield"
        type="url"
        placeholder="Image de la guitare"
        name="img"
        value={formData.img}
        onChange={hChange}
      />
      <input
        className="textfield"
        type="text"
        placeholder="Prix de la guitare"
        name="price"
        value={formData.price}
        onChange={hChange}
      />
      <input className="submit" type="submit" value="ENVOYER" />
    </SAdmin>
  );
}
