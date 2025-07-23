import React from "react";
import "./menu.css";

const menuItems = [
  {
    name: "Burger",
    className: "menu-img-burger",
    desc: "Juicy grilled burger with fresh veggies.",
    price: "$3 - $7",
  },
  {
    name: "Pizza",
    className: "menu-img-pizza",
    desc: "Classic pizza with rich cheese and toppings.",
    price: "$3 - $7",
  },
  {
    name: "Pasta",
    className: "menu-img-pasta",
    desc: "Delicious pasta in savory sauce.",
    price: "$3 - $7",
  },
  {
    name: "Hotdog",
    className: "menu-img-hotdog",
    desc: "Tasty hotdog with your choice of toppings.",
    price: "$3 - $7",
  },
  {
    name: "Chicken",
    className: "menu-img-chicken",
    desc: "Grilled chicken, crispy and flavorful.",
    price: "$3 - $7",
  },
  {
    name: "Sandwich",
    className: "menu-img-sandwich",
    desc: "Fresh sandwich with premium fillings.",
    price: "$3 - $7",
  },
];

const Menu = () => {
  return (
    <div className="menu-main-bg">
      <div className="menu-header">
        <div className="menu-logo">
          <span role="img" aria-label="logo">
            🍔
          </span>
          <span className="menu-logo-text">LOGO</span>
        </div>
        <h2 className="menu-tagline">SPECIAL FOOD</h2>
        <h1 className="menu-title">MENU</h1>
        <p className="menu-desc">
          Please choose what food to order and want. We will serve you
          wholeheartedly.
        </p>
      </div>
      <div className="menu-category-list">
        {/* Chicken Category */}
        <div className="menu-category">
          <div className="menu-category-heading">
            <img
              src="chicken/curry.jpg"
              alt="Chicken"
              className="menu-category-img"
            />
            <h2>Chicken</h2>
          </div>
          <ul className="menu-items-list">
            {[
              { name: "Tandoori Chicken", price: 320 },
              { name: "Butter Chicken", price: 350 },
              { name: "Chicken Biryani", price: 270 },
              { name: "Chicken Tikka", price: 260 },
              { name: "Chicken 65", price: 240 },
              { name: "Kadai Chicken", price: 300 },
              { name: "Chicken Chettinad", price: 310 },
              { name: "Chicken Curry", price: 250 },
              { name: "Chicken Lollipop", price: 220 },
              { name: "Malai Chicken", price: 280 },
              { name: "Chicken Manchurian", price: 260 },
              { name: "Chicken Pakora", price: 180 },
              { name: "Chicken Do Pyaza", price: 290 },
              { name: "Chicken Kolhapuri", price: 310 },
              { name: "Chicken Korma", price: 330 },
              { name: "Chicken Vindaloo", price: 340 },
              { name: "Chicken Handi", price: 320 },
              { name: "Chicken Shashlik", price: 270 },
              { name: "Chicken Sukka", price: 260 },
              { name: "Chicken Rezala", price: 350 },
            ].map((item, i) => (
              <li key={`chicken-${i}`} className="menu-item-row">
                <span>{item.name}</span>
                <span className="menu-item-price">₹{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Salads Category */}
        <div className="menu-category">
          <div className="menu-category-heading">
            <img
              src="salads/Salad.jpg"
              alt="Salads"
              className="menu-category-img"
            />
            <h2>Salads</h2>
          </div>
          <ul className="menu-items-list">
            {[
              { name: "Greek Salad", price: 180 },
              { name: "Caesar Salad", price: 210 },
              { name: "Garden Fresh Salad", price: 160 },
              { name: "Sprout Salad", price: 140 },
              { name: "Paneer Tikka Salad", price: 200 },
              { name: "Corn & Mayo Salad", price: 150 },
              { name: "Fruit Salad", price: 170 },
              { name: "Chickpea Salad", price: 160 },
              { name: "Cucumber Mint Salad", price: 130 },
              { name: "Russian Salad", price: 190 },
              { name: "Pasta Salad", price: 180 },
              { name: "Beetroot Salad", price: 140 },
              { name: "Sprouted Salad", price: 150 },
              { name: "Coleslaw", price: 120 },
              { name: "Mango Avocado Salad", price: 220 },
              { name: "Apple Walnut Salad", price: 210 },
              { name: "Kachumber Salad", price: 110 },
              { name: "Carrot Raisin Salad", price: 130 },
              { name: "Broccoli Almond Salad", price: 200 },
              { name: "Thai Papaya Salad", price: 230 },
            ].map((item, i) => (
              <li key={`salad-${i}`} className="menu-item-row">
                <span>{item.name}</span>
                <span className="menu-item-price">₹{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Pizza Category */}
        <div className="menu-category">
          <div className="menu-category-heading">
            <img
              src="Pizza/Margherita.jpg"
              alt="Pizza"
              className="menu-category-img"
            />
            <h2>Pizza</h2>
          </div>
          <ul className="menu-items-list">
            {[
              { name: "Margherita", price: 260 },
              { name: "Farmhouse", price: 320 },
              { name: "Peppy Paneer", price: 340 },
              { name: "Veggie Paradise", price: 310 },
              { name: "Chicken Tikka Pizza", price: 370 },
              { name: "BBQ Chicken Pizza", price: 390 },
              { name: "Cheese Burst", price: 350 },
              { name: "Mexican Green Wave", price: 330 },
              { name: "Deluxe Veggie", price: 300 },
              { name: "Spicy Triple Tango", price: 340 },
              { name: "Paneer Makhani Pizza", price: 360 },
              { name: "Pepperoni Pizza", price: 420 },
              { name: "Golden Corn Pizza", price: 270 },
              { name: "Veg Extravaganza", price: 350 },
              { name: "Chicken Sausage Pizza", price: 380 },
              { name: "Classic Cheese Pizza", price: 240 },
              { name: "Tandoori Paneer Pizza", price: 340 },
              { name: "Supreme Veg Pizza", price: 320 },
              { name: "Peri Peri Chicken Pizza", price: 400 },
              { name: "Mushroom Pizza", price: 310 },
            ].map((item, i) => (
              <li key={`pizza-${i}`} className="menu-item-row">
                <span>{item.name}</span>
                <span className="menu-item-price">₹{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Burger Category */}
        <div className="menu-category">
          <div className="menu-category-heading">
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=facearea&w=64&q=80"
              alt="Burger"
              className="menu-category-img"
            />
            <h2>Burger</h2>
          </div>
          <ul className="menu-items-list">
            {[
              { name: "Classic Veg Burger", price: 110 },
              { name: "Aloo Tikki Burger", price: 90 },
              { name: "Paneer Burger", price: 130 },
              { name: "Chicken Burger", price: 150 },
              { name: "Cheese Burst Burger", price: 120 },
              { name: "Crispy Chicken Burger", price: 160 },
              { name: "Spicy Bean Burger", price: 115 },
              { name: "Egg Burger", price: 105 },
              { name: "Double Patty Burger", price: 170 },
              { name: "Grilled Chicken Burger", price: 180 },
              { name: "BBQ Chicken Burger", price: 190 },
              { name: "Veggie Delight Burger", price: 125 },
              { name: "Mushroom Burger", price: 140 },
              { name: "Fish Burger", price: 170 },
              { name: "Corn & Cheese Burger", price: 120 },
              { name: "Peri Peri Burger", price: 135 },
              { name: "Schezwan Burger", price: 130 },
              { name: "Chicken crispy Burger", price: 175 },
              { name: "Hara Bhara Burger", price: 110 },
              { name: "Zesty Mayo Burger", price: 115 },
            ].map((item, i) => (
              <li key={`burger-${i}`} className="menu-item-row">
                <span>{item.name}</span>
                <span className="menu-item-price">₹{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Desserts Category */}
        <div className="menu-category">
          <div className="menu-category-heading">
            <img
              src="Desserts/desserts.jpg"
              alt="Desserts"
              className="menu-category-img"
            />
            <h2>Desserts</h2>
          </div>
          <ul className="menu-items-list">
            {[
              { name: "Gulab Jamun", price: 90 },
              { name: "Rasmalai", price: 120 },
              { name: "Jalebi", price: 80 },
              { name: "Kaju Katli", price: 140 },
              { name: "Rasgulla", price: 110 },
              { name: "Kulfi Falooda", price: 130 },
              { name: "Mysore Pak", price: 100 },
              { name: "Moong Dal Halwa", price: 115 },
              { name: "Chocolate Brownie", price: 150 },
              { name: "Cheesecake", price: 170 },
              { name: "Fruit Custard", price: 90 },
              { name: "Rabri", price: 120 },
              { name: "Malpua", price: 110 },
              { name: "Carrot Halwa", price: 100 },
              { name: "Pineapple Pastry", price: 80 },
              { name: "Sizzling Brownie", price: 180 },
              { name: "Phirni", price: 95 },
              { name: "Basundi", price: 105 },
              { name: "Choco Lava Cake", price: 160 },
              { name: "Shahi Tukda", price: 120 },
            ].map((item, i) => (
              <li key={`dessert-${i}`} className="menu-item-row">
                <span>{item.name}</span>
                <span className="menu-item-price">₹{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Ice Cream Category */}
        <div className="menu-category">
          <div className="menu-category-heading">
            <img
              src="Icecream/icecream.jpg"
              alt="Ice Cream"
              className="menu-category-img"
            />
            <h2>Ice Cream</h2>
          </div>
          <ul className="menu-items-list">
            {[
              { name: "Vanilla Ice Cream", price: 60 },
              { name: "Chocolate Ice Cream", price: 70 },
              { name: "Strawberry Ice Cream", price: 65 },
              { name: "Butterscotch Ice Cream", price: 75 },
              { name: "Mango Ice Cream", price: 80 },
              { name: "Black Currant Ice Cream", price: 85 },
              { name: "Kesar Pista Ice Cream", price: 90 },
              { name: "Choco Chip Ice Cream", price: 85 },
              { name: "Kulfi", price: 95 },
              { name: "Falooda Ice Cream", price: 100 },
              { name: "Paan Ice Cream", price: 80 },
              { name: "Tender Coconut Ice Cream", price: 90 },
              { name: "Sundae Delight", price: 120 },
              { name: "Cassata", price: 110 },
              { name: "Matka Kulfi", price: 105 },
              { name: "Caramel Crunch", price: 115 },
              { name: "Fruit Overload", price: 100 },
              { name: "Triple Sundae", price: 130 },
              { name: "Brownie Ice Cream", price: 140 },
              { name: "Choco Ice Cream", price: 120 },
            ].map((item, i) => (
              <li key={`icecream-${i}`} className="menu-item-row">
                <span>{item.name}</span>
                <span className="menu-item-price">₹{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="menu-footer-row">
        <div className="menu-footer-contact">
          <span>For Info and Order </span>
          <a className="menu-footer-phone" href="tel:03430945789">
            0343-0945789
          </a>
        </div>
        <div className="menu-footer-email">
          <span>For Email: </span>
          <a className="menu-footer-email-text" href="mailto:foodies@gmail.com">
            info@foodcourt.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
