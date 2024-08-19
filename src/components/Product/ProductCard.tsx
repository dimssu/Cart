import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../Redux/cartSlice';
import './productCard.css';

interface Product {
  product_id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [isInCart, setIsInCart] = React.useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setIsInCart(true);
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.product_id));
    setIsInCart(false);
  };

  return (
    <div className="product-card">
      <img src={product.image_url} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <div className="buttons-container">
        {isInCart ? (
          <button onClick={handleRemoveFromCart} className="remove-button">
            Remove from Cart
          </button>
        ) : (
          <button onClick={handleAddToCart} className="add-button">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
