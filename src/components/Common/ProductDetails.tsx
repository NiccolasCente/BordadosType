import React, { useState } from "react";
import { Container, Row, Col, Button, Breadcrumb, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { panosDePrato } from "../Data/panosDePrato"; 
import { bordados } from "../Data/bordados"; 
import { toalhas } from "../Data/toalhas";  
import { newProducts } from "../Data/NewProducts";
import "../../assets/GlobalStyles.css";
import "./ProductDetails.css";
import { useCart } from './CartContext'; 
import { useFavorites } from './FavoritesContext'; 
import { FaTruck, FaChevronDown } from "react-icons/fa";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const produtos = [...panosDePrato, ...bordados, ...toalhas, ...newProducts]; 
  const product = produtos.find((p) => p.id === id); 
  const { addToCart } = useCart(); 
  const { addToFavorites, removeFromFavorites, favoriteItems } = useFavorites(); 

  if (!product) {
    return <p>Produto não encontrado!</p>;
  }

  const isFavorited = favoriteItems.some((item) => item.id === product.id);

  const getSection = () => {
    if (panosDePrato.includes(product)) return "Panos de Prato";
    if (bordados.includes(product)) return "Bordados";
    if (toalhas.includes(product)) return "Toalhas";
    if (newProducts.includes(product)) return "Novos Produtos";
    return "Outros";  
  };

  const section = getSection();

  const getSectionRoute = () => {
    switch (section) {
      case "Panos de Prato":
        return "/panos";
      case "Bordados":
        return "/bordados";
      case "Toalhas":
        return "/toalhas";
      case "Novos Produtos":
        return "/novosprodutos";
      default:
        return "/produtos";
    }
  };

  const [showInput, setShowInput] = useState(false);
  const [cep, setCep] = useState("");

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCep(e.target.value);
  };

  const handleCalculateFrete = () => {
    alert(`Calculando frete para o CEP: ${cep}`);
  };

  return (
    <section className="product-details">
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Início</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: getSectionRoute() }}>{section}</Breadcrumb.Item>
          <Breadcrumb.Item active>{product.title}</Breadcrumb.Item>
        </Breadcrumb>

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
            <p className="product-price-detail">R$ {product.price.toFixed(2)}</p>
            <p className="product-stock-detail">Apenas {product.stock} em estoque</p>
            <Button 
              variant="primary" 
              className="btn-custom" 
              onClick={() => addToCart(product)} 
            >
              Comprar
            </Button>

            <div className="product-icons-list">
              {isFavorited ? (
                <i 
                  className="fas fa-heart-broken"
                  onClick={() => removeFromFavorites(product.id)}
                  style={{ cursor: 'pointer', color: 'red' }} 
                ></i>
              ) : (
                <i 
                  className="fas fa-heart"
                  onClick={() => addToFavorites({ ...product, quantity: 1 })}
                  style={{ cursor: 'pointer' }}
                ></i>
              )}
              <i 
                className="fas fa-cart-plus"
                onClick={() => addToCart(product)} 
                style={{ cursor: 'pointer' }}
              ></i>
            </div>

            <div className="calculate-frete-box">
              <div className="calculate-frete-header" onClick={() => setShowInput(!showInput)}>
                <FaTruck className="frete-icon" /> 
                <span className="frete-text">Calcular Frete</span>
                <FaChevronDown className="frete-chevron" />
              </div>
              {showInput && (
                <Form className="calculate-frete-form">
                  <Form.Group controlId="formCep">
                    <Form.Control
                      type="text"
                      placeholder="Digite seu CEP"
                      value={cep}
                      onChange={handleCepChange}
                    />
                  </Form.Group>
                  <Button variant="success" className="calcular-frete-button"  onClick={handleCalculateFrete}>
                    Calcular
                  </Button>
                  <div className="unknown-cep">
                    <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener noreferrer">
                      Não sei meu CEP
                    </a>
                  </div>
                </Form>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetails;
