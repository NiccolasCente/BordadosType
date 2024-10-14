import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { panosDePrato } from "../Data/panosDePrato"; 
import { bordados } from "../Data/bordados"; 
import { toalhas } from "../Data/toalhas";
import "../../assets/GlobalStyles.css";
import "./ProductDetails.css";
import { useCart } from './CartContext'; 
import { useFavorites } from './FavoritesContext'; 

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 

  const produtos = [...panosDePrato, ...bordados, ...toalhas];
  const product = produtos.find((p) => p.id === id); 

  const { addToCart } = useCart(); 
  const { addToFavorites } = useFavorites(); 

  if (!product) {
    return <p>Produto não encontrado!</p>;
  }

  return (
    <section className="product-details">
      <Container>
        <Row>
          <Col md={6}>
            <img 
              src={product.image} 
              alt={product.title} 
              className="product-image-detail" 
            />
          </Col>
          <Col md={6}>
            <h1 className="product-title-detail">{product.title}</h1>
            <p className="product-description-detail">{product.description}</p>
            <p className="product-price-detail">R${product.price.toFixed(2)}</p>
            <p className="product-stock-detail">Apenas {product.stock} em estoque</p>
            <Button 
              variant="primary" 
              className="btn-custom" 
              onClick={() => addToCart(product)} 
            >
              Comprar
            </Button>

            <div className="product-icons-list">
              <i 
                className="fas fa-heart"
                onClick={() => addToFavorites(product)} 
                style={{ cursor: 'pointer' }}
              ></i>
              <i 
                className="fas fa-cart-plus"
                onClick={() => addToCart(product)} 
                style={{ cursor: 'pointer' }}
              ></i>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetails;
