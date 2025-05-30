import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css"; // Import the CSS file

// Import images directly in JavaScript
const foodImages = {
  chicken: "/Homeimages/chicken.jpeg",
  salad: "/Homeimages/salad.jpeg",
  dessert: "/Homeimages/desserts.jpeg",
  pizza: "/Homeimages/pizza.jpeg",
  burger: "/Homeimages/burger.jpeg",
  icecream: "/Homeimages/icecream.jpeg",
};

const Header = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const [showContactForm, setShowContactForm] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showPricesDropdown, setShowPricesDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  const toggleProductsDropdown = () => {
    setShowProductsDropdown(!showProductsDropdown);
  };

  const toggleServicesDropdown = () => {
    setShowServicesDropdown(!showServicesDropdown);
  };

  const togglePricesDropdown = () => {
    setShowPricesDropdown(!showPricesDropdown);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        {/* Logo and Breadcrumbs */}
        <div className="logo-breadcrumbs">
          <Link
            to="/"
            className="logo"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              gap: "3px",
            }}
          >
            <img src="/food-logo.png" alt="Logo" className="logo-img" />
            <span className="logo-text">FOOD COURT</span>
          </Link>
          {location.pathname !== "/" && pathnames.length > 0 && (
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link to="/" className="breadcrumb-link">
                Home
              </Link>
              {pathnames.map((name, idx) => {
                const routeTo = `/${pathnames.slice(0, idx + 1).join("/")}`;
                const isLast = idx === pathnames.length - 1;
                // Capitalize and prettify segment
                let label = name.replace(/-/g, " ");
                label = label.charAt(0).toUpperCase() + label.slice(1);
                return isLast ? (
                  <span key={routeTo} className="breadcrumb-current">
                    {" "}
                    &gt; {label}
                  </span>
                ) : (
                  <span key={routeTo}>
                    <span className="breadcrumb-separator">&gt;</span>
                    <Link to={routeTo} className="breadcrumb-link">
                      {label}
                    </Link>
                  </span>
                );
              })}
            </nav>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-button ${isMobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className="hamburger-icon">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </button>

        {/* Navigation Links */}
        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {location.pathname !== "/" && (
            <Link
              to="/"
              className={`nav-link${
                location.pathname === "/" ? " active" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          )}
          <Link
            to="/about"
            className={`nav-link about${
              location.pathname.startsWith("/about") ? " active" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <div
            className="dropdown"
            onMouseLeave={() => setShowServicesDropdown(false)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget))
                setShowServicesDropdown(false);
            }}
            tabIndex={0}
          >
            <button
              className={`nav-link dropdown-toggle${
                location.pathname.startsWith("/services") ? " active" : ""
              }`}
              onClick={toggleServicesDropdown}
              type="button"
            >
              Services
              <span
                className={
                  showServicesDropdown
                    ? "dropdown-arrow open"
                    : "dropdown-arrow"
                }
              ></span>
            </button>
            {showServicesDropdown && (
              <div className="dropdown-menu">
                <Link 
                  to="/services/catering" 
                  className="dropdown-item"
                  onClick={() => {
                    setShowServicesDropdown(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Catering
                </Link>
                <Link 
                  to="/services/delivering" 
                  className="dropdown-item"
                  onClick={() => {
                    setShowServicesDropdown(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Delivering
                </Link>
                <Link 
                  to="/services/dine-in" 
                  className="dropdown-item"
                  onClick={() => {
                    setShowServicesDropdown(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Dine-In
                </Link>
                <Link 
                  to="/services/takeaway" 
                  className="dropdown-item"
                  onClick={() => {
                    setShowServicesDropdown(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Takeaway
                </Link>
                <Link 
                  to="/services/customers-order" 
                  className="dropdown-item"
                  onClick={() => {
                    setShowServicesDropdown(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Customer Orders
                </Link>
              </div>
            )}
          </div>
          <div
            className="dropdown"
            onMouseLeave={() => setShowPricesDropdown(false)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget))
                setShowPricesDropdown(false);
            }}
            tabIndex={0}
          >
            <button
              className="nav-link dropdown-toggle"
              onClick={togglePricesDropdown}
              type="button"
            >
              Food items
              <span
                className={
                  showPricesDropdown ? "dropdown-arrow open" : "dropdown-arrow"
                }
              ></span>
            </button>
            {showPricesDropdown && (
              <div className="dropdown-menu">
                <Link 
                  to="/foodItems/chicken" 
                  className="dropdown-item"
                  onClick={() => {
                    setShowPricesDropdown(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Chicken Items
                </Link>
                <Link 
                  to="/foodItems/salads" 
                  className="dropdown-item"
                  onClick={() => {
                    setShowPricesDropdown(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Fresh Salads
                </Link>
                <Link 
                  to="/foodItems/pizza" 
                  className="dropdown-item"
                  onClick={() => {
                    setShowPricesDropdown(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Pizza
                </Link>
                <Link 
                  to="/foodItems/burgers" 
                  className="dropdown-item"
                  onClick={() => {
                    setShowPricesDropdown(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Burgers
                </Link>
                <Link 
                  to="/foodItems/desserts" 
                  className="dropdown-item"
                  onClick={() => {
                    setShowPricesDropdown(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Desserts
                </Link>
                <Link 
                  to="/foodItems/ice-cream" 
                  className="dropdown-item"
                  onClick={() => {
                    setShowPricesDropdown(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Ice Cream
                </Link>
              </div>
            )}
          </div>
          <Link 
            to="/contact" 
            className="nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

// Export the foodImages object for use in other components
export { foodImages };
export default Header;
