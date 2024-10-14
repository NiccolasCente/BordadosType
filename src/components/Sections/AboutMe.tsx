import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutMe.css";
import '../../assets/GlobalStyles.css';
import AboutFoto from "../../assets/Sections/AboutMe/About-foto.png";

const AboutMe: React.FC = () => {
  return (
    <section id="section-about">
      <Container>
        <Row className="align-items-center"> 
          <Col md={6}> 
            <div>
              <img
                src={AboutFoto}
                alt="Foto About"
                id="img-fluid-about"
              />
            </div>
          </Col>
          <Col md={6}> 
            <div>
              <h2 style={{fontSize: '3em'}}>Quem Sou EU?</h2>
              <p>
                Olá, me chamo Miriam Rosa, tenho 67 anos e desde os anos 2000,
                minha paixão são os bordados. <br />
                Porém apenas em 2019 consegui transformar esse meu amor pela arte
                em um trabalho. <br />
                Meus principais produtos são: Bordados, Toalhas e Panos de Prato, e sempre
                com preços acessíveis e com muito amor.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
