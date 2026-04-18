import { NavLink, Link } from "react-router-dom";

const nav = [
  { to: "/", label: "Home" },
  { to: "/designs", label: "Designs" },
  { to: "/headbands", label: "Headbands" },
  { to: "/brooches", label: "Brooches" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="navWrap">
      <div className="navInner">
        <Link to="/" className="brand">
          <img
            className="nav-logo"
            src="/images/LOGO.jpeg"
            alt="La Monde logo"
          />
          <span className="brandText">
            <span className="brandName">La Monde</span>
            <span className="brandSub">accessories</span>
          </span>
        </Link>

        <nav className="navLinks">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                isActive ? "navLink active" : "navLink"
              }
              end={n.to === "/"}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="navRight">
          <a className="pill" href="#featured">Shop</a>
        </div>
      </div>
    </header>
  );
}