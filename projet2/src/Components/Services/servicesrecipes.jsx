import { useQuery } from "react-query";

export function useMeals() {
  return useQuery('meals', () =>
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php').then((response) =>
      response.json()
    ).then(data => data.categories) 
  );
}


export function MealsById(id) {
  return useQuery(['mealDetails', id], async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  });
}


export function MealsByCategory (category) {
    return useQuery(['meals', category], () => {
        return fetch(`https://www.themealdb.com/api/json/v1/1/categories.php/${category}`)
            .then(res => res.json())
    })
}

export function CategoryRecipes (categoryName) {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`;
    return useQuery(
        `categoryRecipes-${categoryName}`,
        async () => {
            const response = await fetch(apiUrl);
            const data = await response.json();
            return data.meals;
        }
    )
}

export function detailsRecipes (recipeId) {
    return fetch (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
        .then(res => res.json())
        .then (data => data.meals[0]);


}


