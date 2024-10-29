import { Link, NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useContext } from "react";
import { AuthContext } from "../../auth/context/AuthContext";

export const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);

  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
    logout();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="home" className="navbar-brand">
          <h4>Inicio </h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="marvel"
            >
              MARVEL
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="dc"
            >
              DC
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="search"
            >
              BUSCAR
            </NavLink>
          </ul>
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
            <ul className="navbar-nav ml-auto">
              <div className="d-flex">
                <span className="nav-item nav-link text-danger  d-flex">
                  <h6 className="text-light m-2">{user?.name}</h6>
                  <i
                    className="fa-solid fa-right-from-bracket m-auto"
                    onClick={onLogout}
                  >
                    <small className=""> Salir</small>
                  </i>
                </span>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
