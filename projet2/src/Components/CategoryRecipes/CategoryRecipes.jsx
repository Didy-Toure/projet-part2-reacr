import React from "react";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
import { CategoryRecipes } from "../Services/categorynameservice.jsx";

function CategoryRecipesComponent() {
  const { categoryName } = useParams();

  const fetchCategoryRecipes = CategoryRecipes(categoryName); 

  const { data: recipes, isLoading, isError } = useQuery(
    `categoryRecipes-${categoryName}`,
    fetchCategoryRecipes
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error.</div>;
  }

  return (
    <div>
      {/* Le lien pour revenir à la liste des catégories */}
      <Link to="/">Back To The List Meal Categories</Link>
      <h1 className="m-4">Recipes of The Category : {categoryName}</h1>
      {recipes.map((recipe) => (
        <div key={recipe.idMeal}>
          <h2>{recipe.strMeal}</h2>
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            style={{ maxWidth: "100px" }}
          />
          <Link to={`/meals/${recipe.idMeal}`}>See Recipe</Link>
        </div>
      ))}
    </div>
  );
}

export default CategoryRecipesComponent;
