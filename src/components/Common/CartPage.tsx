import React from 'react';
import { useCart } from './CartContext'; 
import { ListGroup, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../assets/Common/CartPage.css';

const CartPage: React.FC = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2 className="cart-header">Seu Carrinho</h2>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id} className="cart-item">
                <Link to={`/produtos/${item.id}`}>
                  <Image src={item.image} alt={item.title} className="cart-item-image" />
                </Link>
                <div className="cart-item-details">
                  <Link to={`/produtos/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h5 className="cart-item-title">{item.title}</h5>
                  </Link>
                  <p className="cart-item-price">Preço: R$ {item.price.toFixed(2)}</p>
                  <p className="cart-item-quantity">Quantidade: {item.quantity}</p>
                  <p className="cart-item-stock">Em estoque: {item.stock}</p>
                  <div className="cart-item-buttons">
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
                      disabled={item.quantity >= item.stock}
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
          <h3 className="cart-total">Total: R$ {totalAmount.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default CartPage;
