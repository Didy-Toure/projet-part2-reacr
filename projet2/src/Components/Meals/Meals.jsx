import React, { useState } from "react";
import { useQuery, useNavigate } from "react-query";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Accordion from 'react-bootstrap/Accordion';

function Meals() {
  const { id } = useParams(); //Utilisation de useParams
  const navigate = useNavigate(); // Utilisation de useNavigate 

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

  const [ingredientsOpen, setIngredientsOpen] = useState(false);
  const [instructionsOpen, setInstructionsOpen] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  if (!mealDetails) {
    return <div>The details of the recipes were not found.</div>
  }

  const toggleIngredients = () => {
    setIngredientsOpen(!ingredientsOpen);
  }

  const toggleInstructions = () => {
    setInstructionsOpen(!instructionsOpen);
  }

  return (
    <div>
      <button onClick={() => navigate(`/categories/${mealDetails.strCategory}`)}>Back To Category Recipes</button>
      <h1>{mealDetails.strMeal}</h1>
      <p>Category : {mealDetails.strCategory}</p>
      {mealDetails.strMealThumb && (
        <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
      )}
      <h2>Ingredients :</h2>
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
      <Button onClick={toggleIngredients}>
        {ingredientsOpen ? "Hide Ingredients" : "Show Ingredients"}
      </Button>
      <h2>Instructions :</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {instructionsOpen ? "Hide Instructions" : "Show Instructions"}
          </Accordion.Header>
          <Accordion.Body>
            <p>{mealDetails.strInstructions}</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Button onClick={toggleInstructions}>
        {instructionsOpen ? "Hide Instructions" : "Show Instructions"}
      </Button>
      
    </div>
  );
}

export default Meals;
