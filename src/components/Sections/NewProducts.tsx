import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../Common/ProductCard"; 
import { newProducts } from "../Data/NewProducts"; 
import "./NewProducts.css";

const NewProducts: React.FC = () => {
  return (
    <section id="section-newproducts">
      <Container>
        <Row>
          {newProducts.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4}>
              <ProductCard 
                product={product} 
                more={`/produtos/${product.id}`} 
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default NewProducts;
