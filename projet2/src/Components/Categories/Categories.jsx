import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

function Categories() {
  const fetchCategories = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = await response.json();
    return data.categories;
  };

  const { data: categories, isLoading, isError } = useQuery(
    "categories",
    fetchCategories
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error.</div>;
  }

  return (
    <Container>
      <h1>All the Recipes of The Category</h1>
      <Row>
        {categories.map((category) => (
          <Col key={category.idCategory} md={4}>
            <div className="category-card">
              <h3>{category.strCategory}</h3>
              <p>{category.strCategoryDescription}</p>
              <Link to={`/categories/${category.strCategory}`}>
                See Recipes
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Categories;
