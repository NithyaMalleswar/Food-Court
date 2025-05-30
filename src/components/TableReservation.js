import React, { useState } from 'react';
import './TableReservation.css';

const TableReservation = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    date: '',
    time: '',
    people: 1,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="reservation-modal-overlay">
      <div className="reservation-modal">
        <button className="close-btn" onClick={onClose}>&times;</button>
        {!submitted ? (
          <>
            <h2>Reserve a Table</h2>
            <form onSubmit={handleSubmit} className="reservation-form">
              <label>
                Name:
                <input type="text" name="name" value={form.name} onChange={handleChange} required />
              </label>
              <label>
                Contact:
                <input type="text" name="contact" value={form.contact} onChange={handleChange} required />
              </label>
              <label>
                Date:
                <input type="date" name="date" value={form.date} onChange={handleChange} required />
              </label>
              <label>
                Time:
                <input type="time" name="time" value={form.time} onChange={handleChange} required />
              </label>
              <label>
                Number of People:
                <input type="number" name="people" min="1" max="20" value={form.people} onChange={handleChange} required />
              </label>
              <button type="submit" className="reserve-btn">Book Now</button>
            </form>
          </>
        ) : (
          <div className="reservation-confirmation">
            <h3>Thank you for your reservation, {form.name}!</h3>
            <p>Your table for {form.people} on {form.date} at {form.time} has been booked.</p>
            <button className="reserve-btn" onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TableReservation;
