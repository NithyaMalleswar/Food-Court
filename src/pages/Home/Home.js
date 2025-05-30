import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Food items with images directly from public folder
  const foodItems = [
    {
      id: 'chicken',
      title: 'Chicken Items',
      image: '/Homeimages/chicken.jpeg',
      description: 'Juicy, marinated, and perfectly grilled chicken served hot!'
    },
    {
      id: 'salad',
      title: 'Fresh Salads',
      image: '/Homeimages/salad.jpeg',
      description: 'Colorful, crisp, and healthy salads made fresh to order.'
    },
    {
      id: 'pizza',
      title: 'Pizza',
      image: '/Homeimages/pizza.jpeg',
      description: 'Classic Italian pizza with a crispy crust and fresh toppings, baked to perfection.'
    },
    {
      id: 'burger',
      title: 'Burgers',
      image: '/Homeimages/burger.jpeg',
      description: 'Succulent beef or veggie patties, fresh buns, and a variety of tasty toppings.'
    },
    {
      id: 'dessert',
      title: 'Desserts',
      image: '/Homeimages/desserts.jpeg',
      description: 'Delightful desserts to complete your meal with a sweet touch.'
    },
    {
      id: 'icecream',
      title: 'Ice Cream',
      image: '/Homeimages/icecream.jpeg',
      description: 'Creamy, cold, and available in a variety of delicious flavors.'
    }
  ];

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Food Court</h1>
          <p>
            Discover the best grilled delicacies, fresh salads, and mouth-watering desserts. Enjoy our signature dishes made with love and the freshest ingredients. Fast delivery, cozy dine-in, and custom catering available!
          </p>
          <Link to="/menu" className="cta-btn">View Menu</Link>
        </div>
        <div 
          className="hero-image" 
          style={{ backgroundImage: `url('/Homeimages/banner.jpeg')` }}
        ></div>
      </div>
      <div className="features-section">
        <h2>Our Food Items</h2>
        <div className="features-grid">
          {foodItems.map(item => (
            <div className="feature-card" key={item.id}>
              <div 
                className="feature-img" 
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
