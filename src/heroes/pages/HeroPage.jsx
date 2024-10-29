import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroeById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroeById(id), [id]);
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="marvel" />;
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeIn">
      <div className="col-4">
        <img
          src={`/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego: </b>
            {hero.characters}
          </li>
          <li className="list-group-item">
            <b>Publicador: </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>Primera aparicion: </b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">
          <b>Caracter</b>
        </h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-info" onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};
