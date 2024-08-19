import React, { useEffect, useState } from 'react';
import './products.css';
import ProductCard from '../Product/ProductCard';

interface Product {
  product_id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="products-grid">
      {products.map(product => (
        <ProductCard key={product.product_id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
