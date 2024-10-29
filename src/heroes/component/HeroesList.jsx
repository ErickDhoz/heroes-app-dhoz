import React, { useMemo } from "react";
import { getHeroesBypublisher } from "../helpers/getHeroeByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroesList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesBypublisher(publisher), [publisher]);

  return (
    <div className="row row-cols-1 row-cols-md-3  g-2">
      {heroes.map((heroe) => (
        <HeroCard key={heroe.id} {...heroe} />
      ))}
    </div>
  );
};
