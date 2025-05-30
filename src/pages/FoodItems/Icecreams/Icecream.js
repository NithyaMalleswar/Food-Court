import React from "react";
import "./Icecream.css";


const icecreamItems = [
  { name: "Vanilla Dream", 
    desc: "Classic creamy vanilla ice cream.", 
    className: "vanilla-dream",
    img: "/Icecream/Vanilla.jpg"
  },
  { name: "Chocolate Fudge", 
    desc: "Rich chocolate ice cream with fudge swirls.", 
    className: "chocolate-fudge",
    img: "/Icecream/Chocolate.jpg"
  },
  { name: "Strawberry Swirl", 
    desc: "Fresh strawberry ice cream with real fruit.", 
    className: "strawberry-swirl",
    img: "/Icecream/Strawberry.jpg"
  },
  { name: "Mango Delight", 
    desc: "Tropical mango ice cream, sweet and tangy.", 
    className: "mango-delight",
    img: "/Icecream/Mango-Delight.jpg"
  },
  { name: "Butterscotch Bliss",
    desc: "Butterscotch ice cream with crunchy bits.", 
    className: "butterscotch-bliss",
    img: "/Icecream/Butterscotch.jpg"
  },
  { name: "Cookie & Cream", 
    desc: "Cookies blended in creamy vanilla ice cream.", 
    className: "cookie-cream",
    img: "/Icecream/Cookie.jpg"
  },
  { name: "Pistachio Magic", 
    desc: "Nutty pistachio ice cream with real nuts.", 
    className: "pistachio-magic",
    img: "/Icecream/Pistachio.jpg"
  },
  { name: "Black Currant", 
    desc: "Tangy black currant ice cream.", 
    className: "black-currant",
    img: "/Icecream/Black.jpg"
  },
];

const Icecream = () => (
  <div className="icecream-items-container">
    <h1>Ice Creams</h1>
    <div className="icecream-grid">
      {icecreamItems.map((item, idx) => (
        <div className={`icecream-card ${item.className}`} key={idx}>
          <div className="icecream-img">
  <img src={item.img} alt={item.name} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}} />
</div>
          <div className="icecream-info">
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
            <button className="add-item-btn" onClick={() => alert(`Added ${item.name} to cart!`)}>Add Item</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Icecream;
