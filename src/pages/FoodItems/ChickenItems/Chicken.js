import React from "react";
import "./Chicken.css";

const chickenDishes = [
  { 
    name: "Butter Chicken", 
    desc: "Creamy tomato-based curry with tender chicken.", 
    img: process.env.PUBLIC_URL + "/chicken/butter-chicken.jpg" 
  },
  { 
    name: "Chicken Tikka Masala", 
    desc: "Marinated grilled chicken in spiced curry.", 
    img: process.env.PUBLIC_URL + "/chicken/Chicken-tika-masala.jpg" 
  },
  { 
    name: "Chicken Biryani", 
    desc: "Aromatic basmati rice with spiced chicken.", 
    img: process.env.PUBLIC_URL + "/chicken/biriyani.jpg" 
  },
  { 
    name: "Chicken 65", 
    desc: "Spicy deep-fried South Indian chicken.", 
    img: process.env.PUBLIC_URL + "/chicken/chicken-65.jpg" 
  },
  { 
    name: "Tandoori Chicken", 
    desc: "Char-grilled chicken with yogurt marinade.", 
    img: process.env.PUBLIC_URL + "/chicken/tandoori.jpg" 
  },
  { 
    name: "Chicken Korma", 
    desc: "Rich, creamy Mughlai-style curry.", 
    img: process.env.PUBLIC_URL + "/chicken/chicken-korma.jpg" 
  },
  { 
    name: "Chicken Chettinad",
    desc: "Peppery, aromatic South Indian chicken.", 
    img: process.env.PUBLIC_URL + "/chicken/chicken-chetinad.jpg" 
  },
  { 
    name: "Chicken Lollipop", 
    desc: "Fried, spicy chicken drumettes.", 
    img: process.env.PUBLIC_URL + "/chicken/chicken-lollipop.jpg" 
  },
  { 
    name: "Chicken Manchurian", 
    desc: "Indo-Chinese chicken in tangy sauce.", 
    img: process.env.PUBLIC_URL + "/chicken/marchuria.jpg" 
  },
  { 
    name: "Chicken Curry", 
    desc: "Classic home-style chicken curry.", 
    img: process.env.PUBLIC_URL + "/chicken/curry.jpg" 
  },
  { 
    name: "Chicken Pakoda", 
    desc: "Crispy fried chicken fritters.", 
    img: process.env.PUBLIC_URL + "/chicken/pakoda.jpg" 
  },
  { 
    name: "Chicken Shawarma", 
    desc: "Middle Eastern spiced chicken wrap.", 
    img: process.env.PUBLIC_URL + "/chicken/shawarma.jpg" 
  },
  { 
    name: "Chicken Wings", 
    desc: "Spicy, saucy chicken wings.", 
    img: process.env.PUBLIC_URL + "/chicken/wings.jpg" 
  },
  { 
    name: "Chicken Popcorn", 
    desc: "Crispy bite-sized chicken snacks.", 
    img: process.env.PUBLIC_URL + "/chicken/popcorn.jpg" 
  },
  { 
    name: "Chicken Seekh Kebab", 
    desc: "Minced chicken grilled on skewers.", 
    img: process.env.PUBLIC_URL + "/chicken/kebab-receipe.jpg" 
  },
  { 
    name: "Chicken Do Pyaza", 
    desc: "Chicken cooked with lots of onions.", 
    img: process.env.PUBLIC_URL + "/chicken/dopiaza.jpg" 
  },
  { 
    name: "Chicken Kolhapuri", 
    desc: "Spicy Maharashtrian chicken curry.", 
    img: process.env.PUBLIC_URL + "/chicken/kholapuri.jpg" 
  },
  { 
    name: "Chicken Rezala", 
    desc: "Bengali-style aromatic chicken curry.", 
    img: process.env.PUBLIC_URL + "/chicken/rezala.jpg" 
  },
  { 
    name: "Chicken Xacuti", 
    desc: "Goan coconut and poppy seed curry.", 
    img: process.env.PUBLIC_URL + "/chicken/Xacuti.jpg" 
  },
  { 
    name: "Chicken Cafreal", 
    desc: "Goan green masala grilled chicken.", 
    img: process.env.PUBLIC_URL + "/chicken/Cafreal.jpg" 
  },
];

const Chicken = () => (
  <div className="chicken-items-container">
    <h1>Chicken Specials</h1>
    <div className="chicken-grid"> 
      {chickenDishes.map((dish, idx) => (
        <div className="chicken-card" key={idx}>
          <img src={dish.img} alt={dish.name} className="chicken-img" />
          <div className="chicken-info">
            <h2>{dish.name}</h2>
            <p>{dish.desc}</p>
            <button className="add-item-btn" onClick={() => alert(`Added ${dish.name} to cart!`)}>Add Item</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Chicken;
