import React from "react";

export const ContenidoHomePage = ({ title1, img, title2, text }) => {
  return (
    <div className="row">
      <div className="col-md-5 d-flex flex-column align-content-center">
        <h3 className="mt-3">{title1}</h3>
        <hr />
        <img className="w-100 rounded" src={img} alt="Marvel Comic Logo" />
      </div>
      <div className="col-md-7 d-flex flex-column">
        <h3 className="mt-3">{title2}</h3>
        <hr />
        <p className="text-justify">{text}</p>
      </div>
      <hr />
    </div>
  );
};
