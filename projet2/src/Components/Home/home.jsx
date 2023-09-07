import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useMeals } from "../Services/servicesrecipes.jsx";

function Home() {
  const { data: categories, isLoading, isError } = useMeals();

  if (isLoading) {
    return <div>Chargement en cours...</div>;
  }

  if (isError) {
    return <div>Erreur lors du chargement des catégories.</div>;
  }

  return (
    <Container>
      <h1 className="m-5">List All Meal Categories</h1>
      <Row>
        {categories.map((category) => (
          <Col key={category.idCategory} md={4}>
            <div className="category-card">
              <h3>{category.strCategory}</h3>{" "}
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
