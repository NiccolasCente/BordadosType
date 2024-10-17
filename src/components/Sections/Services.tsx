import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";

const Services: React.FC = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col>
            <h2>Nossos Serviços</h2>
            <p>
              No nosso e-commerce, oferecemos uma variedade de produtos e serviços
              personalizados para atender às suas necessidades de bordado e enxoval.
              Confira abaixo nossos principais serviços:
            </p>
            <ul>
              <li>
                <strong>Bordados Personalizados:</strong> Bordamos toalhas, panos de
                prato, e outros itens com seu nome, iniciais ou desenhos especiais,
                perfeitos para presentes ou para adicionar um toque único ao seu
                lar.
              </li>
              <li>
                <strong>Toalhas de Banho e Rosto:</strong> Oferecemos toalhas de alta
                qualidade, disponíveis em vários tamanhos e cores, com opção de
                personalização através de bordados.
              </li>
              <li>
                <strong>Panos de Prato Decorativos:</strong> Além da utilidade diária,
                nossos panos de prato também podem ser bordados e decorados com
                temas sazonais ou personalizados para ocasiões especiais.
              </li>
              <li>
                <strong>Conjuntos de Presente:</strong> Montamos conjuntos exclusivos
                com toalhas e panos de prato bordados, perfeitos para presentes de
                casamento, chá de cozinha e outras celebrações.
              </li>
            </ul>
            <p>
              Todos os nossos produtos são feitos com materiais de alta qualidade e
              atenção aos detalhes, garantindo a durabilidade e beleza que você
              merece. Entre em contato conosco para criar suas peças personalizadas!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
