import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import "../../assets/GlobalStyles.css";
import "./Account.css";

const Account: React.FC = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showUsernameModal, setShowUsernameModal] = useState(false);

  const handlePasswordModalClose = () => setShowPasswordModal(false);
  const handlePasswordModalShow = () => setShowPasswordModal(true);

  const handleUsernameModalClose = () => setShowUsernameModal(false);
  const handleUsernameModalShow = () => setShowUsernameModal(true);

  return (
    <section className="account-background">
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8} className="text-center mb-4">
            <h1>Minha Conta</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={4} className="text-center">
            <h5>Entrar</h5>
            <Form className="mb-4">
              <Form.Group controlId="username">
                <Form.Label>Digite Nome de Usuário ou E-mail:</Form.Label>
                <Form.Control type="text" placeholder="Nome de Usuário ou E-mail" />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Senha:</Form.Label>
                <Form.Control type="password" placeholder="Digite sua senha" />
              </Form.Group>
              <div className="products-button">
                <Button className="btn-custom" type="submit">
                  Entrar
                </Button>
              </div>
            </Form>
            <p>
              <a href="#" onClick={handlePasswordModalShow}>Perdeu sua senha?</a><br />
              <a href="#" onClick={handleUsernameModalShow}>Perdeu seu nome de usuário?</a>
            </p>
          </Col>

          <Col xs={12} md={4} className="text-center">
            <h5>Cadastrar-se</h5>
            <Form className="mb-4">
              <Form.Group controlId="email">
                <Form.Label>Digite seu endereço de e-mail:</Form.Label>
                <Form.Control type="email" placeholder="E-mail" />
              </Form.Group>
              <Form.Group controlId="newPassword">
                <Form.Label>Digite sua senha:</Form.Label>
                <Form.Control type="password" placeholder="Senha" />
              </Form.Group>
              <div className="products-button">
                <Button className="btn-custom" type="submit">
                  Cadastre-se
                </Button>
              </div>
            </Form>

            <Col className="text-center mt-3">
              <p>
                Seus dados pessoais serão usados para aprimorar a sua experiência em todo este site, para gerenciar o acesso à sua conta e para outros propósitos, como descritos em nossa política de privacidade.
              </p>
            </Col>
          </Col>
        </Row>

        <Modal show={showPasswordModal} onHide={handlePasswordModalClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Recuperar Senha</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="recoverEmail">
                <Form.Label>Digite seu e-mail para recuperar sua senha:</Form.Label>
                <Form.Control type="email" placeholder="E-mail" />
              </Form.Group>
              <Button className="btn-custom mt-3" type="submit">
                Enviar
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        <Modal show={showUsernameModal} onHide={handleUsernameModalClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Recuperar Nome de Usuário</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="recoverUsernameEmail">
                <Form.Label>Digite seu e-mail para recuperar seu nome de usuário:</Form.Label>
                <Form.Control type="email" placeholder="E-mail" />
              </Form.Group>
              <Button className="btn-custom mt-3" type="submit">
                Enviar
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};

export default Account;
