import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { MealsById } from "../Services/servicesrecipes.jsx";

function Meals() {
  const { id } = useParams();

  const {
    isLoading,
    isError,
    data: mealDetails,
  } = MealsById(id);

  const [ingredientsOpen, setIngredientsOpen] = useState(false);
  const [instructionsOpen, setInstructionsOpen] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!mealDetails) {
    return <div>Details were not found.</div>;
  }

  const toggleIngredients = () => {
    setIngredientsOpen(!ingredientsOpen);
  };

  const toggleInstructions = () => {
    setInstructionsOpen(!instructionsOpen);
  };

  return (
    <div>
      <Link to={`/categories/${mealDetails.strCategory}`}>Return to the list of category</Link>
      <h1>{mealDetails.strMeal}</h1>
      <p>Category : {mealDetails.strCategory}</p>
      {mealDetails.strMealThumb && (
        <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
      )}
      <h2>Ingredients</h2>
      <Button onClick={toggleIngredients}>
        {ingredientsOpen ? "Hide Ingredients" : "Show Ingrédients"}
      </Button>
      <Collapse in={ingredientsOpen}>
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
      </Collapse>
      <h2>Instructions</h2>
      <Button onClick={toggleInstructions}>
        {instructionsOpen ? "Hide Instructions" : "Show Instructions"}
      </Button>
      <Collapse in={instructionsOpen}>
        <p>{mealDetails.strInstructions}</p>
      </Collapse>
    </div>
  );
}

export default Meals;
