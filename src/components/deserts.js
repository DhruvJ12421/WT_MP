import React, { useState } from "react";

const Deserts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalData, setModalData] = useState(null);

  const Deserts = [
    {
      name: "Chocolate Lava Cake",
      image: "https://www.franchisetrade.in/wp-content/uploads/2018/12/choco-lava-cake-500x500.jpg",
      rating: "★★★★★ 3,000 reviews",
      price: "₹180",
      discountPrice: "₹225",
      discount: "(20% off)",
    },
    {
      name: "Gulab Jamun",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2012/11/gulab-jamun-recipe-500x500.jpg",
      rating: "★★★★★ 4,500 reviews",
      price: "₹120",
      discountPrice: "₹150",
      discount: "(20% off)",
    },
    {
      name: "Cheesecake",
      image: "https://www.twentyzcoffee.com/wp-content/uploads/2021/03/Cheesecake-Choco-Caramel-500x500-1.jpg",
      rating: "★★★★☆ 2,200 reviews",
      price: "₹250",
      discountPrice: "₹300",
      discount: "(17% off)",
    },
    {
      name: "Rasgulla",
      image: "https://5.imimg.com/data5/HS/QD/MY-23374418/bengali-sponge-rasgulla-500x500.jpg",
      rating: "★★★★★ 3,200 reviews",
      price: "₹110",
      discountPrice: "₹140",
      discount: "(21% off)",
    },
    {
      name: "Tiramisu",
      image: "https://blooming.com.my/wp-content/uploads/2020/12/signature-tiramisu-01_500x500.jpg",
      rating: "★★★★☆ 1,800 reviews",
      price: "₹300",
      discountPrice: "₹375",
      discount: "(20% off)",
    },
    {
      name: "Kulfi",
      image: "https://5.imimg.com/data5/OM/HX/GE/SELLER-4199470/kesar-pista-kulfi-ice-cream-500x500.jpg",
      rating: "★★★★★ 3,500 reviews",
      price: "₹90",
      discountPrice: "₹120",
      discount: "(25% off)",
    },
    {
      name: "Apple Pie",
      image: "https://www.dorngroup.com/wp-content/uploads/2019/01/pie-500x500.jpg",
      rating: "★★★★★ 2,100 reviews",
      price: "₹200",
      discountPrice: "₹250",
      discount: "(20% off)",
    },
    {
      name: "Red Velvet Brownie",
      image: "https://th.bing.com/th/id/OIP.AOMJRJs0fwahOWc3kCCHOAAAAA?rs=1&pid=ImgDetMain",
      rating: "★★★★★ 4,000 reviews",
      price: "₹140",
      discountPrice: "₹175",
      discount: "(20% off)",
    },
    {
      name: "Macarons",
      image: "https://www.howtocook.recipes/wp-content/uploads/2021/04/Macron-recipe-500x500.jpg",
      rating: "★★★★☆ 1,500 reviews",
      price: "₹200",
      discountPrice: "₹250",
      discount: "(20% off)",
    },
    {
      name: "Walnut Brownie Sundae",
      image: "https://eatingglutenanddairyfree.com/wp-content/uploads/2019/10/EGADFwalnutbrowniesundae3-500x500.jpg",
      rating: "★★★★★ 2,800 reviews",
      price: "₹150",
      discountPrice: "₹180",
      discount: "(17% off)",
    },
    {
      name: "Chocolate Lava Cookie",
      image: "https://th.bing.com/th/id/OIP.6pkxWncm4Nn5S2SFwc2W4gAAAA?rs=1&pid=ImgDetMain",
      rating: "★★★★★ 2,700 reviews",
      price: "₹180",
      discountPrice: "₹220",
      discount: "(18% off)",
    },
    {
      name: "Panna Cotta",
      image: "https://th.bing.com/th/id/OIP.JMixZfNJMLOBYHBlpQbsAQAAAA?rs=1&pid=ImgDetMain",
      rating: "★★★★☆ 1,900 reviews",
      price: "₹280",
      discountPrice: "₹350",
      discount: "(20% off)",
    },
    {
      name: "Kaju Katli",
      image: "https://5.imimg.com/data5/DD/FF/MY-43040286/kaju-katli-500x500.jpg",
      rating: "★★★★★ 3,500 reviews",
      price: "₹160",
      discountPrice: "₹200",
      discount: "(20% off)",
    },
    {
      name: "Donut",
      image: "https://i.pinimg.com/564x/3f/a5/03/3fa50301d01d4026c2213d9365148586--coimbatore-patience.jpg",
      rating: "★★★★★ 2,000 reviews",
      price: "₹100",
      discountPrice: "₹120",
      discount: "(17% off)",
    },
    {
      name: "Baklava",
      image: "https://th.bing.com/th/id/OIP.N65E7p0p29YIdsoY8qILRwHaHa?rs=1&pid=ImgDetMain",
      rating: "★★★★★ 2,600 reviews",
      price: "₹350",
      discountPrice: "₹420",
      discount: "(16% off)",
    },
    {
      name: "Lemon Tart",
      image: "https://th.bing.com/th/id/OIP.qpDunWqY0N9Ty2z3LRgWIgHaHa?rs=1&pid=ImgDetMain",
      rating: "★★★★★ 2,100 reviews",
      price: "₹160",
      discountPrice: "₹200",
      discount: "(20% off)",
    },
    {
      name: "Mango Mousse",
      image: "https://th.bing.com/th/id/OIP.nPI1KCUFGNJJspXGOMHwDAHaHa?rs=1&pid=ImgDetMain",
      rating: "★★★★☆ 1,800 reviews",
      price: "₹200",
      discountPrice: "₹250",
      discount: "(20% off)",
    },
    {
      name: "Ice Cream Sundae",
      image: "https://th.bing.com/th/id/OIP.AixObE6nBoVC6I_eMZYGFgHaHa?rs=1&pid=ImgDetMain",
      rating: "★★★★★ 3,000 reviews",
      price: "₹150",
      discountPrice: "₹180",
      discount: "(17% off)",
    },
    {
      name: "Custard Tart",
      image: "https://th.bing.com/th/id/R.5ed521764df35693bafa4adadc4b9bdd?rik=GtVZTw%2bWNz55JA&riu=http%3a%2f%2fwww.pamperedchef.com%2ficeberg%2fcom%2frecipe%2f39470-lg.jpg&ehk=CTW8vb7fPwWMM25HzjzRUBiWDk8376l7ZA7s3a5MzBU%3d&risl=&pid=ImgRaw&r=0",
      rating: "★★★★☆ 1,200 reviews",
      price: "₹250",
      discountPrice: "₹300",
      discount: "(16% off)",
    },
    {
      name: "Pastry",
      image: "https://th.bing.com/th/id/OIP.lpOoI9xVd6DPhw9U-qjDzAHaHa?rs=1&pid=ImgDetMain",
      rating: "★★★★★ 1,800 reviews",
      price: "₹280",
      discountPrice: "₹350",
      discount: "(20% off)",
    },
    {
      name: "Mocha Eclairs",
      image: "https://www.newworld.co.nz/-/media/Project/Sitecore/Brands/Brand-New-World/Recipes-2022/Mocha-Eclairs-500x500.jpg?h=500&w=500&hash=8A3EDCD17C6B2DCE63BA12483CE577CB",
      rating: "★★★★★ 1,600 reviews",
      price: "₹180",
      discountPrice: "₹220",
      discount: "(18% off)",
    },
    {
      name: "Fruit trifle",
      image: "https://th.bing.com/th/id/OIP.pgZKSKNUCU0uE0wDnLqnxAAAAA?rs=1&pid=ImgDetMain",
      rating: "★★★★☆ 1,900 reviews",
      price: "₹160",
      discountPrice: "₹200",
      discount: "(20% off)",
    },
    {
      name: "Rocky Road Fudge",
      image: "https://th.bing.com/th/id/OIP.TLiAYw_WEKCTFinw2dWo1QHaHa?rs=1&pid=ImgDetMain",
      rating: "★★★★★ 1,300 reviews",
      price: "₹280",
      discountPrice: "₹350",
      discount: "(20% off)",
    },
    {
      name: "Churros",
      image: "https://cheflolaskitchen.com/wp-content/uploads/2023/04/1-2-500x500.jpg",
      rating: "★★★★★ 2,100 reviews",
      price: "₹140",
      discountPrice: "₹175",
      discount: "(20% off)",
    },
  ];
  
  
  const filteredDeserts = Deserts.filter((Deserts) =>
    Deserts.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (Deserts) => {
    setModalData(Deserts);
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

      {/* Deserts cards */}
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
        {filteredDeserts.map((Deserts, index) => (
          <div
            key={index}
            className="card"
            onClick={() => openModal(Deserts)}
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
              src={Deserts.image}
              alt={Deserts.name}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div className="item-name" style={{ padding: "10px" }}>
              <h5>{Deserts.name}</h5>
            </div>
            <div className="rating" style={{ padding: "0 10px" }}>
              {Deserts.rating}
            </div>
            {Deserts.limitedDeal && (
              <div className="limited-deal" style={{ color: "red", fontWeight: "bold", padding: "0 10px" }}>
                Limited time deal
              </div>
            )}
            <div className="price" style={{ padding: "10px" }}>
              {Deserts.price}{" "}
              <span className="discount" style={{ textDecoration: "line-through", color: "#888" }}>
                {Deserts.discountPrice}
              </span>{" "}
              <span>{Deserts.discount}</span>
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

export default Deserts;
