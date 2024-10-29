import { HeroCard } from "../component";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  console.log(q);

  const { onInputChange, searchText } = useForm({
    searchText: "",
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };
  return (
    <>
      <h1 className="mt-4">Busqueda</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscando</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              name="searchText"
              id=""
              placeholder="Buscar Heroe"
              className="form-control"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
              
            />
            <button className="btn btn-outline-danger mt-2 me-1">Buscar</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultado</h4>
          <hr />

          {q === "" ? (
            <div className="alert alert-primary">
              <p>Buscar Heroe</p>
            </div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger">
                <p>
                  Heroe: <b>{q}</b>, no encontrado, intente con otro nombre.
                </p>
              </div>
            )
          )}

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
