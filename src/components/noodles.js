import React, { useState } from "react";

const Noodles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalData, setModalData] = useState(null);

    const noodles = [
        // Veg Noodles
        {
            name: "Vegetable Hakka Noodles",
            image: "https://myfoodstory.com/wp-content/uploads/2021/02/Vegetable-Hakka-Noodles-Restaurant-Style-3-500x500.jpg",
            rating: "★★★★★ 5,800 reviews",
            price: "₹180",
            discountPrice: "₹220",
            discount: "(18% off)",
          },
          {
            name: "Gobi Noodles",
            image: "https://sinfullyspicy.com/wp-content/uploads/2022/04/1200-by-1200-images-2-500x500.jpg",
            rating: "★★★★☆ 4,200 reviews",
            price: "₹200",
            discountPrice: "₹240",
            discount: "(17% off)",
          },
          {
            name: "Mushroom Noodles",
            image: "https://therecipecritic.com/wp-content/uploads/2018/09/Garlic-Mushroom-Noodles-1-500x500.jpg",
            rating: "★★★★★ 4,100 reviews",
            price: "₹220",
            discountPrice: "₹260",
            discount: "(15% off)",
          },
          {
            name: "Schezwan Veg Noodles",
            image: "https://www.cookwithmanali.com/wp-content/uploads/2021/08/Schezwan-Noodles-500x500.jpg",
            rating: "★★★★☆ 4,200 reviews",
            price: "₹200",
            discountPrice: "₹250",
            discount: "(20% off)",
          },
          {
            name: "Chilli Garlic Veg Noodles",
            image: "https://www.whiskaffair.com/wp-content/uploads/2020/02/Chilli-Garlic-Noodles-2-3-500x500.jpg",
            rating: "★★★★★ 3,900 reviews",
            price: "₹220",
            discountPrice: "₹260",
            discount: "(15% off)",
          },
          {
            name: "Veg Pad Thai",
            image: "https://ministryofcurry.com/wp-content/uploads/2021/01/Pad-Thai_-1-500x500.jpg",
            rating: "★★★★★ 4,600 reviews",
            price: "₹300",
            discountPrice: "₹350",
            discount: "(14% off)",
          },
          {
            name: "Paneer Noodles",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcWojr2-kNxoHqi7b82S-mVX70qejWOng1Q&s",
            rating: "★★★★★ 4,400 reviews",
            price: "₹250",
            discountPrice: "₹300",
            discount: "(16% off)",
          },
          {
            name: "Sweet Corn Noodles",
            image: "https://www.spicingyourlife.com/wp-content/uploads/2014/06/Sweet-Corn-Vegetable-Noodle-Soup-500x500.jpg",
            rating: "★★★★☆ 3,900 reviews",
            price: "₹190",
            discountPrice: "₹230",
            discount: "(18% off)",
          },
          {
            name: "Veg Kimchi Noodles",
            image: "https://fullofplants.com/wp-content/uploads/2020/06/vegan-kimchi-noodle-soup-spicy-rich-broth-with-tofu-and-mushrooms-thumb-500x500.jpg",
            rating: "★★★★★ 4,500 reviews",
            price: "₹250",
            discountPrice: "₹300",
            discount: "(16% off)",
          },
        // Non-Veg Noodles
        {
          name: "Chicken Hakka Noodles",
          image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Spicy-Chicken-Hakka-Noodles-Recipe-500x500.jpg",
          rating: "★★★★★ 5,100 reviews",
          price: "₹250",
          discountPrice: "₹300",
          discount: "(17% off)",
        },
        {
          name: "Egg Chow Mein",
          image: "https://5.imimg.com/data5/UB/SN/JN/SELLER-99973708/chowmein-500x500.jpeg",
          rating: "★★★★☆ 4,300 reviews",
          price: "₹200",
          discountPrice: "₹250",
          discount: "(20% off)",
        },
        {
          name: "Spicy Garlic Prawn Noodles",
          image: "https://th.bing.com/th/id/OIP.E9zYSowL2U-XtuO70FuhagHaHa?rs=1&pid=ImgDetMain",
          rating: "★★★★★ 4,500 reviews",
          price: "₹280",
          discountPrice: "₹330",
          discount: "(15% off)",
        },
        {
          name: "Teriyaki Salmon Noodles",
          image: "https://th.bing.com/th/id/OIP.KT9nxdpCBIL3QuojZT2lXwAAAA?rs=1&pid=ImgDetMain",
          rating: "★★★★☆ 3,700 reviews",
          price: "₹450",
          discountPrice: "₹500",
          discount: "(10% off)",
        },
        {
          name: "Egg Hakka Noodles",
          image: "https://th.bing.com/th/id/OIP.GV3H0RA07N0xlmcRgEYtgQHaHa?rs=1&pid=ImgDetMain",
          rating: "★★★★★ 4,300 reviews",
          price: "₹200",
          discountPrice: "₹240",
          discount: "(16% off)",
        },
        {
          name: "Shrimp Stir Fry Noodles",
          image: "https://th.bing.com/th/id/OIP.nZmuoJ87vhloyxyi-y2BvgHaHa?rs=1&pid=ImgDetMain",
          rating: "★★★★☆ 3,600 reviews",
          price: "₹350",
          discountPrice: "₹400",
          discount: "(12% off)",
        },
        {
            name: "Singapore Noodles",
            image: "https://www.livinglou.com/wp-content/uploads/2015/10/vegetarian-noodles-singapore-500x500.jpg",
            rating: "★★★★★ 3,800 reviews",
            price: "₹220",
            discountPrice: "₹270",
            discount: "(19% off)",
        },
        {
            name: "Spicy Korean Ramen",
            image: "https://simshomekitchen.com/wp-content/uploads/2024/04/buldak-noodle-500x500.jpg",
            rating: "★★★★☆ 4,200 reviews",
            price: "₹200",
            discountPrice: "₹250",
            discount: "(20% off)",
        },
        
      ];
      
  
  const filterednoodles = noodles.filter((noodles) =>
    noodles.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (noodles) => {
    setModalData(noodles);
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

      {/* noodles cards */}
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
        {filterednoodles.map((noodles, index) => (
          <div
            key={index}
            className="card"
            onClick={() => openModal(noodles)}
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
              src={noodles.image}
              alt={noodles.name}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div className="item-name" style={{ padding: "10px" }}>
              <h5>{noodles.name}</h5>
            </div>
            <div className="rating" style={{ padding: "0 10px" }}>
              {noodles.rating}
            </div>
            {noodles.limitedDeal && (
              <div className="limited-deal" style={{ color: "red", fontWeight: "bold", padding: "0 10px" }}>
                Limited time deal
              </div>
            )}
            <div className="price" style={{ padding: "10px" }}>
              {noodles.price}{" "}
              <span className="discount" style={{ textDecoration: "line-through", color: "#888" }}>
                {noodles.discountPrice}
              </span>{" "}
              <span>{noodles.discount}</span>
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
export default Noodles;
