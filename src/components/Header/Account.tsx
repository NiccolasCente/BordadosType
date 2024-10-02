import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../assets/GlobalStyles.css"; 
import "./Account.css";

const Account: React.FC = () => {
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
              <a href="#">Perdeu sua senha?</a><br />
              <a href="#">Perdeu seu nome de usuário?</a>
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
      </Container>
    </section>
  );
};

export default Account;
