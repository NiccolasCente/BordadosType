// src/components/Panos.tsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { panosDePrato } from "../Data/panosDePrato"; 
import ProductCard from "../Common/ProductCard"; 

const Panos: React.FC = () => {
  return (
    <section>
      <Container>
        <Row>
          {panosDePrato.map((product) => (
            <Col key={product.id} md={4} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Panos;
