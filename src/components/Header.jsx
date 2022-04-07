import React from "react";
import "./Header.css";

const Header = ({ toEUR, toUSD }) => {
  return (
    <div className="header">
      <h3>EUR: {toEUR} UAH</h3>
      <h3>USD: {toUSD} UAH</h3>
    </div>
  );
};

export default Header;
