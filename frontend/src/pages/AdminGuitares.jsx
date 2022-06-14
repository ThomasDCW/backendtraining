import SAdmin from "./style";

export default function AdminGuitares() {
  return (
    <SAdmin>
      <input type="text" placeholder="Marque de la guitare" />
      <input type="text" placeholder="Model de la guitare" />
      <input type="text" placeholder="Image de la guitare" />
      <input type="text" placeholder="Prix de la guitare" />
      <button type="button">Envoyer</button>
    </SAdmin>
  );
}
