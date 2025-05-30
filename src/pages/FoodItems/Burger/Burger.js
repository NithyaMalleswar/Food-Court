import React from "react";
import "./Burger.css";

const burgerItems = [
  { name: "Classic Beef Burger", desc: "Juicy beef patty, lettuce, tomato, and cheese.", className: "classic-beef", img: process.env.PUBLIC_URL + "/burger/Beef-Burger.jpg" },
  { name: "Chicken Burger", desc: "Crispy chicken fillet, mayo, and fresh veggies.", className: "chicken-burger", img: process.env.PUBLIC_URL + "/burger/Hot-Chicken.jpg" },
  { name: "Veggie Burger", desc: "Grilled veggie patty, lettuce, and tomato.", className: "veggie-burger", img: process.env.PUBLIC_URL + "/burger/Veggie-Burger.jpg" },
  { name: "Cheese Burst Burger", desc: "Cheesy patty with molten cheese center.", className: "cheese-burst-burger", img: process.env.PUBLIC_URL + "/burger/Cheese-Burger.jpg" },
  { name: "BBQ Bacon Burger", desc: "Beef, bacon, BBQ sauce, and cheddar.", className: "bbq-bacon", img: process.env.PUBLIC_URL + "/burger/Bacon-Burger.jpg" },
  { name: "Paneer Tikka Burger", desc: "Spicy paneer, onions, and mint chutney.", className: "paneer-tikka-burger", img: process.env.PUBLIC_URL + "/burger/Tikka-Burger.jpg" },
  { name: "Fish Burger", desc: "Crispy fish fillet, lettuce, and tartar sauce.", className: "fish-burger", img: process.env.PUBLIC_URL + "/burger/Fish.jpg" },
  { name: "Spicy Bean Burger", desc: "Spicy bean patty, salsa, and jalapenos.", className: "spicy-bean", img: process.env.PUBLIC_URL + "/burger/Spicy.jpg" },
];

const Burger = () => (
  <div className="burger-items-container">
    <h1>Burgers</h1>
    <div className="burger-grid">
      {burgerItems.map((item, idx) => (
        <div className={`burger-card ${item.className}`} key={idx}>
          <div className="burger-img">
            <img src={item.img} alt={item.name} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}} />
          </div>
          <div className="burger-info">
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
            <button className="add-item-btn" onClick={() => alert(`Added ${item.name} to cart!`)}>Add Item</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Burger;
