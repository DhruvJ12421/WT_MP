import React, { useState } from "react";

const Deserts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalData, setModalData] = useState(null);

  const Deserts = [
    {
      name: "Chocolate Lava Cake",
      image: "https://www.cookingclassy.com/wp-content/uploads/2019/02/molten-lava-cake-500x500.jpg",
      rating: "★★★★★ 3,000 reviews",
      price: "₹180",
      discountPrice: "₹225",
      discount: "(20% off)",
    },
    {
      name: "Gulab Jamun",
      image: "https://www.funfoodfrolic.com/wp-content/uploads/2021/03/Gulab-Jamun-1-500x500.jpg",
      rating: "★★★★★ 4,500 reviews",
      price: "₹120",
      discountPrice: "₹150",
      discount: "(20% off)",
    },
    {
      name: "Cheesecake",
      image: "https://bakingamoment.com/wp-content/uploads/2020/02/cheesecake-recipe-3-500x500.jpg",
      rating: "★★★★☆ 2,200 reviews",
      price: "₹250",
      discountPrice: "₹300",
      discount: "(17% off)",
    },
    {
      name: "Rasgulla",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/10/rasgulla-500x500.jpg",
      rating: "★★★★★ 3,200 reviews",
      price: "₹110",
      discountPrice: "₹140",
      discount: "(21% off)",
    },
    {
      name: "Tiramisu",
      image: "https://www.simplyrecipes.com/thmb/WQa3FiYvs09bGVicqBa92rt_kkg=/2000x1500/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Tiramisu-LEAD-10-a0a26d46c021499396ebbc3c550ef354.jpg",
      rating: "★★★★☆ 1,800 reviews",
      price: "₹300",
      discountPrice: "₹375",
      discount: "(20% off)",
    },
    {
      name: "Kulfi",
      image: "https://static.toiimg.com/photo/52467135.cms",
      rating: "★★★★★ 3,500 reviews",
      price: "₹90",
      discountPrice: "₹120",
      discount: "(25% off)",
    },
    {
      name: "Apple Pie",
      image: "https://www.cookingclassy.com/wp-content/uploads/2020/11/apple-pie-5-500x500.jpg",
      rating: "★★★★★ 2,100 reviews",
      price: "₹200",
      discountPrice: "₹250",
      discount: "(20% off)",
    },
    {
      name: "Carrot Halwa",
      image: "https://www.funfoodfrolic.com/wp-content/uploads/2021/03/Gajar-Halwa-500x500.jpg",
      rating: "★★★★★ 4,000 reviews",
      price: "₹140",
      discountPrice: "₹175",
      discount: "(20% off)",
    },
    {
      name: "Macarons",
      image: "https://tatyanaseverydayfood.com/wp-content/uploads/2020/02/Strawberry-Macarons.jpg",
      rating: "★★★★☆ 1,500 reviews",
      price: "₹200",
      discountPrice: "₹250",
      discount: "(20% off)",
    },
    {
      name: "Brownie",
      image: "https://images.squarespace-cdn.com/content/v1/57f37b29be6594eeb1f65720/1519861485778-0ZO77IX6C53N4R9GWWJ1/Brownie-500x500.jpg",
      rating: "★★★★★ 2,800 reviews",
      price: "₹150",
      discountPrice: "₹180",
      discount: "(17% off)",
    },
    {
      name: "Shahi Tukda",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/shahi-tukda-500x500.jpg",
      rating: "★★★★★ 2,700 reviews",
      price: "₹180",
      discountPrice: "₹220",
      discount: "(18% off)",
    },
    {
      name: "Panna Cotta",
      image: "https://bakingamoment.com/wp-content/uploads/2018/07/Panna-Cotta-Recipe-square-500x500.jpg",
      rating: "★★★★☆ 1,900 reviews",
      price: "₹280",
      discountPrice: "₹350",
      discount: "(20% off)",
    },
    {
      name: "Kaju Katli",
      image: "https://cdn.cdnparenting.com/articles/2020/05/04135157/Kaju-Katli-Recipe-for-Kids.jpg",
      rating: "★★★★★ 3,500 reviews",
      price: "₹160",
      discountPrice: "₹200",
      discount: "(20% off)",
    },
    {
      name: "Donut",
      image: "https://static.toiimg.com/photo/52467135.cms",
      rating: "★★★★★ 2,000 reviews",
      price: "₹100",
      discountPrice: "₹120",
      discount: "(17% off)",
    },
    {
      name: "Baklava",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Baklava_500x500.jpg",
      rating: "★★★★★ 2,600 reviews",
      price: "₹350",
      discountPrice: "₹420",
      discount: "(16% off)",
    },
    {
      name: "Rabri",
      image: "https://img-global.cpcdn.com/recipes/140ea38838b70e47/680x482cq70/photo.jpg",
      rating: "★★★★★ 2,100 reviews",
      price: "₹160",
      discountPrice: "₹200",
      discount: "(20% off)",
    },
    {
      name: "Mango Mousse",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/03/mango-mousse-500x500.jpg",
      rating: "★★★★☆ 1,800 reviews",
      price: "₹200",
      discountPrice: "₹250",
      discount: "(20% off)",
    },
    {
      name: "Ice Cream Sundae",
      image: "https://static.toiimg.com/photo/52467135.cms",
      rating: "★★★★★ 3,000 reviews",
      price: "₹150",
      discountPrice: "₹180",
      discount: "(17% off)",
    },
    {
      name: "Custard Tart",
      image: "https://www.simplyrecipes.com/thmb/K-UCAXXAwhkrBqEwPeZZBNjjCeA=/2000x1500/filters:no_upscale():max_bytes(150000):strip_icc()/custard-tart.jpg",
      rating: "★★★★☆ 1,200 reviews",
      price: "₹250",
      discountPrice: "₹300",
      discount: "(16% off)",
    },
    {
      name: "Soufflé",
      image: "https://cdn.cnn.com/cnnnext/dam/assets/200512150123-beer-braised-chicken-split-super-169.jpg",
      rating: "★★★★★ 1,800 reviews",
      price: "₹280",
      discountPrice: "₹350",
      discount: "(20% off)",
    },
    {
      name: "Eclairs",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Eclair.jpg",
      rating: "★★★★★ 1,600 reviews",
      price: "₹180",
      discountPrice: "₹220",
      discount: "(18% off)",
    },
    {
      name: "Phirni",
      image: "https://static.toiimg.com/photo/52467135.cms",
      rating: "★★★★☆ 1,900 reviews",
      price: "₹160",
      discountPrice: "₹200",
      discount: "(20% off)",
    },
    {
      name: "Banoffee Pie",
      image: "https://bakingamoment.com/wp-content/uploads/2019/11/Banoffee-Pie-square.jpg",
      rating: "★★★★★ 1,300 reviews",
      price: "₹280",
      discountPrice: "₹350",
      discount: "(20% off)",
    },
    {
      name: "Churros",
      image: "https://static.toiimg.com/photo/52467135.cms",
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
