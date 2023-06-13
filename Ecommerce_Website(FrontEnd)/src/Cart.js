import React from 'react';
import './cartko.css';

const Cart = () => {
  const products = [
    {
      id: 1,
      name: 'Jacket',
      image: 'images/firstproduct.jpg',
      price: 99.99,
      //features: ['Feature 1', 'Feature 2', 'Feature 3'],
      discountedPrice: 103.37,
    },
    {
      id: 2,
      name: 'Shirt',
      image:  'images/fourthproduct.jpg',
      price: 89.8,
      //features: ['Feature 4', 'Feature 5', 'Feature 6'],
      discountedPrice: 57.35,
    },

    {
      id: 3,
      name: 'Headphone',
      image:  'images/secondproduct.jpg',
      price: 144.99,
      //features: ['Feature 4', 'Feature 5', 'Feature 6'],
      discountedPrice: 171.89,
    },

    {
      id: 4,
      name: 'Laptop',
      image:  'images/thirdproduct.jpg',
      price: 166.99,
      //features: ['Feature 4', 'Feature 5', 'Feature 6'],
      discountedPrice: 307.14,
    },

  ];

  return (
    <div className="ecommerce-page">
      <h2 className='nameonly'>Featured Products</h2>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2 className='nameonly'>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>"Introducing our stylish jacket and shoe combo, perfect for any season. Stay fashionable and comfortable with this versatile set."</p>
            <p className="discounted-price">Estimated Price: ${product.discountedPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
