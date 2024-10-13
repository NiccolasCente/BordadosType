import React from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { useCart } from './CartContext'; 

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <Container>
      <h1>Carrinho de Compras</h1>
      <Row>
        {cartItems.length > 0 ? (
          <Col xs={12}>
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.id}>
                  <h5>{item.title}</h5>
                  <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remover</Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <h3>Total: R${calculateTotal()}</h3>
          </Col>
        ) : (
          <Col xs={12}>
            <p>Nenhum item no carrinho.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default CartPage;
