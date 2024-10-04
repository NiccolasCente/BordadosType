import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaGoogle, FaInstagram, FaGem, FaHome, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-lg-start text-muted" style={{ backgroundColor: "#FFD7DD" }}>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Se conecte comigo em minhas redes sociais:</span>
        </div>
        <div>
          <a href="https://www.facebook.com/mirian.cente" target="_blank" className="me-4 text-reset">
            <FaFacebookF style={{ color: "#CD853F" }} />
          </a>
          <a href="" className="me-4 text-reset">
            <FaGoogle style={{ color: "#CD853F" }} />
          </a>
          <a href="https://www.instagram.com/mi.bordados/" target="_blank" className="me-4 text-reset">
            <FaInstagram style={{ color: "#CD853F" }} />
          </a>
        </div>
      </section>

      <section>
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col md={3} lg={4} xl={3} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <FaGem className="me-3" style={{ color: "#CD853F" }} />Miriam Bordados
              </h6>
              <p>
                Há 4 anos entregando os melhores produtos.
                Orçamentos apenas pelo WhatsApp.
                Melhores preços.
              </p>
            </Col>

            <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Produtos</h6>
              <p><a href="#!" className="text-reset">Panos de prato</a></p>
              <p><a href="#!" className="text-reset">Bordados</a></p>
              <p><a href="#!" className="text-reset">Toalhas</a></p>
            </Col>

            <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contatos</h6>
              <p><FaHome className="me-3" style={{ color: "#CD853F" }} /> Santo André, São Paulo, Brasil</p>
              <p><FaEnvelope className="me-3" style={{ color: "#CD853F" }} /> miriam.ap.cente@gmail.com</p>
              <p><FaPhone className="me-3" style={{ color: "#CD853F" }} /> (11) 94007-0057</p>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: "white" }}>
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="https://niccolascente.netlify.app/" target="_blank"> Niccolas Cente</a>
      </div>
    </footer>
  );
};

export default Footer;
