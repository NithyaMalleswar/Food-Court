import React from "react";
import "./about.css";

import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
  <div className="about-container">
    <section className="about-hero">
      <h1>About FOOD COURT</h1>
      <p>
        Welcome to FOOD COURT, your destination for delicious, fresh, and memorable dining experiences! We are passionate about bringing people together over great food and unforgettable flavors.
      </p>
    </section>

    <section className="about-story">
      <h2>Our Story</h2>
      <p>
        Founded in 2022, FOOD COURT began as a small family-run eatery with a big dream: to serve mouth-watering dishes made from the freshest ingredients. Over the years, we have grown into a vibrant hub for food lovers, offering a diverse menu that celebrates both classic favorites and innovative new creations.
      </p>
      <p>
        From our humble beginnings, we have always believed that food is more than just sustenance—it's a celebration of culture, community, and creativity. Our journey has been shaped by our loyal customers, dedicated team, and a love for all things culinary.
      </p>
    </section>

    <section className="about-philosophy">
      <h2>Our Philosophy</h2>
      <ul>
        <li><strong>Freshness First:</strong> We source the best local produce and ingredients, ensuring every dish bursts with flavor and nutrition.</li>
        <li><strong>Passion for Quality:</strong> Every recipe is crafted with care, from our signature grilled chicken to our decadent desserts.</li>
        <li><strong>Community Connection:</strong> We believe in supporting local farmers, suppliers, and giving back through community events and initiatives.</li>
        <li><strong>Innovation & Tradition:</strong> Our menu blends time-honored classics with exciting new tastes, so there's always something for everyone.</li>
      </ul>
    </section>

    <section className="about-why">
      <h2>Why Choose Us?</h2>
      <ul>
        <li>Wide variety of dishes: From fresh salads and creamy pastas to spicy tacos and gourmet burgers.</li>
        <li>Cozy dine-in atmosphere and fast, reliable delivery.</li>
        <li>Custom catering for all your special occasions.</li>
        <li>Friendly, attentive staff who care about your experience.</li>
        <li>Commitment to hygiene, safety, and customer satisfaction.</li>
      </ul>
    </section>

    <section className="about-team">
      <h2>Meet the Team</h2>
      <p>
        Our talented chefs, enthusiastic servers, and dedicated managers are the heart of FOOD COURT. Each member brings their own expertise and passion to the table, working together to create a welcoming environment and unforgettable meals.
      </p>
    </section>

    <section className="about-promise">
      <h2>Our Promise</h2>
      <p>
        Whether you're grabbing a quick bite, celebrating with friends, or planning a big event, we promise to deliver food that delights and service that makes you feel at home. Your satisfaction is our top priority, and we are always striving to exceed your expectations.
      </p>
    </section>

    <section className="about-closing">
      <h2>Thank You!</h2>
      <p>
        Thank you for being part of our journey. We look forward to serving you and making every visit to FOOD COURT a memorable one!
      </p>
    </section>
  </div>
  );
};

export default About;
