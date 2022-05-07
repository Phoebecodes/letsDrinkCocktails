import React from "react";
import { Link, useParams } from "react-router-dom";

const Cocktail = ({
  idDrink,
  strDrink,
  strGlass,
  strAlcoholic,
  strDrinkThumb,
}) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={strDrinkThumb} />
      </div>
      <div className="cocktail-footer">
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strAlcoholic}</p>
        <Link
          to={`/cocktail/${idDrink}`}
          className="btn btn-primary btn-details"
        >
          Details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
