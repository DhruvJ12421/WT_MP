import React, { useState } from "react";

const VegStarters = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalData, setModalData] = useState(null);

  const vegStarters = [
    {
      name: "Paneer Tikka",
      image: "https://www.cookingcurries.com/wp-content/uploads/2017/05/Paneer-Tikka-500x500.jpg",
      rating: "★★★★☆ 1,200 reviews",
      price: "₹250",
      discountPrice: "₹300",
      discount: "(17% off)",
    },
    {
      name: "Veg Spring Roll",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/spring-rolls-with-vegetables-500x500.jpg",
      rating: "★★★★☆ 980 reviews",
      price: "₹150",
      discountPrice: "₹200",
      discount: "(25% off)",
      limitedDeal: true,
    },
    {
        name: "Hara Bhara Kebab",
        image: "https://th.bing.com/th/id/OIP.42w-NV8e6pSKydYmh9T9IgHaHa?rs=1&pid=ImgDetMain",
        rating: "★★★★☆ 1,450 reviews",
        price: "₹180",
        discountPrice: "₹230",
        discount: "(22% off)"
    },
    
    {
        name: "Aloo Tikki",
        image: "https://5.imimg.com/data5/UE/EL/ZL/SELLER-102118220/veg-aloo-tikki-500x500.jpg",
        rating: "★★★★☆ 1,700 reviews",
        price: "₹120",
        discountPrice: "₹150",
        discount: "(20% off)"
    },
    {
        name: "Stuffed Mushrooms",
        image: "https://i0.wp.com/www.sonisfood.com/wp-content/uploads/2014/01/Cabbage-Stuffed-Mushrooms-Indian-Inspired-1.jpg.jpg?w=600&ssl=1",
        rating: "★★★★☆ 1,300 reviews",
        price: "₹220",
        discountPrice: "₹270",
        discount: "(18% off)"
    },
    {
        name: "Gobi Manchurian",
        image: "https://th.bing.com/th/id/OIP.VjFqYUdE4jjieWTfzS29YAAAAA?rs=1&pid=ImgDetMain",
        rating: "★★★★☆ 1,500 reviews",
        price: "₹200",
        discountPrice: "₹250",
        discount: "(20% off)"
    },
    {
        name: "Dahi Ke Kebab",
        image: "https://th.bing.com/th/id/OIP.GgKB_-xl2KC2xRyBsUOjrwHaHa?rs=1&pid=ImgDetMain",
        rating: "★★★★★ 2,000 reviews",
        price: "₹210",
        discountPrice: "₹260",
        discount: "(19% off)"
    },
    {
        name: "Veg Nuggets",
        image: "https://www.cookclickndevour.com/wp-content/uploads/2018/09/veg-nuggets-recipe-500x500.jpg",
        rating: "★★★★☆ 1,800 reviews",
        price: "₹190",
        discountPrice: "₹240",
        discount: "(21% off)"
    },
    {
        name: "Crispy Baby Corn",
        image: "https://cdn2.foodviva.com/static-content/food-images/chinese-recipes/baby-corn-manchurian/baby-corn-manchurian.jpg",
        rating: "★★★★☆ 1,600 reviews",
        price: "₹180",
        discountPrice: "₹220",
        discount: "(18% off)"
    },
    {
        name: "Paneer Chilli",
        image: "https://th.bing.com/th/id/OIP.a5RQzcwWexK54r31pyCooAHaHa?rs=1&pid=ImgDetMain",
        rating: "★★★★☆ 1,450 reviews",
        price: "₹200",
        discountPrice: "₹250",
        discount: "(20% off)"
    },
    {
        name: "Veg Momos",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/1/OR/RN/UN/181260458/mix-veg-mo-500x500.jpg",
        rating: "★★★★☆ 900 reviews",
        price: "₹240",
        discountPrice: "₹300",
        discount: "(20% off)"
    },
    {
        name: "Veg Manchurian",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2012/05/veg-manchurian-gravy-recipe-1b-500x500.jpg",
        rating: "★★★★☆ 1,350 reviews",
        price: "₹170",
        discountPrice: "₹210",
        discount: "(19% off)"
    },
    {
        name: "Cheese Garlic Bread",
        image: "https://5.imimg.com/data5/TK/QY/GLADMIN-8130751/cheese-garlic-bread-500x500.png",
        rating: "★★★★☆ 1,100 reviews",
        price: "₹140",
        discountPrice: "₹180",
        discount: "(22% off)"
    },
    {
        name: "Masala Papad",
        image: "https://profusioncurry.com/wp-content/uploads/2021/09/Masala-papad-recipe-close-up-showing-delicious-appetizer-snack-500x500.jpg",
        rating: "★★★★☆ 1,200 reviews",
        price: "₹220",
        discountPrice: "₹270",
        discount: "(18% off)"
    },
    {
        name: "Spinach Cheese Balls",
        image: "https://lh3.googleusercontent.com/pSHSNwUPZihxa0t-etVKfZC7lOWXgHHOsboWIrS7vcnLzfFs_qqpulKce0xiLBVlf8S2gRtJBJsecXW2l5VHYLNxLHiiGKx4UqcEJOU7",
        rating: "★★★★☆ 1,000 reviews",
        price: "₹210",
        discountPrice: "₹260",
        discount: "(19% off)"
    },
    {
        name: "Chana Chaat",
        image: "https://th.bing.com/th/id/OIP.P7fiPxOL7Sbb0W00ghsozwAAAA?rs=1&pid=ImgDetMain",
        rating: "★★★★☆ 1,800 reviews",
        price: "₹120",
        discountPrice: "₹150",
        discount: "(20% off)"
    },
    {
        name: "Veg Shami Kebab",
        image: "https://th.bing.com/th/id/OIP.6p9eo997ynlvjTy3mssV2AAAAA?rs=1&pid=ImgDetMain",
        rating: "★★★★☆ 1,300 reviews",
        price: "₹200",
        discountPrice: "₹250",
        discount: "(20% off)"
    },
    {
        name: "Onion Pakora",
        image: "https://cdn3.foodviva.com/static-content/food-images/snacks-recipes/onion-pakoda/onion-pakoda.jpg",
        rating: "★★★★☆ 1,600 reviews",
        price: "₹130",
        discountPrice: "₹160",
        discount: "(19% off)"
    },
    {
        name: "Veg Samosa",
        image: "https://5.imimg.com/data5/SELLER/Default/2021/9/US/TP/UT/19736347/veg-punjabi-samosa-500x500.jpg",
        rating: "★★★★☆ 2,100 reviews",
        price: "₹60",
        discountPrice: "₹80",
        discount: "(25% off)",
        limitedDeal: true
    },
    {
        name: "Vegetable Cutlet",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/08/snacks-recipes-1-500x500.jpg",
        rating: "★★★★☆ 1,400 reviews",
        price: "₹140",
        discountPrice: "₹180",
        discount: "(22% off)"
    }
  ];

  const filteredStarters = vegStarters.filter((starter) =>
    starter.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (starter) => {
    setModalData(starter);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "white",margin: "0", padding: "0", display: "flex", flexDirection: "column" }}>
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

      {/* Veg Starters cards */}
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
        {filteredStarters.map((starter, index) => (
          <div
            key={index}
            className="card"
            onClick={() => openModal(starter)}
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
            <img
              src={starter.image}
              alt={starter.name}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div className="item-name" style={{ padding: "10px" }}>
              <h5>{starter.name}</h5>
            </div>
            <div className="rating" style={{ padding: "0 10px" }}>
              {starter.rating}
            </div>
            {starter.limitedDeal && (
              <div className="limited-deal" style={{ color: "red", fontWeight: "bold", padding: "0 10px" }}>
                Limited time deal
              </div>
            )}
            <div className="price" style={{ padding: "10px" }}>
              {starter.price}{" "}
              <span className="discount" style={{ textDecoration: "line-through", color: "#888" }}>
                {starter.discountPrice}
              </span>{" "}
              <span>{starter.discount}</span>
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

export default VegStarters;
