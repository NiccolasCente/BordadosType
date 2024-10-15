import React from 'react';
import { useCart } from './CartContext'; 
import { ListGroup, Button, Image } from 'react-bootstrap';

const CartPage: React.FC = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Seu Carrinho</h2>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id} className="d-flex align-items-center">
                <Image src={item.image} alt={item.title} width="100" height="100" />
                <div className="ms-3">
                  <h5>{item.title}</h5>
                  <p>Preço: R$ {item.price.toFixed(2)}</p>
                  <p>Quantidade: {item.quantity}</p>
                  <div>
                    <Button
                      variant="outline-secondary"
                      onClick={() => decreaseQuantity(item.id)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </Button>
                    <Button
                      variant="outline-secondary"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => removeFromCart(item.id)}
                      className="ms-2"
                    >
                      Remover
                    </Button>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h3 className="mt-4">Total: R$ {totalAmount.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default CartPage;
