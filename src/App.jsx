import React, { useState } from 'react';
import InputBox from './components/Main';
import useCurrencyInfo from './Hooks/currencyFunction';

function App() {
  const bgImage = "url('https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg')";

  const [amount, setAmount] = useState();
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertAmount, setConvertAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  function swap() {
    setFrom(to);
    setTo(from);
    setAmount(convertAmount);
    setConvertAmount(amount);
  }

  function convert() {
    if (currencyInfo && currencyInfo[to]) {
      setConvertAmount((amount * currencyInfo[to]).toFixed(2));
    } else {
      setConvertAmount();
    }
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: bgImage }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={setFrom}
                selectCurrency={from}
                onAmounChange={setAmount}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-0.5 border-white  text-white px-5 py-2"
                style={{
                  borderRadius : "20px",
                  cursor : "pointer",
                  
                }}
                onClick={swap}
              >
                <img src="src\components\exchange.png" alt="swap" width="60px"/>
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertAmount}
                currencyOptions={options}
                selectCurrency={to}
                onCurrencyChange={setTo}
                onAmounChange={() => {}}
                // No need to change amount in the 'to' box
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" style={{cursor : "pointer"}}>
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;