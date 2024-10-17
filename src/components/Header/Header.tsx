import React, { useState } from "react";
import { Container, Row, Col, Nav, Form, FormControl, Button, Modal } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaInstagram, FaUser, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Header/Logo.png";
import { useCart } from "../Common/CartContext";
import { useFavorites } from "../Common/FavoritesContext";
import CartPage from "../Common/CartPage";
import "./Header.css";
import "../../assets/GlobalStyles.css";
import FavoritesPage from "../Common/FavoritesPage";

const Header: React.FC = () => {
  const location = useLocation();
  const [showFavorites, setShowFavorites] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const { favoriteItems } = useFavorites();
  const { cartItems } = useCart();

  return (
    <>
      <header>
        <div className="header-top">
          <Container>
            <Row className="justify-content-between align-items-center">
              <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-start">
                <div className="d-flex align-items-center">
                  <FaPhone className="me-2" />
                  <a href="https://wa.me/11940070057" target="_blank" rel="noopener noreferrer">
                    <span>(11) 94007-0057</span>
                  </a>
                </div>
              </Col>
              <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-center">
                <div className="d-flex align-items-center">
                  <FaEnvelope className="me-2" />
                  <a href="mailto:miriam.ap.cente@gmail.com">
                    <span>miriam.ap.cente@gmail.com</span>
                  </a>
                </div>
              </Col>
              <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-end">
                <div className="d-flex align-items-center">
                  <FaInstagram className="me-2" />
                  <a href="https://www.instagram.com/mi.bordados/" target="_blank" rel="noopener noreferrer">
                    @Miriam Bordados
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div style={{ padding: "20px 0" }}>
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={4} className="d-flex align-items-center">
                <Link to="/">
                  <img src={Logo} alt="Logo" className="img-fluid header-logo" />
                </Link>
              </Col>
              <Col xs={12} md={4} className="header-search">
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Panos de prato, bordados e toalhas"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-secondary">
                    <FaSearch style={{ color: "#CD853F" }} />
                  </Button>
                </Form>
              </Col>
              <Col xs={12} md={4} className="d-flex justify-content-end header-nav">
                <Nav>
                  {location.pathname !== "/account" && (
                    <Nav.Link as={Link} to="/account">
                      <FaUser className="me-3" style={{ color: "#CD853F" }} />
                    </Nav.Link>
                  )}
                  <Nav.Link onClick={() => setShowFavorites(true)} className="me-3">
                    <FaHeart style={{ color: "#CD853F" }} />
                    {favoriteItems.length > 0 && <span className="badge">{favoriteItems.length}</span>}
                  </Nav.Link>
                  <Nav.Link onClick={() => setShowCart(true)}>
                    <FaShoppingCart style={{ color: "#CD853F" }} />
                    {cartItems.length > 0 && <span className="badge">{cartItems.length}</span>}
                  </Nav.Link>
                </Nav>
              </Col>
            </Row>
          </Container>
        </div>

        <Modal show={showFavorites} onHide={() => setShowFavorites(false)} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Itens Favoritos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FavoritesPage />
          </Modal.Body>
        </Modal>

        <Modal show={showCart} onHide={() => setShowCart(false)} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Carrinho de Compras</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CartPage />
          </Modal.Body>
        </Modal>

        <div className="nav-bottom">
          <Container>
            <Row>
              <Col xs={12} className="d-flex justify-content-start">
                <Nav className="nav-sections">
                  <Nav.Link as={Link} to="/">Início</Nav.Link>
                  <Nav.Link as={Link} to="/panos">Panos de prato</Nav.Link>
                  <Nav.Link as={Link} to="/bordados">Bordados</Nav.Link>
                  <Nav.Link as={Link} to="/toalhas">Toalhas</Nav.Link>
                  <Nav.Link href="#">Novos Produtos</Nav.Link>
                  <Nav.Link href="#">Serviços</Nav.Link>
                  <Nav.Link as={Link} to="/sobremim">Sobre Mim</Nav.Link>
                </Nav>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    </>
  );
};

export default Header;
