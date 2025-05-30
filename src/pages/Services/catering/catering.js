import React from "react";
import "./catering.css";

import { useEffect } from "react";

const Catering = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="catering-container">
    <section className="catering-hero">
      <h1>Catering Services</h1>
      <p>
        Make your next event unforgettable with FOOD COURT's exceptional catering! From intimate gatherings to grand celebrations, we deliver delicious food and seamless service tailored to your needs.
      </p>
    </section>

    <section className="catering-overview">
      <h2>What We Offer</h2>
      <ul>
        <li>Customizable menus for all occasions: weddings, birthdays, corporate events, and more</li>
        <li>Buffet, plated, and finger food options</li>
        <li>Vegetarian, vegan, and gluten-free selections</li>
        <li>Professional setup, serving staff, and cleanup</li>
        <li>Flexible packages to suit your budget and preferences</li>
      </ul>
    </section>

    <section className="catering-menu">
      <h2>Menu Highlights</h2>
      <div className="catering-menu-grid">
        <div className="menu-item">
          <h3>Signature Chicken Platters</h3>
          <p>Juicy grilled chicken, spicy wings, and savory kebabs served with fresh dips and sides.</p>
        </div>
        <div className="menu-item">
          <h3>Wood-Fired Pizzas</h3>
          <p>Classic Margherita, Pepperoni, and custom toppings—hot and fresh from the oven.</p>
        </div>
        <div className="menu-item">
          <h3>Colorful Salads</h3>
          <p>Crisp greens, seasonal veggies, and house-made dressings for a healthy touch.</p>
        </div>
        <div className="menu-item">
          <h3>Gourmet Burgers & Sliders</h3>
          <p>Beef, chicken, or veggie patties with all your favorite fixings.</p>
        </div>
        <div className="menu-item">
          <h3>Dessert Bar</h3>
          <p>Mini cheesecakes, brownies, cupcakes, and assorted sweets to finish your meal.</p>
        </div>
        <div className="menu-item">
          <h3>Beverage Station</h3>
          <p>Fresh juices, soft drinks, and specialty mocktails for all ages.</p>
        </div>
      </div>
    </section>

    <section className="catering-why">
      <h2>Why Choose FOOD COURT Catering?</h2>
      <ul>
        <li>Experienced chefs and attentive staff</li>
        <li>Fresh, high-quality ingredients</li>
        <li>Beautiful presentation and reliable delivery</li>
        <li>Personalized service from planning to cleanup</li>
        <li>Excellent reviews from happy clients</li>
      </ul>
    </section>

    <section className="catering-booking">
      <h2>How to Book</h2>
      <ol>
        <li>Contact us with your event details and preferences.</li>
        <li>Choose your menu and package with our expert guidance.</li>
        <li>Relax while we handle the rest—from setup to service and cleanup!</li>
      </ol>
      <p className="catering-contact-info">
        <strong>Email:</strong> catering@foodcourt.com<br />
        <strong>Phone:</strong> +91 98765 43210
      </p>
    </section>

    <section className="catering-testimonials">
      <h2>What Our Clients Say</h2>
      <blockquote>
        “FOOD COURT catered our wedding and everything was perfect! The food was delicious and the staff were so helpful.”<br />
        <span>- Priya & Rahul</span>
      </blockquote>
      <blockquote>
        “Our corporate event was a hit thanks to your team. Great variety and top-notch service!”<br />
        <span>- Tech Solutions Pvt Ltd</span>
      </blockquote>
    </section>

    <section className="catering-closing">
      <h2>Let’s Make Your Event Special!</h2>
      <p>
        Ready to plan your next celebration? Contact us today and let FOOD COURT take care of the rest. We look forward to serving you and your guests!
      </p>
    </section>
  </div>
  );
};

export default Catering;
