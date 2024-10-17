import React from "react";
import { useFavorites } from "./FavoritesContext";
import { ListGroup, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/Common/FavoritesPage.css"

const FavoritesPage: React.FC = () => {
  const { favoriteItems, removeFromFavorites } = useFavorites();

  return (
    <div className="favorites-page">
      <h2 className="favorites-header">Favoritos</h2>
      {favoriteItems.length === 0 ? (
        <p>Você não tem favoritos.</p>
      ) : (
        <ListGroup>
          {favoriteItems.map((item) => (
            <ListGroup.Item key={item.id} className="favorite-item">
              <Link to={`/produtos/${item.id}`}>
                <Image src={item.image} alt={item.title} className="favorite-item-image" />
              </Link>
              <div className="favorite-item-details">
                <Link to={`/produtos/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h5 className="favorite-item-title">{item.title}</h5>
                </Link>
                <p className="favorite-item-price">Preço: R$ {item.price.toFixed(2)}</p>
                <Button
                  variant="danger"
                  onClick={() => removeFromFavorites(item.id)}
                  className="ms-2"
                >
                  Remover
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default FavoritesPage;
