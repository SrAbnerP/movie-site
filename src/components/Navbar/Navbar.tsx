import { FunctionComponent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "./Navbar.scss";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav className="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie />
          MoviesLib
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
