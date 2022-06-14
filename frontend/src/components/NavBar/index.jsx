import { Link } from "react-router-dom";
import SNavBar from "./style";

export default function NavBar() {
  return (
    <SNavBar>
      <ul>
        <Link to="/guitares">
          <li>Guitares</li>
        </Link>
        <Link to="/adminguitares">
          <li>Admin Guitares</li>
        </Link>
        <Link to="/pianos">
          <li>Pianos</li>
        </Link>
        <Link to="/adminpianos">
          <li>Admin Pianos</li>
        </Link>
      </ul>
    </SNavBar>
  );
}
