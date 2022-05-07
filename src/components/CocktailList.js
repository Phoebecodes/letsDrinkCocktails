import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { drinks, isLoading } = useGlobalContext();
  if (isLoading) {
    return <Loading />;
  }
  if (drinks.length === 0) {
    return (
      <section className="section">
        <h2>No search match</h2>
      </section>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {drinks.map((drink) => {
          const { idDrink } = drink;
          return <Cocktail key={idDrink} {...drink} />;
        })}
      </div>
      ;
    </section>
  );
};

export default CocktailList;
