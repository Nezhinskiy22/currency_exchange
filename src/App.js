import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import CurrencyInput from "./components/CurrencyInput";
import Header from "./components/Header";

function App() {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("UAH");
  const [rates, setRates] = useState([]);
  const [UAHtoEUR, setUAHtoEUR] = useState("");
  const [UAHtoUSD, setUAHtoUSD] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://data.fixer.io/api/latest?access_key=f80229f406d61b7a921163eacbe2cd4b"
      )
      .then((response) => {
        setRates(response.data.rates);
      });
  }, []);

  useEffect(() => {
    if (!!rates) {
      handleAmount1Change(1);
    }
    setUAHtoEUR((rates.UAH / rates.EUR).toFixed(2));
    setUAHtoUSD((rates.UAH / rates.USD).toFixed(2));
  }, [rates]);

  const format = (number) => {
    return number.toFixed(2);
  };

  const handleAmount1Change = (amount1) => {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  };

  const handleCurrency1Change = (currency1) => {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  };

  const handleAmount2Change = (amount2) => {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount2(amount2);
  };

  const handleCurrency2Change = (currency2) => {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  };

  return (
    <div className="App">
      <Header toEUR={UAHtoEUR} toUSD={UAHtoUSD} />
      <h1>Currency converter</h1>
      <CurrencyInput
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1}
      />
      <CurrencyInput
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2}
      />
    </div>
  );
}

export default App;
