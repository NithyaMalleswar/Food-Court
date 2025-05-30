import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/about";
import Menu from "./pages/Menu/menu";

// Food Items
import Chicken from "./pages/FoodItems/ChickenItems/Chicken";
import FreshSalad from "./pages/FoodItems/FreshSalad/Salad";
import Pizza from "./pages/FoodItems/Pizza/Pizza";
import Burger from "./pages/FoodItems/Burger/Burger";
import Desserts from "./pages/FoodItems/Desserts/Desserts";
import Icecream from "./pages/FoodItems/Icecreams/Icecream";
import DineIn from "./pages/Services/Dine-in/Dine-in";
import Catering from "./pages/Services/catering/catering";
import Delivering from "./pages/Services/Delivering/Delivering";
// import ServicesHome from "./pages/Services/ServicesHome";


import Takeaway from "./pages/Services/Takeaway/Takeaway";
import Customerorder from "./pages/Services/CustomersOrder/Customerorder";
import Contact from "./pages/contact/contact";

// Optional: NotFound fallback page
const NotFound = () => (
  <div style={{ marginTop: "100px", backgroundColor: "#f7f7f7", color: "#ea5455", textAlign: 'center', fontSize: '2rem', padding: '2rem' }}>
    404 - Page Not Found
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          {/* <Route path="/services" element={<ServicesHome />} /> */}
          <Route path="/services/catering" element={<Catering />} />
          <Route path="/services/delivery" element={<Delivering />} />
          <Route path="/services/delivering" element={<Delivering />} />
          <Route path="/services/dine-in" element={<DineIn />} />
          <Route path="/services/takeaway" element={<Takeaway />} />
          <Route path="/services/customers-order" element={<Customerorder />} />
          <Route path="/foodItems/chicken" element={<Chicken />} />
          <Route path="/foodItems/salads" element={<FreshSalad />} />
          <Route path="/foodItems/pizza" element={<Pizza />} />
          <Route path="/foodItems/burgers" element={<Burger />} />
          <Route path="/foodItems/desserts" element={<Desserts />} />
          <Route path="/foodItems/ice-cream" element={<Icecream />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/menu/pizza" element={<Pizza />} />
          <Route path="/menu/burgers" element={<Burger />} />
          <Route path="/menu/desserts" element={<Desserts />} />
          <Route path="/menu/ice-cream" element={<Icecream />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
