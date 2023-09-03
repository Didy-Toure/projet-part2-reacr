import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function Meals() {
  // Déstructurez l'ID à l'intérieur de la fonction
  const { id } = useParams();

  // Requête avec React Query
  const {
    isLoading,
    isError,
    data: mealDetails,
  } = useQuery(["mealDetails", id], async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  });

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  if (!mealDetails) {
    return <div>Les détails de la recette n'ont pas été trouvés.</div>
  }

  return (
    <div>
      <h1>{mealDetails.strMeal}</h1>
      <p>Catégorie : {mealDetails.strCategory}</p>
      {mealDetails.strMealThumb && (
        <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
      )}
      <h2>Ingrédients :</h2>
      <ul>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((ingredientIndex) => {
          const ingredient = mealDetails[`strIngredient${ingredientIndex}`];
          const measure = mealDetails[`strMeasure${ingredientIndex}`];

          if (ingredient && ingredient.trim() !== "") {
            return (
              <li key={ingredientIndex}>
                {ingredient} : {measure}
              </li>
            );
          }
          return null;
        })}
      </ul>
      <h2>Instructions :</h2>
      <p>{mealDetails.strInstructions}</p>
    </div>
  );
}

export default Meals;
