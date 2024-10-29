import React from "react";
import { HeroesList } from "../component";

export const MarvelPage = () => {
  return (
    <div>
      <h1 className="mt-4">MARVEL HEROES</h1>
      <hr />
      <HeroesList publisher="Marvel Comics" />
    </div>
  );
};
