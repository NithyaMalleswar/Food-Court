import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Get in Touch With Food Court!</h1>
      <p className="contact-intro">
        Have a question about our menu, want to book a table, or just craving something delicious? Fill out the form below and our team will get back to you as soon as possible. We love hearing from fellow foodies, restaurant partners, and event organizers!
      </p>
      <section className="contact-form-section-outer">
        <div className="contact-form-section">
          <form className="contact-form" onSubmit={e => { e.preventDefault(); alert('Thank you for reaching out! We will get back to you soon.'); }}>
            <div style={{display: 'flex', gap: '1rem'}}>
              <div style={{flex: 1}}>
                <label htmlFor="firstName">First name<span className="required">*</span></label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div style={{flex: 1}}>
                <label htmlFor="lastName">Last name<span className="required">*</span></label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
            </div>
            <label htmlFor="email">Email<span className="required">*</span></label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" />
            <label htmlFor="org">Restaurant Name</label>
            <input type="text" id="org" name="org" />
            <label htmlFor="message">Message<span className="required">*</span></label>
            <textarea id="message" name="message" rows="4" required placeholder="Let us know how we can make your food experience amazing!" />
            <div style={{display: 'flex', alignItems: 'center', margin: '0.5rem 0'}}>
              <input type="checkbox" id="updates" name="updates" style={{marginRight: '0.5rem'}} />
              <label htmlFor="updates" style={{fontSize: '0.97rem'}}>I want to receive updates about new dishes and special offers.</label>
            </div>
            <button type="submit" className="contact-btn">Send Message</button>
            <p style={{fontSize: '0.93rem', color: '#888', marginTop: '1.2rem', textAlign: 'center'}}>
              We value your privacy. Your details will only be used to respond to your inquiry or send you food updates if you opt in.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
