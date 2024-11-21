import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = () => {
    const [userName, setUserName] = useState('Guest');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Retrieve the stored name from localStorage
        const storedName = localStorage.getItem('userName');
        if (storedName) {
            setUserName(storedName);
        }
    }, []);

    const handleCardClick = (headingText, link) => {
        localStorage.setItem('headingText', headingText);
        window.location.href = link;
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const menuItems = [
        {
            id: 1,
            title: 'Veg Starters',
            imgSrc: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-veg-starters-img.png',
            link: 'VegStarters',
        },
        {
            id: 2,
            title: 'Non-Veg Starters',
            imgSrc: 'https://imgs.search.brave.com/wF74mFuwbmVXAoJBYoKohGA0COv0Ph2mib6Br081le8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wYW4tY2hpY2tl/bi13aXRoLXZlZ2V0/YWJsZXMtdG9tYXRv/ZXMtaXRfMTE2NTQy/MC0yODIyLmpwZz9z/aXplPTYyNiZleHQ9/anBn',
            link: 'NonVegStarters',
        },
        {
            id: 3,
            title: 'Desserts',
            imgSrc: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-coffee-bourbon-img.png',
            link: 'Deserts',
        },
        {
            id: 4,
            title: 'Soups',
            imgSrc: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-soup-img.png',
            link: 'soups',
        },
        {
            id: 6,
            title: 'Fish N Sea Food',
            imgSrc: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-grilled-seafood-img.png',
            link: 'Seafood',
        },
        {
            id: 7,
            title: 'Main Course',
            imgSrc: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-hyderabadi-biryani-img.png',
            link: 'MainCourse',
        },
        {
            id: 8,
            title: 'Noodles',
            imgSrc: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-mushroom-noodles-img.png',
            link: 'noodles',
        },
        {
            id: 9,
            title: 'Salad',
            imgSrc: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-gluten-img.png',
            link: 'Salads',
        },
       
        {
            id: 10,
            title: 'Ice',
            imgSrc: 'https://imgs.search.brave.com/PcdcrHznm7RMwwlLtLi-XC6-Klbusg_hJhptQZep_7Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8x/MC8zMS8xOC8xNC9k/ZXNzZXJ0LTE3ODYz/MTFfNjQwLmpwZw',
            link: 'IceCreams',
        },
       
        {
            id: 11,
            title: 'Lassi',
            imgSrc: 'https://imgs.search.brave.com/W3LSAxQZJS6NonfebfbPidJaSO8UHbHyM-XHsmX6hB4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9m/L2YxL1NhbHRfbGFz/c2kuanBn',
            link: 'Lassis',
        },
       
    ];

    const filteredItems = menuItems.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div
            style={{
                height: '100vh',
                width: '100vw',
                overflowX: 'hidden',
                display: 'flex',
                padding:"10px",
                flexDirection: 'column',
                backgroundColor: '#f8f9fa',
            }}
        >
            <h1 id="displayName" style={{ textAlign: 'center', padding: '10px' }}>
                Hey welcome {userName}
            </h1>

            {/* Search Box */}
            <div className="container pt-5">
                <input
                    type="text"
                    placeholder="Search menu..."
                    className="form-control mb-3"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>

            <div className="explore-menu pt-5 pb-5" id="section-explore-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-heading text-center">Explore Menu</div>
                        </div>
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item, index) => (
                                <div
                                    className="col-12 col-md-6 col-lg-4"
                                    key={index}
                                    style={{ marginBottom: '20px' }}
                                >
                                    <div
                                        className="card-explore-menu shadow brdr mb-3"
                                        style={{
                                            cursor: 'pointer',
                                            textAlign: 'center',
                                            borderRadius: '10px',
                                            transition: 'transform 0.3s ease',
                                        }}
                                        onMouseEnter={(e) =>
                                            (e.currentTarget.style.transform = 'scale(1.05)')
                                        }
                                        onMouseLeave={(e) =>
                                            (e.currentTarget.style.transform = 'scale(1)')
                                        }
                                        onClick={() => handleCardClick(item.title, item.link)}
                                    >
                                        <img
                                            src={item.imgSrc}
                                            className="image-explore-menu w-100"
                                            alt={item.title}
                                            style={{ borderRadius: '10px 10px 0 0' }}
                                        />
                                        <h1
                                            className="heading-1-menu"
                                            style={{ fontSize: '18px', margin: '10px' }}
                                        >
                                            {item.title}
                                        </h1>
                                        <div className="view-more-link">
                                            View More
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-arrow-right-short"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center">
                                <h3>No items match your search!</h3>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
