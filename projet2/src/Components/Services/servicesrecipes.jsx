import { useQuery } from "react-query";


export function MealsById(id) {
  return useQuery(['mealDetails', id], async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  });
}







