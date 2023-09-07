import { useQuery } from "react-query";

export function useMeals() {
  return useQuery('meals', () =>
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php').then((response) =>
      response.json()
    ).then(data => data.categories) 
  );
}
