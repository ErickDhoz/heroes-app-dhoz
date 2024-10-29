import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import "./LoginPage.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const { onInputChange, nombre } = useForm({
    nombre: "",
  });

  const entrar = useNavigate();

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (nombre.trim().length <= 1) return;
    login(nombre);
    entrar("/", {
      replace: true,
    });
  };

  return (
    <div className="cuerpo  ">
      <div className="contenedor container animate__animated animate__fadeInDown">
        <div className="fondo-titulo">
          <h1>Marvel y DC Comics</h1>
        </div>
        <div className="d-flex flex-column">
          <form onSubmit={onFormSubmit}>
            <input
              type="text"
              placeholder="Ingrese Su nombre"
              className="form-control mb-2"
              onChange={onInputChange}
              name="nombre"
              value={nombre}
            />
            <button
              className="btn btn-danger boton"
              disabled={nombre.trim() <= 1 ? true : false}
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
