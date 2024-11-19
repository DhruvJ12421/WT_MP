import React, { useState } from "react";

const Seafood = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalData, setModalData] = useState(null);

  const Seafood = [
    {
      name: "Grilled Salmon",
      image: "https://www.simplyrecipes.com/thmb/Z0xj8qEMSCBhgjt6vOBiWsNGDXI=/2000x1500/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Grilled-Salmon-LEAD-03-daa0f041447f4e0db556d87481b43857.jpg",
      rating: "★★★★★ 5,400 reviews",
      price: "₹450",
      discountPrice: "₹500",
      discount: "(10% off)",
    },
    {
      name: "Butter Garlic Prawns",
      image: "https://www.cookingclassy.com/wp-content/uploads/2021/02/garlic-butter-shrimp-10-500x500.jpg",
      rating: "★★★★★ 4,800 reviews",
      price: "₹300",
      discountPrice: "₹350",
      discount: "(14% off)",
    },
    {
      name: "Lobster Bisque",
      image: "https://www.simplyrecipes.com/thmb/1lcOdnbxQdxpEVW7_zEzwxT8Rjc=/2000x1500/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Lobster-Bisque-LEAD-01-574885dd99944fbb897be4288fc8efb7.jpg",
      rating: "★★★★☆ 3,500 reviews",
      price: "₹550",
      discountPrice: "₹600",
      discount: "(8% off)",
    },
    {
      name: "Fish Tacos",
      image: "https://th.bing.com/th/id/R.a928a333f69b5d769c456fdf497003dc?rik=bYL%2bzHv5vIo%2fYA&riu=http%3a%2f%2fwww.pamperedchef.com%2ficeberg%2fcom%2frecipe%2f37226-lg.jpg&ehk=jMfb9O7JHH%2f7ZbBjRMCp3QVzy2q4Vtv7DlKtxRuO0Ec%3d&risl=&pid=ImgRaw&r=0",
      rating: "★★★★★ 3,800 reviews",
      price: "₹200",
      discountPrice: "₹250",
      discount: "(20% off)",
    },
    {
      name: "Crab Cakes",
      image: "https://th.bing.com/th/id/OIP.66a6BvRP4MPK4dauc8fzdwAAAA?rs=1&pid=ImgDetMain",
      rating: "★★★★★ 4,000 reviews",
      price: "₹400",
      discountPrice: "₹450",
      discount: "(11% off)",
    },
    {
      name: "Shrimp Scampi",
      image: "https://www.cookingclassy.com/wp-content/uploads/2019/07/shrimp-scampi-02-500x500.jpg",
      rating: "★★★★★ 4,300 reviews",
      price: "₹350",
      discountPrice: "₹400",
      discount: "(13% off)",
    },
    {
      name: "Seafood Paella",
      image: "https://www.joyceofcooking.com/wp-content/uploads/2019/11/P1400207-500x500.jpg",
      rating: "★★★★☆ 3,200 reviews",
      price: "₹600",
      discountPrice: "₹650",
      discount: "(8% off)",
    },
    {
      name: "Baked Cod",
      image: "https://th.bing.com/th/id/OIP.E1vx37PoiQ8mxCC6d4p0IAAAAA?rs=1&pid=ImgDetMain",
      rating: "★★★★★ 3,900 reviews",
      price: "₹280",
      discountPrice: "₹320",
      discount: "(12% off)",
    },
    {
      name: "Fish and Chips",
      image: "https://th.bing.com/th/id/OIP.SPMk_TJYTpISugupgT0MHwAAAA?rs=1&pid=ImgDetMain",
      rating: "★★★★★ 4,100 reviews",
      price: "₹300",
      discountPrice: "₹350",
      discount: "(14% off)",
    },
    {
      name: "Calamari",
      image: "https://i.redd.it/dqbg672k05ez.jpg",
      rating: "★★★★☆ 2,500 reviews",
      price: "₹280",
      discountPrice: "₹330",
      discount: "(15% off)",
    },
    {
      name: "Shrimp Cocktail",
      image: "https://th.bing.com/th/id/OIP.YQrHfmlnRgaMK2y915HMrgAAAA?rs=1&pid=ImgDetMain",
      rating: "★★★★★ 4,200 reviews",
      price: "₹220",
      discountPrice: "₹270",
      discount: "(19% off)",
    },
    {
      name: "Crab Risotto",
      image: "https://simpleseafoodrecipes.com/wp-content/uploads/2023/03/creamy-crab-risotto-6-1-500x500.jpg",
      rating: "★★★★☆ 2,700 reviews",
      price: "₹450",
      discountPrice: "₹500",
      discount: "(10% off)",
    },
    {
      name: "Stuffed Clams",
      image: "https://honest-food.net/wp-content/uploads/2019/05/stuffed-clams-1-500x500.jpg",
      rating: "★★★★★ 3,200 reviews",
      price: "₹400",
      discountPrice: "₹450",
      discount: "(11% off)",
    },
    {
      name: "Coconut Shrimp",
      image: "https://th.bing.com/th/id/OIP.jeLc9tKuzG_yWWs7HXwNSwHaHa?rs=1&pid=ImgDetMain",
      rating: "★★★★★ 4,300 reviews",
      price: "₹280",
      discountPrice: "₹320",
      discount: "(12% off)",
    },
    {
      name: "Tuna Sashimi",
      image: "https://honest-food.net/wp-content/uploads/2022/08/hamachi-sashimi-recipe-500x500.jpg",
      rating: "★★★★☆ 3,000 reviews",
      price: "₹350",
      discountPrice: "₹400",
      discount: "(13% off)",
    },
    {
      name: "Salmon Teriyaki",
      image: "https://th.bing.com/th/id/OIP.KMU_cGwdpiswvxBtFjAO7QAAAA?rs=1&pid=ImgDetMain",
      rating: "★★★★★ 3,500 reviews",
      price: "₹420",
      discountPrice: "₹470",
      discount: "(11% off)",
    },
  ];
  
  
  
  const filteredSeafood = Seafood.filter((Seafood) =>
    Seafood.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (Seafood) => {
    setModalData(Seafood);
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

      {/* Seafood cards */}
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
        {filteredSeafood.map((Seafood, index) => (
          <div
            key={index}
            className="card"
            onClick={() => openModal(Seafood)}
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
              src={Seafood.image}
              alt={Seafood.name}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div className="item-name" style={{ padding: "10px" }}>
              <h5>{Seafood.name}</h5>
            </div>
            <div className="rating" style={{ padding: "0 10px" }}>
              {Seafood.rating}
            </div>
            {Seafood.limitedDeal && (
              <div className="limited-deal" style={{ color: "red", fontWeight: "bold", padding: "0 10px" }}>
                Limited time deal
              </div>
            )}
            <div className="price" style={{ padding: "10px" }}>
              {Seafood.price}{" "}
              <span className="discount" style={{ textDecoration: "line-through", color: "#888" }}>
                {Seafood.discountPrice}
              </span>{" "}
              <span>{Seafood.discount}</span>
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

export default Seafood;
