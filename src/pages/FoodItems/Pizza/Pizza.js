import React from "react";
import "./Pizza.css";

const pizzaItems = [
  { 
    name: "Margherita", 
    className: "margherita",
    desc: "Classic tomato, mozzarella, and basil.", 
    img: process.env.PUBLIC_URL + "/Pizza/Margherita.jpg" 
  },
  { 
    name: "Pepperoni", 
    className: "pepperoni",
    desc: "Loaded with spicy pepperoni slices.", 
    img: process.env.PUBLIC_URL + "/Pizza/Pepperoni.jpg" 
  },
  { 
    name: "Veggie Supreme", 
    className: "veggie-supreme",
    desc: "Peppers, onions, olives, and mushrooms.", 
    img: process.env.PUBLIC_URL + "/Pizza/Veggie.jpg" 
  },
  { 
    name: "BBQ Chicken", 
    className: "bbq-chicken",
    desc: "Grilled chicken, BBQ sauce, and onions.", 
    img: process.env.PUBLIC_URL + "/Pizza/BBQ Chicken.jpg"  
  },
  { 
    name: "Hawaiian", 
    className: "hawaiian",
    desc: "Ham, pineapple, and mozzarella.", 
    img: process.env.PUBLIC_URL + "/Pizza/Hawaiian.jpg"  
  },
  { 
    name: "Four Cheese", 
    className: "four-cheese",
    desc: "Mozzarella, cheddar, parmesan, and blue cheese.", 
    img: process.env.PUBLIC_URL + "/Pizza/Four Cheese.jpg" 
  },
  { 
    name: "Meat Lovers", 
    className: "meat-lovers",
    desc: "Pepperoni, sausage, ham, and bacon.", 
    img: process.env.PUBLIC_URL + "/Pizza/Meat Lovers.jpg" 
  },
  { 
    name: "Paneer Tikka", 
    className: "paneer-tikka",
    desc: "Indian paneer, peppers, and spices.", 
    img: process.env.PUBLIC_URL + "/Pizza/Paneer Tikka.jpg" 
  },
];

const Pizza = () => (
  <div className="pizza-items-container">
    <h1>Pizzas</h1>
    <div className="pizza-grid">
      {pizzaItems.map((item, idx) => (
        <div className={`pizza-card ${item.className}`} key={idx}>
          <div className="pizza-img">
            <img src={item.img} alt={item.name} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}} />
          </div>
          <div className="pizza-info">
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
            <button className="add-item-btn" onClick={() => alert(`Added ${item.name} to cart!`)}>Add Item</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Pizza;
