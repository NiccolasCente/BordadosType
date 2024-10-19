import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { panosDePrato } from '../Data/panosDePrato';
import { bordados } from '../Data/bordados';
import { toalhas } from '../Data/toalhas';
import ProductCard from './ProductCard';  

const ProductAll: React.FC = () => {
  const allProducts = [...panosDePrato, ...bordados, ...toalhas];  

  return (
    <Container>
      <Row>
        {allProducts.map((product) => (
          <Col key={product.id} xs={12} md={6} lg={4} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
