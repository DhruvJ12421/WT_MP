import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    // Inline styles for 100% height and width
    const containerStyle = {
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    };

    const bannerSectionStyle = {
        backgroundImage: 'url("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/foodmunch-banner-bg.png")',
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const txtStyle = {
        textAlign: 'center',
        color: 'white',
    };

    const buttonStyle1 = {
        backgroundColor: '#d0b200',
        color: 'white',
        borderWidth: 0,
        height: '40px',
        width: '120px',
        fontSize: '15px',
        marginRight: '10px',
    };

    const buttonStyle2 = {
        backgroundColor: 'transparent',
        color: '#d0b200',
        borderWidth: '1px',
        height: '40px',
        width: '120px',
        fontSize: '15px',
        marginRight: '10px',
        borderStyle: 'solid',
        borderColor: '#d0b200',
    };


const Navbar = () => {
    return (
        <nav>
            {/* Other Navbar items */}
            <Link to="/menu" className="btn btn-primary">Explore Menu</Link>
        </nav>
    );
};


    return (
        <div style={containerStyle}>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img
                            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png"
                            className="logo"
                            alt="Food Munch Logo"
                            style={{ height: '70px', width: '80px' }}
                        />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ width: '100%' }}>
                        <div className="navbar-nav ml-auto" style={{ textAlign: 'right', width: '100%' }}>
                        <Link to="/whychooseus" className="nav-link active" id="navitems">
                            Why Choose Us....?
                        </Link>

                            <a className="nav-link" href="Menu" id="navitems">
                                Explore Menu
                            </a>
                            <a className="nav-link" href="#section-delivery-payment" id="navitems">
                                Delivery and payments
                            </a>
                            <Link to="/FollowUs" className="nav-link" id="navitems">Follow Us</Link>
                        </div>
                    </div>

                </div>
            </nav>

            {/* Banner Section */}
            <div style={bannerSectionStyle}>
                <div style={txtStyle}>
                    <h1 className="banner-heading mb-3">Get Delicious food anytime</h1>
                    <p className="banner-para mb-4">Eat Smart & Healthy</p>
                    <Link to="/menu">
                        <button style={buttonStyle1}>View Menu</button>
                    </Link>
                    <Link to="/login">
                        <button style={buttonStyle2}>Order now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
