import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { toalhas } from "../Data/toalhas"; 
import ProductCard from "../Common/ProductCard"; 
import "../../assets/GlobalStyles.css";
import "./Toalhas.css"

const Panos: React.FC = () => {
  return (
    <section className='toalhas'>
      <Container>
        <Row>
          {toalhas.map((product) => (
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
