import React, { useEffect } from "react";
import "./Takeaway.css";

const Takeaway = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="takeaway-container">
      <section className="takeaway-hero">
        <h1>Quick & Easy Takeaway</h1>
        <p>Order ahead and pick up your favorite dishes—fresh, hot, and ready when you are!</p>
      </section>
      <section className="takeaway-overview">
        <h2>Why Choose Takeaway?</h2>
        <ul>
          <li>Skip the wait—order online and pick up at your convenience</li>
          <li>Perfect for busy schedules and on-the-go meals</li>
          <li>Freshly prepared, always delicious</li>
          <li>Contactless pickup available</li>
          <li>Special takeaway-only combos and discounts</li>
        </ul>
      </section>
      <section className="takeaway-process">
        <h2>How It Works</h2>
        <ol>
          <li>Browse our menu and select your items</li>
          <li>Choose your preferred pickup time</li>
          <li>Pay online or at the counter</li>
          <li>Receive a confirmation and order number</li>
          <li>Pick up your order—no waiting in line!</li>
        </ol>
      </section>
      <section className="takeaway-menu">
        <h2>Menu Highlights</h2>
        <ul>
          <li>Grilled Sandwiches & Wraps</li>
          <li>Fresh Salads & Bowls</li>
          <li>Classic Burgers & Fries</li>
          <li>Signature Pizzas</li>
          <li>Refreshing Beverages & Desserts</li>
        </ul>
        <p>See our full <a href="/menu" className="takeaway-menu-link">menu</a> for more options!</p>
      </section>
      <section className="takeaway-faq">
        <h2>Takeaway FAQs</h2>
        <ul>
          <li><strong>How do I place a takeaway order?</strong> Order online or call us directly.</li>
          <li><strong>How long does it take to prepare?</strong> Most orders are ready within 20-25 minutes.</li>
          <li><strong>Can I schedule my pickup?</strong> Yes, select your preferred time during checkout.</li>
          <li><strong>Is parking available?</strong> Yes, we have dedicated takeaway parking spots.</li>
        </ul>
      </section>
      <section className="takeaway-cta">
        <h2>Ready to Grab & Go?</h2>
        <p>Order now and enjoy your meal wherever you like!</p>
        <a href="/menu" className="takeaway-order-link">Order Takeaway</a>
      </section>
    </div>
  );
};

export default Takeaway;
