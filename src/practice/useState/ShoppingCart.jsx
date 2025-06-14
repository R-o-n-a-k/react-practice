import React, { useState } from "react";
import Button from "../../components/Button/Button";

const ShoppingCart = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Apple", quantity: 0 },
    { id: 2, name: "Mango", quantity: 0 },
    { id: 3, name: "Banana", quantity: 0 },
  ]);

  const [checkoutSummary, setCheckoutSummary] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalItems = products.reduce((acc, item) => acc + item.quantity, 0);

  const handleDecrement = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((prod) =>
        prod.id === id && prod.quantity > 0
          ? { ...prod, quantity: prod.quantity - 1 }
          : prod
      )
    );
  };

  const handleIncrement = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((prod) =>
        prod.id === id ? { ...prod, quantity: prod.quantity + 1 } : prod
      )
    );
  };

  const removeProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((prod) =>
        prod.id === id ? { ...prod, quantity: 0 } : prod
      )
    );
  };

  const checkout = () => {
    if (totalItems === 0) {
      setCheckoutSummary("Your cart is empty!");
      return;
    }
    const summary = products
      .filter((item) => item.quantity > 0)
      .map((item) => `${item.name} x ${item.quantity}`)
      .join("\n");

    setCheckoutSummary(summary);
    setIsModalOpen(true);
  };

  return (
    <div className="shoppingCart section">
      <h2>Shopping Cart</h2>

      <div className="cart-box">
        <div className="cart-count">🛒: {totalItems} </div>
        {products.map((item) => (
          <div className="cart-product" key={item.id}>
            <p>{item.name}</p>
            <div className="product">
              <div className="quantity">
                <Button
                  size="small"
                  bgColor="gray"
                  onClick={() => handleDecrement(item.id)}
                >
                  -
                </Button>
                <span>{item.quantity}</span>
                <Button
                  size="small"
                  bgColor="gray"
                  onClick={() => handleIncrement(item.id)}
                >
                  +
                </Button>
              </div>

              <Button
                size="small"
                bgColor="tomato"
                onClick={() => removeProduct(item.id)}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
        <br />
        <Button bgColor="darkcyan" onClick={checkout}>
          Checkout
        </Button>
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>Cart Summary</h3>
              <div className="checkout-summary">
                <pre>{checkoutSummary}</pre>
              </div>
              <Button
                size="small"
                onClick={() => {
                  setIsModalOpen(false);
                }}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
