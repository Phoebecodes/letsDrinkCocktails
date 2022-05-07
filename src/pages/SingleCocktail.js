import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const [singleCocktail, setSingleCocktail] = useState({
    strDrinkThumb: "",
    strDrink: "",
    strCategory: "",
    strAlcoholic: "",
    strGlass: "",
    strInstructions: "",
  });
  const [ingredients, setIngredients] = useState([]);
  const { drinkID } = useParams();
  const { setIsLoading, isLoading } = useGlobalContext();

  const getDrink = async () => {
    try {
      const res = await fetch(`${url}${drinkID}`);
      const data = await res.json();
      const drink = data.drinks[0];

      setSingleCocktail({
        strDrinkThumb: drink.strDrinkThumb,
        strDrink: drink.strDrink,
        strCategory: drink.strCategory,
        strAlcoholic: drink.strAlcoholic,
        strGlass: drink.strGlass,
        strInstructions: drink.strInstructions,
      });

      setIngredients([
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
        drink.strIngredient6,
      ]);

      setIsLoading(false);
    } catch (error) {
      console.log(error.res);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getDrink();
  }, [drinkID]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          Back Home
        </Link>
        <h2 className="section-title">{singleCocktail.strDrink}</h2>

        <div className="drink">
          <img src={singleCocktail.strDrinkThumb} />
          <div className="drink-info">
            <p>
              <span className="drink-data">name:</span>
              {singleCocktail.strDrink}
            </p>
            <p>
              <span className="drink-data">Category:</span>
              {singleCocktail.strCategory}
            </p>
            <p>
              <span className="drink-data">Info:</span>
              {singleCocktail.strAlcoholic}
            </p>
            <p>
              <span className="drink-data">Glass:</span>
              {singleCocktail.strGlass}
            </p>
            <p>
              <span className="drink-data">Instructons:</span>
              {singleCocktail.strInstructions}
            </p>
            <p>
              <span className="drink-data">Ingredients:</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null;
              })}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleCocktail;
