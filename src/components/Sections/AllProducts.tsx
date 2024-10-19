import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductAll from "../Common/ProductAll";  
import "./AllProducts.css"

const AllProducts: React.FC = () => {
  return (
    <section id="all-products">
      <Container>
        <Row>
          <Col>
            <h1>Todos os Produtos</h1>
            <ProductAll />  
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProducts;
