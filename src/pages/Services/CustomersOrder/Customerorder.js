import React, { useState } from 'react';
import './Customerorder.css';

const initialOrders = [
  {
    name: 'John Doe',
    order: 'Paneer Butter Masala, Garlic Naan',
    review: 'Delicious food and quick service! Highly recommend.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    order: 'Veg Biryani, Raita',
    review: 'Loved the flavors. Will order again!',
    rating: 4
  },
  {
    name: 'Amit Verma',
    order: 'Chicken Tikka, Butter Naan',
    review: 'Tasty and fresh. The naan was so soft!',
    rating: 5
  },
  {
    name: 'Sara Ali',
    order: 'Margherita Pizza',
    review: 'Cheesy and perfect base. Great value.',
    rating: 4
  },
  {
    name: 'Vikram Singh',
    order: 'Masala Dosa',
    review: 'Crispy dosa and flavorful chutneys.',
    rating: 5
  },
  {
    name: 'Meena Patel',
    order: 'Paneer Tikka, Jeera Rice',
    review: 'Paneer was soft and spicy. Loved it!',
    rating: 5
  },
  {
    name: 'Rohit Das',
    order: 'Veg Burger, Fries',
    review: 'Quick delivery and tasty burger.',
    rating: 4
  }
];

const Customerorder = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [feedbacks, setFeedbacks] = useState([]);
  const [form, setForm] = useState({ name: '', order: '', review: '' });
  const [feedbackForm, setFeedbackForm] = useState({ name: '', feedback: '' });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFeedbackChange = (e) => {
    setFeedbackForm({ ...feedbackForm, [e.target.name]: e.target.value });
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.order && form.review) {
      setOrders([{ ...form }, ...orders]);
      setForm({ name: '', order: '', review: '' });
    }
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedbackForm.name && feedbackForm.feedback) {
      setFeedbacks([{ ...feedbackForm }, ...feedbacks]);
      setFeedbackForm({ name: '', feedback: '' });
    }
  };

  return (
    <div className="customerorder-container">
      <h1>Customer Orders & Reviews</h1>
      <form className="order-form" onSubmit={handleOrderSubmit}>
        <h2>Add Customer Order & Review</h2>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
          placeholder="Customer Name"
          required
        />
        <input
          type="text"
          name="order"
          value={form.order}
          onChange={handleInputChange}
          placeholder="Order Details"
          required
        />
        <textarea
          name="review"
          value={form.review}
          onChange={handleInputChange}
          placeholder="Customer Review"
          required
        />
        <button type="submit">Add Order</button>
      </form>

      <div className="orders-list">
        <h2>Recent Orders & Reviews</h2>
        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          orders.map((ord, idx) => (
            <div className="order-card" key={idx}>
              <div className="order-header">
                <span className="customer-name">{ord.name}</span>
                <span className="order-details">{ord.order}</span>
              </div>
              <div className="review">{ord.review}</div>
              {ord.rating && (
                <div className="order-rating">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={i < ord.rating ? 'star filled' : 'star'}>★</span>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      <form className="feedback-form" onSubmit={handleFeedbackSubmit}>
        <h2>Give Us Your Feedback</h2>
        <input
          type="text"
          name="name"
          value={feedbackForm.name}
          onChange={handleFeedbackChange}
          placeholder="Your Name"
          required
        />
        <textarea
          name="feedback"
          value={feedbackForm.feedback}
          onChange={handleFeedbackChange}
          placeholder="Your Feedback"
          required
        />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Customerorder;
