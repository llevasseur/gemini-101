import { Link, useLocation } from "react-router-dom";
import "./header.scss";
function Header() {
  const location = useLocation();

  let genClassName = "navList__item navList__item--active";
  let aboutClassName = "navList__item";
  if (location.pathname.includes("/about")) {
    genClassName = aboutClassName;
    aboutClassName = "navList__item navList__item--active";
  }

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo">
          <h2>🤖 GenMoji</h2>
        </Link>
        <ul className="navList">
          <li className={genClassName}>
            <Link to="/generateEmoji" className="link">
              Home
            </Link>
          </li>
          <li className={aboutClassName}>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
