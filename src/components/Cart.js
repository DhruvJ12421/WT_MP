import React, { useState, useEffect } from "react";
import axios from "axios";

const AddToCartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items from the database when the component mounts
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("http://localhost:3001/cart");
        // Ensure that each item has a quantity field and price is a number
        const updatedCartItems = response.data.map((item) => {
          return {
            ...item,
            quantity: item.quantity || 1, // Default quantity to 1 if not set
            price: parseFloat(item.price.replace("₹", "")) || 0, // Remove ₹ and convert to number
          };
        });
        setCartItems(updatedCartItems); // Update state with fetched cart items
      } catch (error) {
        console.error("Error fetching cart items", error);
      }
    };

    fetchCartItems();
  }, []);

  // Function to handle quantity changes
  const updateQuantity = async (index, increment) => {
    const updatedCart = [...cartItems];
    if (increment) {
      updatedCart[index].quantity += 1;
    } else {
      updatedCart[index].quantity = Math.max(1, updatedCart[index].quantity - 1);
    }

    const updatedItem = updatedCart[index];
    
    try {
      // Update quantity in the backend
      await axios.put(`http://localhost:3001/cart/${updatedItem._id}`, {
        quantity: updatedItem.quantity,
      });

      setCartItems(updatedCart); // Update state with new quantity
    } catch (error) {
      console.error("Error updating quantity", error);
    }
  };

  // Function to calculate total price
  const calculateTotal = () => {
    const total = cartItems.reduce((total, item) => {
      if (isNaN(item.price)) {
        console.error(`Invalid price for item: ${item.name}`);
      }
      return total + item.price * item.quantity; // Calculate total cost
    }, 0);
    return total.toFixed(2); // Fix to two decimal places
  };

  // Function to remove an item from the cart
  const removeItem = async (index) => {
    const itemId = cartItems[index]._id; // Assuming you have an _id field in each cart item
    try {
      // Remove item from the backend
      await axios.delete(`http://localhost:3001/cart/${itemId}`);

      const updatedCart = cartItems.filter((_, i) => i !== index); // Remove item from state
      setCartItems(updatedCart);
    } catch (error) {
      console.error("Error removing item from cart", error);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. Add some items!</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div
              key={item._id} // Use _id as the key for each cart item
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <div style={{ flex: 1, marginLeft: "20px" }}>
                <h4>{item.name}</h4>
                <p>Price: ₹{item.price}</p>
                <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                  <button
                    onClick={() => updateQuantity(index, false)}
                    style={{
                      background: "#ccc",
                      border: "none",
                      borderRadius: "4px",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                  >
                    -
                  </button>
                  <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(index, true)}
                    style={{
                      background: "#28a745",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeItem(index)}
                style={{
                  background: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "5px 10px",
                  cursor: "pointer",
                  marginLeft: "10px",
                }}
              >
                Remove
              </button>
            </div>
          ))}
          <div
            style={{
              marginTop: "20px",
              padding: "10px",
              borderTop: "1px solid #ddd",
              textAlign: "right",
            }}
          >
            <h4>Total: ₹{calculateTotal()}</h4>
            <button
              style={{
                background: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "10px 20px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCartPage;
