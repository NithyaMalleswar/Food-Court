import React from "react";
import "./Salad.css";

const saladItems = [
  { name: "Greek Salad", desc: "Fresh cucumbers, tomatoes, olives, and feta cheese.", className: "greek-salad", img: process.env.PUBLIC_URL + "/salads/greek.jpg" },
  { name: "Caesar Salad", desc: "Crisp romaine, croutons, parmesan, and Caesar dressing.", className: "caesar-salad", img: process.env.PUBLIC_URL + "/salads/caesar.jpg" },
  { name: "Caprese Salad", desc: "Tomatoes, mozzarella, basil, and balsamic glaze.", className: "caprese-salad", img: process.env.PUBLIC_URL + "/salads/caprese.jpg" },
  { name: "Cobb Salad", desc: "Chicken, bacon, avocado, eggs, and blue cheese.", className: "cobb-salad", img: process.env.PUBLIC_URL + "/salads/cobb.jpg" },
  { name: "Quinoa Salad", desc: "Quinoa, cherry tomatoes, cucumber, and lemon vinaigrette.", className: "quinoa-salad", img: process.env.PUBLIC_URL + "/salads/quinoa.jpg" },
  { name: "Pasta Salad", desc: "Rotini pasta, bell peppers, olives, and Italian dressing.", className: "pasta-salad", img: process.env.PUBLIC_URL + "/salads/pasta.jpg" },
  { name: "Waldorf Salad", desc: "Apples, grapes, celery, walnuts, and mayo.", className: "waldorf-salad", img: process.env.PUBLIC_URL + "/salads/waldorf.jpg" },
  { name: "Asian Sesame Salad", desc: "Mixed greens, mandarin, sesame seeds, and Asian dressing.", className: "asian-sesame", img: process.env.PUBLIC_URL + "/salads/asian.jpg" },
  { name: "Beetroot Salad", desc: "Roasted beetroot, arugula, goat cheese, and walnuts.", className: "beetroot-salad", img: process.env.PUBLIC_URL + "/salads/beetroot.jpg" },
  { name: "Fruit Salad", desc: "Seasonal fresh fruits tossed together.", className: "fruit-salad", img: process.env.PUBLIC_URL + "/salads/fruit.jpg" },
  { name: "Avocado Mango Salad", desc: "Creamy avocado, sweet mango, red onion, and lime.", className: "avocado-mango", img: process.env.PUBLIC_URL + "/salads/mango.jpg" },
  { name: "Strawberry Salad", desc: "Baby spinach, fresh strawberries, pecans, and poppyseed dressing.", className: "spinach-strawberry", img: process.env.PUBLIC_URL + "/salads/spinach.jpg" },
];

const FreshSalad = () => (
  <div className="salad-items-container">
    <h1>Fresh Salads</h1>
    <div className="salad-grid">
      {saladItems.map((item, idx) => (
        <div className={`salad-card ${item.className}`} key={idx}>
          <div className="salad-img">
  <img src={item.img} alt={item.name} />
</div>
          <div className="salad-info">
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
            <button className="add-item-btn" onClick={() => alert(`Added ${item.name} to cart!`)}>Add Item</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FreshSalad;
