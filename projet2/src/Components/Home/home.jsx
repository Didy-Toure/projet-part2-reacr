import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import Button from 'react-bootstrap/Button';


function Home() {
  // Définissez une fonction pour récupérer les catégories depuis l'API
    const fetchCategories = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await response.json();
      return data.categories;
    };


    // Utilisez la fonction ci-dessus avec React Query
    const { data: categories, isLoading, isError } = useQuery(
        "categories",
        fetchCategories
    );

    if (isLoading) {
        return <div>Chargement en cours...</div>;
        }

    if (isError) {
        return <div>Erreur lors du chargement des catégories.</div>;

}

  return (
    <Container>
      <h1 class="m-5">List All Meal Categories</h1>
      <Row>
        {categories.map((category) => (
          <Col key={category.idCategory} md={4}>
            <div className="category-card">
              <h3>{category.strCategory}</h3>{" "}
              {/* Accédez à strCategory pour obtenir le nom de la catégorie */}
              <Link to={`/categories/${category.strCategory}`}>
                <Button>See Recipes</Button>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
