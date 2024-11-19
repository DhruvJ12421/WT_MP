import React, { useState } from "react";
import axios from 'axios';

const Soups = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalData, setModalData] = useState(null);
  const [cart, setCart] = useState([]);  // State to track the cart

  const soups = [
    {
      name: "Tomato Soup",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/12/MX/JA/DF/68283200/ching-s-secret-tomato-instant-soup-500x500.jpg",
      rating: "★★★★★ 4,000 reviews",
      price: "₹120",
      discountPrice: "₹150",
      discount: "(20% off)",
    },
    {
      name: "Sweet Corn Soup",
      image: "https://th.bing.com/th/id/OIP.gKQ7RtANoHBf0vFyPrRNIwHaHa?rs=1&pid=ImgDetMain",
      rating: "★★★★★ 3,500 reviews",
      price: "₹130",
      discountPrice: "₹160",
      discount: "(18% off)",
    },
    {
      name: "Hot and Sour Soup",
      image: "https://th.bing.com/th/id/OIP.oA_O2_2Sliyl0YE60HGA2gHaHa?rs=1&pid=ImgDetMain",
      rating: "★★★★☆ 2,800 reviews",
      price: "₹140",
      discountPrice: "₹175",
      discount: "(20% off)",
    },
    {
      name: "Minestrone Soup",
      image: "https://www.savingdessert.com/wp-content/uploads/2016/01/Minestrone-Soup-5-2-500x500.jpg",
      rating: "★★★★★ 3,200 reviews",
      price: "₹150",
      discountPrice: "₹190",
      discount: "(21% off)",
    },
    {
      name: "Chicken Soup",
      image: "https://tastesbetterfromscratch.com/wp-content/uploads/2017/10/Chicken-Noodle-Soup-2-500x500.jpg",
      rating: "★★★★★ 4,500 reviews",
      price: "₹160",
      discountPrice: "₹200",
      discount: "(20% off)",
    },
    {
      name: "Miso Soup",
      image: "https://th.bing.com/th/id/OIP.iUa8a3H8ZWhg34rFnGPjJgHaHa?rs=1&pid=ImgDetMain",
      rating: "★★★★☆ 2,200 reviews",
      price: "₹140",
      discountPrice: "₹175",
      discount: "(20% off)",
    },
    {
      name: "Cream of Mushroom Soup",
      image: "https://4.bp.blogspot.com/-JKrbDdBvmGQ/XCfBTOEBStI/AAAAAAAAE5M/dejnMCp1tNMWiIjCPzjZWokZkr7bB8odwCLcBGAs/s1600/Cream-of-Mushroom-Soup-053-websize-x500.jpg",
      rating: "★★★★★ 2,700 reviews",
      price: "₹130",
      discountPrice: "₹165",
      discount: "(21% off)",
    },
    {
      name: "Vegetable Soup",
      image: "https://gethealthyu.com/wp-content/uploads/2020/04/Detox-Vegetable-Soup-500x500.jpg",
      rating: "★★★★★ 3,800 reviews",
      price: "₹120",
      discountPrice: "₹150",
      discount: "(20% off)",
    },
    {
      name: "Cabbage Soup",
      image: "https://cookingforpeanuts.com/wp-content/uploads/2022/10/best-cabbage-soup-featured-500x500.jpg",
      rating: "★★★★☆ 2,600 reviews",
      price: "₹160",
      discountPrice: "₹200",
      discount: "(20% off)",
    },
    {
      name: "Pumpkin Soup",
      image: "https://thestayathomechef.com/wp-content/uploads/2022/10/Pumpkin-Soup-1-500x500.jpg",
      rating: "★★★★★ 3,000 reviews",
      price: "₹150",
      discountPrice: "₹180",
      discount: "(17% off)",
    },
    {
      name: "Potato and Leek Soup",
      image: "https://th.bing.com/th/id/OIP.Qfi-34PidtdeAIhpfwMgAAAAAA?rs=1&pid=ImgDetMain",
      rating: "★★★★★ 2,800 reviews",
      price: "₹140",
      discountPrice: "₹175",
      discount: "(20% off)",
    },
    {
      name: "Spinach Soup",
      image: "https://www.jennieo.com/wp-content/uploads/2019/11/image-recipe_creamy-spinach-soup.jpg",
      rating: "★★★★☆ 1,900 reviews",
      price: "₹200",
      discountPrice: "₹250",
      discount: "(20% off)",
    },
    {
      name: "French Onion Soup",
      image: "https://www.howtocook.recipes/wp-content/uploads/2020/12/French-onion-soup.jpg",
      rating: "★★★★★ 2,400 reviews",
      price: "₹180",
      discountPrice: "₹220",
      discount: "(18% off)",
    },
    {
      name: "Broccoli Cheddar Soup",
      image: "https://th.bing.com/th/id/OIP.Sr-YYLGNqN3zvBjlsxrX9QAAAA?rs=1&pid=ImgDetMain",
      rating: "★★★★★ 3,300 reviews",
      price: "₹170",
      discountPrice: "₹210",
      discount: "(19% off)",
    },
  ];

  const filteredsoups = soups.filter((soups) =>
    soups.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (soups) => {
    setModalData(soups);
  };

  const closeModal = () => {
    setModalData(null);
  };

  // Function to handle Add to Cart with quantity
  const handleAddToCart = async (soups) => {
    try {
      // Check if the item already exists in the cart
      const itemIndex = cart.findIndex(item => item.name === soups.name);
  
      if (itemIndex !== -1) {
        // Item already in cart, increase quantity
        const updatedCart = [...cart];
        updatedCart[itemIndex].quantity += 1;
        setCart(updatedCart);
      } else {
        // Item not in cart, add with quantity 1
        const updatedCart = [...cart, { ...soups, quantity: 1 }];
        setCart(updatedCart);
      }
  
      // Send only necessary data to the server
      const cartItem = {
        name: soups.name,
        image: soups.image,
        price: soups.price,
        discountPrice: soups.discountPrice,
        discount: soups.discount,
        rating: soups.rating,
        quantity: 1,  // Default to 1, you can update if required
      };
  
      // Optionally send the updated cart data to your backend (if needed)
      await axios.post("http://localhost:3001/cart/add", cartItem);
  
      alert("Item added to cart!");
    } catch (error) {
      console.error("Error adding item to cart", error);
      alert("Failed to add item to cart");
    }
  };
  

  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "white", margin: "0", padding: "0", display: "flex", flexDirection: "column" }}>
      {/* Search bar */}
      <div style={{ padding: "20px", textAlign: "center", flexShrink: 0 }}>
        <input
          type="text"
          placeholder="Search for a dish..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "60%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "16px",
          }}
        />
      </div>

      {/* Soups cards */}
      <div className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", padding: "20px", flexGrow: 1, overflow: "auto" }}>
        {filteredsoups.map((soups, index) => (
          <div
            key={index}
            className="card"
            onClick={() => openModal(soups)}
            style={{
              width: "18rem",
              margin: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <img src={soups.image} alt={soups.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <div className="item-name" style={{ padding: "10px" }}>
              <h5>{soups.name}</h5>
            </div>
            <div className="rating" style={{ padding: "0 10px" }}>
              {soups.rating}
            </div>
            {soups.limitedDeal && (
              <div className="limited-deal" style={{ color: "red", fontWeight: "bold", padding: "0 10px" }}>
                Limited time deal
              </div>
            )}
            <div className="price" style={{ padding: "10px" }}>
              {soups.price}{" "}
              <span className="discount" style={{ textDecoration: "line-through", color: "#888" }}>
                {soups.discountPrice}
              </span>{" "}
              <span>{soups.discount}</span>
            </div>

            {/* Add to Cart Button */}
            <div style={{ padding: "10px", textAlign: "center" }}>
              <button onClick={() => handleAddToCart(soups)} style={{ padding: "10px 20px", backgroundColor: "#28a745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalData && (
        <div
          className="modal"
          onClick={closeModal}
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
              width: "60%",
              maxWidth: "500px",
            }}
          >
            <span
              className="close-btn"
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "20px",
                fontSize: "30px",
                cursor: "pointer",
              }}
            >
             &times;
            </span>
            <img src={modalData.image} alt={modalData.name} style={{ width: "100%", height: "250px", objectFit: "cover", marginBottom: "20px" }} />
            <div className="modal-item-name" style={{ fontSize: "20px", fontWeight: "bold" }}>{modalData.name}</div>
            <div className="modal-rating" style={{ margin: "10px 0" }}>{modalData.rating}</div>
            <div className="modal-price" style={{ fontSize: "18px", marginBottom: "10px" }}>{modalData.price}</div>
            <div className="modal-discount" style={{ fontSize: "16px", color: "#888" }}>{modalData.discountPrice}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Soups;
