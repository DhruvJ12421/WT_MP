import React, { useState } from "react";

const MainCourse = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalData, setModalData] = useState(null);

  const dishes = [
    // Veg dishes
    {
      name: "Paneer Butter Masala",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/paneer-butter-masala.jpg",
      category: "Veg",
      rating: "★★★★★ 2,500 reviews",
      price: "₹280",
      discountPrice: "₹350",
      discount: "(20% off)",
    },
    {
      name: "Veg Biryani",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/01/veg-biryani-recipe-500x500.jpg",
      category: "Veg",
      rating: "★★★★☆ 1,800 reviews",
      price: "₹250",
      discountPrice: "₹300",
      discount: "(17% off)",
    },
    {
      name: "Dal Makhani",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/06/dal-makhani-500x500.jpg",
      category: "Veg",
      rating: "★★★★★ 3,000 reviews",
      price: "₹200",
      discountPrice: "₹250",
      discount: "(20% off)",
    },
    {
      name: "Aloo Gobi",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/11/aloo-gobi-500x500.jpg",
      category: "Veg",
      rating: "★★★★☆ 1,600 reviews",
      price: "₹180",
      discountPrice: "₹230",
      discount: "(22% off)",
    },
    // Non-veg dishes
    {
      name: "Chicken Tikka Masala",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/01/chicken-tikka-masala-500x500.jpg",
      category: "Non-Veg",
      rating: "★★★★★ 3,800 reviews",
      price: "₹320",
      discountPrice: "₹400",
      discount: "(20% off)",
    },
    {
      name: "Mutton Rogan Josh",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/06/mutton-rogan-josh-500x500.jpg",
      category: "Non-Veg",
      rating: "★★★★★ 2,700 reviews",
      price: "₹420",
      discountPrice: "₹500",
      discount: "(16% off)",
    },
    {
      name: "Fish Curry",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/06/fish-curry-500x500.jpg",
      category: "Non-Veg",
      rating: "★★★★☆ 1,900 reviews",
      price: "₹300",
      discountPrice: "₹360",
      discount: "(17% off)",
    },
    {
      name: "Prawn Masala",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/prawn-masala-500x500.jpg",
      category: "Non-Veg",
      rating: "★★★★☆ 2,100 reviews",
      price: "₹340",
      discountPrice: "₹400",
      discount: "(15% off)",
    },
  ];

  const filteredDishes = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (dish) => {
    setModalData(dish);
  };

  const closeModal = () => {
    setModalData(null);
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

      {/* Dish cards */}
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          padding: "20px",
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        {filteredDishes.map((dish, index) => (
          <div
            key={index}
            className="card"
            onClick={() => openModal(dish)}
            style={{
              width: "18rem",
              margin: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={dish.image}
              alt={dish.name}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div className="item-name" style={{ padding: "10px" }}>
              <h5>{dish.name}</h5>
            </div>
            <div className="rating" style={{ padding: "0 10px" }}>
              {dish.rating}
            </div>
            <div className="price" style={{ padding: "10px" }}>
              {dish.price}{" "}
              <span className="discount" style={{ textDecoration: "line-through", color: "#888" }}>
                {dish.discountPrice}
              </span>{" "}
              <span>{dish.discount}</span>
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
            onClick={(e) => e.stopPropagation()}
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
            <img
              src={modalData.image}
              alt={modalData.name}
              style={{ width: "100%", height: "250px", objectFit: "cover", marginBottom: "20px" }}
            />
            <div className="modal-item-name" style={{ fontSize: "20px", fontWeight: "bold" }}>
              {modalData.name}
            </div>
            <div className="modal-rating" style={{ margin: "10px 0" }}>
              {modalData.rating}
            </div>
            <div className="modal-price" style={{ fontSize: "18px", marginBottom: "10px" }}>
              {modalData.price}
            </div>
            <div className="modal-discount" style={{ fontSize: "16px", color: "#888" }}>
              {modalData.discountPrice}
            </div>
            <button
              className="order-now-modal"
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                marginTop: "20px",
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainCourse;
