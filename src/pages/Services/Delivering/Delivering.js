import React, { useEffect } from "react";
import "./Delivering.css";

const Delivering = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="delivering-container">
      <section className="delivering-hero">
        <h1>Fast & Fresh Food Delivery</h1>
        <p>Enjoy your favorite meals delivered hot and fresh to your doorstep, anytime, anywhere!</p>
      </section>
      <section className="delivering-overview">
        <h2>Why Choose Our Delivery?</h2>
        <ul>
          <li>Lightning-fast delivery within 30-45 minutes</li>
          <li>Contactless and safe delivery options</li>
          <li>Live order tracking & real-time updates</li>
          <li>Exclusive online deals & discounts</li>
          <li>Wide menu selection—something for everyone</li>
        </ul>
      </section>
      <section className="delivering-process">
        <h2>How It Works</h2>
        <ol>
          <li>Browse our menu & add items to your cart</li>
          <li>Choose your delivery address and time</li>
          <li>Secure online payment or cash on delivery</li>
          <li>Track your order in real time</li>
          <li>Enjoy your meal—delivered fresh & fast!</li>
        </ol>
      </section>
      <section className="delivering-area">
        <h2>Our Delivery Area</h2>
        <p>We deliver across the city and nearby suburbs. Enter your pin code at checkout to confirm delivery availability!</p>
      </section>
      <section className="delivering-faq">
        <h2>Delivery FAQs</h2>
        <ul>
          <li><strong>What are your delivery hours?</strong> 10:00 AM – 11:00 PM, all days.</li>
          <li><strong>Is there a minimum order value?</strong> Yes, ₹150 for free delivery.</li>
          <li><strong>Can I schedule a delivery?</strong> Absolutely! Choose your preferred time at checkout.</li>
          <li><strong>How do I track my order?</strong> You’ll get a live tracking link after placing your order.</li>
        </ul>
      </section>
      <section className="delivering-cta">
        <h2>Ready to Order?</h2>
        <p>Experience the fastest and most reliable food delivery in town.And let us bring deliciousness to your door!</p>
        <a href="/menu" className="delivering-order-link">Order Now</a>
      </section>
    </div>
  );
};

export default Delivering;
