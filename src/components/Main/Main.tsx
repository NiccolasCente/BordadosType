import React from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import "./Main.css"; 
import Panos from "../../assets/Main/Pano_Prato.jpeg"; 
import Bordados from "../../assets/Main/Bordado_1.png";
import Toalhas from "../../assets/Main/Toalha_1.png";

const Main: React.FC = () => {
  return (
    <main className="main-section">
      <Container>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <div className="carousel-img-container">
                  <h3 className="carousel-title">Panos de Prato</h3>
                  <img
                    className="d-block w-100 carousel-img"
                    src={Panos}
                    alt="Panos de Prato"
                  />
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="carousel-img-container">
                  <h3 className="carousel-title">Bordados</h3>
                  <img
                    className="d-block w-100 carousel-img"
                    src={Bordados}
                    alt="Bordados"
                  />
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="carousel-img-container">
                  <h3 className="carousel-title">Toalhas de Banho</h3>
                  <img
                    className="d-block w-100 carousel-img"
                    src={Toalhas}
                    alt="Toalhas de Banho"
                  />
                </div>
              </Carousel.Item>
            </Carousel>

            <div className="products-button">
              <Button variant="primary" className="btn-custom">
                VER TODOS OS PRODUTOS
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
