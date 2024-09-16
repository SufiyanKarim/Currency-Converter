import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "bg-gray-700",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`p-4 rounded-lg text-sm flex flex-col md:flex-row md:space-x-4 ${className} shadow-md`}
    >
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <label htmlFor={amountInputId} className="text-white mb-2 block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full border-2 border-gray-200 p-2 rounded-md bg-transparent text-white placeholder-gray-400"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col md:justify-end">
        <label className="text-white mb-2">Currency Type</label>
        <select
          className="rounded-md p-2 cursor-pointer border-2 border-gray-200 bg-transparent text-white bg-gray-700 outline-none placeholder-gray-400"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
