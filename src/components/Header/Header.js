import { Link } from "react-router-dom";
import Search from "../Search/Search";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1>
        <Link to="/">Buscador de Filmes</Link>
      </h1>
      <Search />
    </header>
  );
}

export default Header;
