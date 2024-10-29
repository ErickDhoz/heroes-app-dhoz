import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImage = `/public/heroes/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card box-shadow shadow">
        <div className="row no-gutter">
          <div className="col-4">
            <img src={heroImage} alt={superhero} className="card-img" />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {alter_ego !== characters && (
                <p className="card-text">{characters}</p>
              )}
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`} className="d-flex justify-content-start">
                Mas Info.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
