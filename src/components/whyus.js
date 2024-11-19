import React from "react";

const WhyChooseUs = () => {
    const pageStyle = {
        padding: "20px",
        textAlign: "center",
    };

    const headingStyle = {
        fontSize: "2rem",
        color: "#d0b200",
        marginBottom: "20px",
    };

    const paragraphStyle = {
        fontSize: "1.2rem",
        lineHeight: "1.8",
    };

    return (
        <div style={pageStyle}>
            <h1 style={headingStyle}>Why Choose Us?</h1>
            <p style={paragraphStyle}>
                At Food Munch, we pride ourselves on delivering the highest quality food with unmatched taste and exceptional service. 
                Here’s why you should choose us:
            </p>
            <ul style={{ textAlign: "left", margin: "0 auto", maxWidth: "600px", fontSize: "1.1rem" }}>
                <li>Fresh ingredients sourced daily for unmatched flavor.</li>
                <li>Wide variety of dishes catering to all tastes and preferences.</li>
                <li>Affordable pricing without compromising on quality.</li>
                <li>Fast and reliable delivery to your doorstep.</li>
                <li>Commitment to health and hygiene in every meal we prepare.</li>
            </ul>
        </div>
    );
};

export default WhyChooseUs;
