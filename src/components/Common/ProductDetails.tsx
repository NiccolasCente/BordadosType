import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { panosDePrato } from "../Data/panosDePrato"; 
import "../../assets/GlobalStyles.css";


const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const product = panosDePrato.find((p) => p.id === id); 

  if (!product) {
    return <p>Produto não encontrado!</p>;
  }

  return (
    <section className="product-details">
      <Container>
        <Row>
          <Col md={6}>
            <img src={product.image} alt={product.title} className="product-image-detail" />
          </Col>
          <Col md={6}>
            <h1 className="product-title-detail">{product.title}</h1>
            <p className="product-description-detail">{product.description}</p>
            <p className="product-price-detail">R${product.price.toFixed(2)}</p>
            <p className="product-stock-detail">Apenas {product.stock} em estoque</p>
            <Button variant="primary" className="btn-custom">
              Comprar
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetails;
