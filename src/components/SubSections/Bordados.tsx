import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { bordados } from "../Data/bordados";
import ProductCard from "../Common/ProductCard";
import "../../assets/GlobalStyles.css";
import './Bordados.css';

const Bordados:React.FC = () => {
  return (
    <section className="bordados">
        <Container>
            <Row>
                {bordados.map((product) =>(
                  <Col key={product.id} md={4} className="mb-4">
                    <ProductCard product={product} />
                  </Col>
                ))}
            </Row>
        </Container>
    </section>
  );
};

export default Bordados;