import { Link } from "react-router-dom";
import SNavBar from "./style";

export default function NavBar() {
  return (
    <SNavBar>
      <ul>
        <Link to="/guitares">
          <li>Guitares</li>
        </Link>
        <li>Piano</li>
      </ul>
    </SNavBar>
  );
}
