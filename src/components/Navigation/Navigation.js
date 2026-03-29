import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/category/popular">Populares</NavLink>
        </li>
        <li>
          <NavLink to="/category/now_playing">Em Cartaz</NavLink>
        </li>{" "}
        <li>
          <NavLink to="/category/top_rated">Mais Votados</NavLink>
        </li>
        <li>
          <NavLink to="/category/upcoming">Lançamentos</NavLink>
        </li>{" "}
      </ul>{" "}
    </nav>
  );
}

export default Navigation;
