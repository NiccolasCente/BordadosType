import React from 'react';
import { Product } from '../interfaces/products';
import '../../assets/GlobalStyles.css';

interface ProductProps {
  product: Product;
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div key={product.id} className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">R${product.price.toFixed(2)}</p>
      </div>
      <div className="products-button">
        <a href={product.more} className="btn-custom">SAIBA MAIS</a>
      </div>
    </div>
  );
};

export default ProductCard;
