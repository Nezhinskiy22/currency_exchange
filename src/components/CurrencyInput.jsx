import React from "react";
import "./CurrencyInput.css";
import PropTypes from "prop-types";

const CurrencyInput = ({
  amount,
  currency,
  currencies,
  onAmountChange,
  onCurrencyChange,
}) => {
  return (
    <div className="group">
      <input
        type="text"
        value={amount}
        onChange={(event) => onAmountChange(event.target.value)}
      />
      <select
        value={currency}
        onChange={(event) => {
          onCurrencyChange(event.target.value);
        }}
      >
        {currencies.map((currency) => (
          <option value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  );
};

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default CurrencyInput;
