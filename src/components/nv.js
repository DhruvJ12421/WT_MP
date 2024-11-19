import React, { useState } from "react";

const NonVegStarters = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalData, setModalData] = useState(null);

  const NonvegStarters = [
    {
      name: "Chicken Tikka",
      image: "https://ashoka-tandoor.com/wp-content/uploads/2021/10/Chicken-Tikka-2-3-500x500-1.jpg",
      rating: "★★★★★ 2,000 reviews",
      price: "₹280",
      discountPrice: "₹350",
      discount: "(20% off)",
    },
    {
      name: "Fish Fingers",
      image: "https://5.imimg.com/data5/XV/CS/MY-40402459/fish-fingers-500x500.jpg",
      rating: "★★★★★ 1,500 reviews",
      price: "₹240",
      discountPrice: "₹300",
      discount: "(20% off)",
    },
    {
      name: "Prawn Tempura",
      image: "https://th.bing.com/th/id/OIP.zZuD-HkBRbTjy4krBPwSqgHaHa?w=500&h=500&rs=1&pid=ImgDetMain",
      rating: "★★★★☆ 1,200 reviews",
      price: "₹320",
      discountPrice: "₹400",
      discount: "(20% off)",
    },
    {
      name: "Chicken Lollipop",
      image: "https://5.imimg.com/data5/KL/BL/MY-2/chicken-lollipop-500x500.jpg",
      rating: "★★★★★ 2,300 reviews",
      price: "₹260",
      discountPrice: "₹325",
      discount: "(20% off)",
    },
    {
      name: "Mutton Seekh Kebab",
      image: "https://th.bing.com/th/id/OIP.mrvWVMmcc0enJ7czg5WaVgHaHa?rs=1&pid=ImgDetMains",
      rating: "★★★★★ 1,800 reviews",
      price: "₹350",
      discountPrice: "₹420",
      discount: "(17% off)",
    },
    {
      name: "Tandoori Prawns",
      image: "https://th.bing.com/th/id/OIP.JgXOi1iC0ClKJcs-EHXvogHaHa?rs=1&pid=ImgDetMain",
      rating: "★★★★☆ 1,000 reviews",
      price: "₹300",
      discountPrice: "₹380",
      discount: "(21% off)",
    },
    {
      name: "Chicken Shawarma",
      image: "https://carlsbadcravings.com/wp-content/uploads/2020/03/Chicken-Shawarma-v13-500x500.jpg",
      rating: "★★★★★ 2,500 reviews",
      price: "₹150",
      discountPrice: "₹180",
      discount: "(17% off)",
    },
    {
      name: "Lemon Pepper Fish",
      image: "https://th.bing.com/th/id/OIP.C027wKN1AzXfTK0g5QkI3wHaHa?rs=1&pid=ImgDetMain",
      rating: "★★★★☆ 1,200 reviews",
      price: "₹280",
      discountPrice: "₹340",
      discount: "(18% off)",
    },
    {
      name: "Mutton Shami Kebab",
      image: "https://th.bing.com/th/id/R.28f1faf9323e32dc915543ae2bd120ca?rik=R9oYYjH4PPCFJQ&riu=http%3a%2f%2fthekebabsmith.com%2fcdn%2fshop%2fproducts%2fmutton-shami-kebab-01.jpg%3fv%3d1649902815&ehk=hhTN4Wx4YIWbvwV83tZFi2fHBzWWkSQ0xeqfRkJ9IF0%3d&risl=&pid=ImgRaw&r=0",
      rating: "★★★★☆ 900 reviews",
      price: "₹300",
      discountPrice: "₹360",
      discount: "(16% off)",
    },
    {
      name: "Crispy Fried Chicken",
      image: "https://th.bing.com/th/id/OIP.W308Xxol62bkWR7sL_As8AHaHa?rs=1&pid=ImgDetMain",
      rating: "★★★★★ 2,800 reviews",
      price: "₹240",
      discountPrice: "₹300",
      discount: "(20% off)",
    },
    {
      name: "Tandoori Chicken",
      image: "https://www.corriecooks.com/wp-content/uploads/2023/08/Chicken-Tandoori-500x500.jpg",
      rating: "★★★★★ 3,000 reviews",
      price: "₹300",
      discountPrice: "₹380",
      discount: "(21% off)",
    },
    {
      name: "Mutton Cutlets",
      image: "https://th.bing.com/th/id/OIP.ay2VDHYsKFVZ71N4GgN24wHaGc?rs=1&pid=ImgDetMain",
      rating: "★★★★☆ 1,300 reviews",
      price: "₹280",
      discountPrice: "₹340",
      discount: "(18% off)",
    },
    {
      name: "Chicken Nuggets",
      image: "https://4.imimg.com/data4/JE/NF/MY-30221892/chicken-nugget-500x500.jpg",
      rating: "★★★★★ 1,700 reviews",
      price: "₹200",
      discountPrice: "₹240",
      discount: "(17% off)",
    },
    {
      name: "Spicy Grilled Fish",
      image: "https://www.hungryhuy.com/wp-content/uploads/bbq-fish-closeup-500x500.jpg",
      rating: "★★★★☆ 1,400 reviews",
      price: "₹350",
      discountPrice: "₹420",
      discount: "(16% off)",
    },
    {
      name: "Malai Tikka",
      image: "https://5.imimg.com/data5/WO/TA/MY-12245920/chicken-malai-tikka-500x500.jpg",
      rating: "★★★★☆ 1,100 reviews",
      price: "₹300",
      discountPrice: "₹350",
      discount: "(14% off)",
    },
    {
      name: "Chicken Tenders",
      image: "https://insanelygoodrecipes.com/wp-content/uploads/2023/08/Homemade-Chicken-Tenders-with-Vegetables-and-Dips-500x500.jpg",
      rating: "★★★★★ 1,800 reviews",
      price: "₹280",
      discountPrice: "₹350",
      discount: "(20% off)",
    },
    {
      name: "Chicken Popcorn",
      image: "https://carlsbadcravings.com/wp-content/uploads/2020/04/Popcorn-Chicken-v3-500x500.jpg",
      rating: "★★★★★ 1,400 reviews",
      price: "₹200",
      discountPrice: "₹250",
      discount: "(20% off)",
    },
    {
      name: "Chicken Spring Rolls",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/1/YM/QN/QH/181260458/frozen-cheese-chilli-spring-roll-500x500.jpg",
      rating: "★★★★☆ 900 reviews",
      price: "₹250",
      discountPrice: "₹300",
      discount: "(16% off)",
    },
    {
      name: "Chicken Pakora",
      image: "https://www.cubesnjuliennes.com/wp-content/uploads/2019/05/Homemade-Chicken-Pakora-Recipe-500x500.jpg",
      rating: "★★★★★ 2,500 reviews",
      price: "₹450",
      discountPrice: "₹550",
      discount: "(18% off)",
    },
    {
      name: "Stuffed Chicken Mushroom",
      image: "https://i.pinimg.com/originals/b3/f0/bf/b3f0bff49772e3446754face91d21605.jpg",
      rating: "★★★★☆ 800 reviews",
      price: "₹190",
      discountPrice: "₹250",
      discount: "(24% off)",
    },
    {
      name: "Chicken Satay",
      image: "https://th.bing.com/th/id/OIP.ZX86F_2c-lo2TclVw825iAAAAA?rs=1&pid=ImgDetMain",
      rating: "★★★★★ 2,000 reviews",
      price: "₹220",
      discountPrice: "₹270",
      discount: "(22% off)",
    },
    {
      name: "Chicken Momos",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/11/WS/AQ/KV/115189402/chicken-momos-500x500.jpg",
      rating: "★★★★★ 2,300 reviews",
      price: "₹180",
      discountPrice: "₹220",
      discount: "(19% off)",
    },
    {
      name: "Fish Pakora",
      image: "https://th.bing.com/th/id/OIP.lrQSOZham3g4bGTLklQEHwHaHa?rs=1&pid=ImgDetMain",
      rating: "★★★★☆ 1,600 reviews",
      price: "₹280",
      discountPrice: "₹340",
      discount: "(18% off)",
    },
    {
      name: "Chicken 65",
      image: "https://starofindiami.com/wp-content/uploads/2022/10/Chicken-65.jpg",
      rating: "★★★★☆ 1,100 reviews",
      price: "₹300",
      discountPrice: "₹380",
      discount: "(22% off)",
    },
    {
      name: "Chilli Chicken",
      image: "https://th.bing.com/th/id/OIP.bETOO7xubtLl2VzjdpbmWAHaHa?rs=1&pid=ImgDetMain",
      rating: "★★★★★ 1,900 reviews",
      price: "₹350",
      discountPrice: "₹430",
      discount: "(19% off)",
    },
  ];
  
  const filteredStarters = NonvegStarters.filter((starter) =>
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

      {/* Non-Veg Starters cards */}
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

export default NonVegStarters;
