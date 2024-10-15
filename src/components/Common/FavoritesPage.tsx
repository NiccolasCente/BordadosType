import React from 'react';
import { useFavorites } from './FavoritesContext'; 
import { ListGroup, Button, Image } from 'react-bootstrap';

const FavoritesPage: React.FC = () => {
  const { favoriteItems, removeFromFavorites } = useFavorites();

  return (
    <div>
      <h2>Favoritos</h2>
      {favoriteItems.length === 0 ? (
        <p>Você não tem favoritos.</p>
      ) : (
        <>
          <ListGroup>
            {favoriteItems.map((item) => (
              <ListGroup.Item key={item.id} className="d-flex align-items-center">
                <Image src={item.image} alt={item.title} width="100" height="100" />
                <div className="ms-3">
                  <h5>{item.title}</h5>
                  <p>Preço: R$ {item.price.toFixed(2)}</p>
                  <div>
                    <Button
                      variant="danger"
                      onClick={() => removeFromFavorites(item.id)}
                      className="ms-2"
                    >
                      Remover
                    </Button>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )}
    </div>
  );
};

export default FavoritesPage;
