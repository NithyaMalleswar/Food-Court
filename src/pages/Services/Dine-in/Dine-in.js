import React, { useEffect, useState } from "react";
import "./Dine-in.css";
import TableReservation from "../../../components/TableReservation";

const DineIn = () => {
  const [showReservation, setShowReservation] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="dinein-container">
      <section className="dinein-hero">
        <h1>Welcome to Our Dine-In Experience</h1>
        <p>Enjoy a warm, inviting atmosphere and delicious food, freshly prepared for you and your loved ones.</p>
      </section>
      <section className="dinein-experience">
        <h2>Our Dining Experience</h2>
        <ul>
          <li>Elegant and comfortable seating arrangements</li>
          <li>Impeccable hygiene and safety standards</li>
          <li>Friendly, attentive staff for a memorable meal</li>
          <li>Family-friendly environment with kids’ options</li>
          <li>Perfect for celebrations, meetings, or casual get-togethers</li>
        </ul>
      </section>
      <section className="dinein-highlights">
        <h2>Highlights</h2>
        <ul>
          <li>Chef’s specials and seasonal menus</li>
          <li>Live kitchen viewing—see your food being made</li>
          <li>Private dining rooms for special occasions</li>
          <li>Complimentary welcome drinks</li>
          <li>Free Wi-Fi and music for a great ambience</li>
        </ul>
      </section>
      <section className="dinein-process">
        <h2>How It Works</h2>
        <ol>
          <li>Arrive and be greeted by our host</li>
          <li>Choose your table and browse the menu</li>
          <li>Place your order with our friendly staff</li>
          <li>Relax and enjoy the ambience while your meal is prepared</li>
          <li>Savor your food and let us know if you need anything!</li>
        </ol>
      </section>
      <section className="dinein-faq">
        <h2>Dine-In FAQs</h2>
        <ul>
          <li><strong>Do I need a reservation?</strong> Walk-ins are welcome, but reservations are recommended for weekends and large groups.</li>
          <li><strong>What are your dine-in hours?</strong> 11:00 AM – 10:30 PM, all days.</li>
          <li><strong>Are there vegetarian/vegan options?</strong> Yes, we have a wide variety of vegetarian and vegan dishes.</li>
          <li><strong>Is there parking available?</strong> Yes, free parking is available for all dine-in guests.</li>
        </ul>
      </section>
      <section className="dinein-cta">
        <h2>Ready for a Great Meal?</h2>
        <p>Reserve your table now and enjoy an unforgettable dining experience with us!</p>
        <button className="dinein-reserve-link" onClick={() => setShowReservation(true)}>Reserve Table</button>
      </section>
      <TableReservation isOpen={showReservation} onClose={() => setShowReservation(false)} />
    </div>
  );
};

export default DineIn;
