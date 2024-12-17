import React, { useState } from 'react';

const OrderForm = () => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', { quantity, price });
  };

  return (
    <div className="order-form">
      <h3>Place Order</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Quantity</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-buy">Buy</button>
          <button type="submit" className="btn-sell">Sell</button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;