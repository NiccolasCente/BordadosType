import React from 'react';
import { Product } from '../interfaces/products';

interface ProductProps {
  product: Product;
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div key={product.id} className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">Price: ${product.price.toFixed(2)}</p>
      <p className="product-category">Category: {product.category}</p> 
      <a href={product.more} className="product-more">More details</a>
    </div>
  );
};

export default ProductCard;
