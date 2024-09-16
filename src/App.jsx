import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('pkr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center bg-gray-700 p-4"
      
    >
      <div className="w-full max-w-lg p-6 bg-gray-800 backdrop-blur-md rounded-lg shadow-lg">
        <h1 className="text-center text-white text-2xl font-bold mb-4">
          Currency Converter
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="mb-4">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>
          <div className="relative flex justify-center items-center my-4">
            <button
              type="button"
              className="bg-gray-700 text-white hover:bg-gray-300 hover:text-black font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              onClick={swap}
            >
              Swap
            </button>
          </div>
          <div className="mb-6">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-700 text-white hover:bg-gray-300 hover:text-black font-semibold py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
