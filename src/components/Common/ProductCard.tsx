import React from "react";
import { Product } from '../interfaces/products';
import '../../assets/GlobalStyles.css';
import { useCart } from './CartContext'; 
import { useFavorites } from './FavoritesContext'; 

interface ProductProps {
  product: Product;
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const { addToCart } = useCart(); 
  const { addToFavorites, removeFromFavorites, favoriteItems } = useFavorites();

  // Verifica se o produto já está nos favoritos
  const isFavorited = favoriteItems.some((item) => item.id === product.id);

  return (
    <div key={product.id} className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">       
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">R$ {product.price.toFixed(2)}</p>
      </div>
      <div className="icons-wrapper">
        {isFavorited ? (
          <i 
            className="fas fa-heart-broken" 
            style={{ cursor: 'pointer', marginRight: '10px', color: 'red' }} 
            onClick={() => removeFromFavorites(product.id)} // Remover dos favoritos
          ></i>
        ) : (
          <i 
            className="fas fa-heart" 
            style={{ cursor: 'pointer', marginRight: '10px' }} 
            onClick={() => addToFavorites({ ...product, quantity: 1 })} // Adicionar aos favoritos
          ></i>
        )}
        <i 
          className="fas fa-cart-plus" 
          style={{ cursor: 'pointer' }} 
          onClick={() => addToCart(product)} 
        ></i>
      </div>
      <div className="products-button">
        <a href={product.more} className="btn-custom">SAIBA MAIS</a>
      </div>
    </div>
  );
};

export default ProductCard;
