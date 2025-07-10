import React from "react";
import "./Desserts.css";

const dessertItems = [
  { 
    name: "Chocolate Lava Cake", 
    desc: "Warm chocolate cake with gooey center.", 
    className: "lava-cake", 
    img: process.env.PUBLIC_URL + "/Desserts/chacolate.jpg" 
  },
  { 
    name: "Cheesecake", 
    desc: "Classic creamy cheesecake with a biscuit base.", 
    className: "cheesecake", 
    img: process.env.PUBLIC_URL + "/Desserts/Cheesecake.jpg" 
  },
  { name: "Gulab Jamun", desc: "Soft milk-solid balls soaked in syrup.", className: "gulab-jamun", img: process.env.PUBLIC_URL + "/Desserts/Gulab-Jamun.jpg" },
  { name: "Tiramisu", desc: "Coffee-flavored Italian dessert.", className: "tiramisu", img: process.env.PUBLIC_URL + "/Desserts/Tiramisu.jpg" },
  { name: "Brownie Sundae", desc: "Chocolate brownie topped with ice cream.", className: "brownie-sundae", img: process.env.PUBLIC_URL + "/Desserts/Brownie.jpg" },
  { name: "Fruit Tart", desc: "Buttery crust with custard and fresh fruits.", className: "fruit-tart", img: process.env.PUBLIC_URL + "/Desserts/Fruit.jpg" },
  { name: "Rasmalai", desc: "Soft paneer balls in creamy milk.", className: "rasmalai", img: process.env.PUBLIC_URL + "/Desserts/Rasmalai.jpg" },
  { name: "Ice Cream Trio", desc: "Three scoops of assorted ice cream.", className: "ice-cream-trio", img: process.env.PUBLIC_URL + "/Desserts/Ice.jpg" },
];

const Desserts = () => (
  <div className="dessert-items-container">
    <h1>Desserts</h1>
    <div className="dessert-grid">
      {dessertItems.map((item, idx) => (
        <div className={`dessert-card ${item.className}`} key={idx}>
          <div className="dessert-img">
            <img src={item.img} alt={item.name} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}} />
          </div>
          <div className="dessert-info">
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
            <button className="add-item-btn" onClick={() => alert(`Added ${item.name} to cart!`)}>Add Item</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);


export default Desserts;
