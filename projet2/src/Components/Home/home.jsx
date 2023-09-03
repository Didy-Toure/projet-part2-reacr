import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importez Link depuis React Router

function Home() {
  // Simulez une liste de catégories de recettes
  const categories = [
    "Category 1",
    "Category 2",
    "Category 3",
    // Ajoutez d'autres catégories ici
  ];

  return (
    <Container>
      <h1>Categories de recettes</h1>
      <Row>
        {categories.map((category, index) => (
          <Col key={index} md={4}>
            <div className="category-card">
              <h3>{category}</h3>
              {/* Ajoutez ici un lien vers la page de la catégorie */}
              <Link to={`/categories/${category}`}>Voir les recettes</Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
