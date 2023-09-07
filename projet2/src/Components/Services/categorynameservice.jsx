import { useQuery } from "react-query";

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