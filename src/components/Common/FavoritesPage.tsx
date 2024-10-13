import React from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { useFavorites } from './FavoritesContext'; 

const FavoritesPage: React.FC = () => {
  const { favoriteItems, removeFromFavorites } = useFavorites();

  return (
    <Container>
      <h1>Favoritos</h1>
      <Row>
        {favoriteItems.length > 0 ? (
          <Col xs={12}>
            <ListGroup>
              {favoriteItems.map((item) => (
                <ListGroup.Item key={item.id}>
                  <h5>{item.title}</h5>
                  <Button variant="danger" onClick={() => removeFromFavorites(item.id)}>Remover</Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        ) : (
          <Col xs={12}>
            <p>Nenhum item favoritado.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default FavoritesPage;
