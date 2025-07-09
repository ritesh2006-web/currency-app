import React, { useId } from 'react'

export default function InputBox({
    label,
    amount,
    onAmounChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
}) {
    const amountInputId = useId()


    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex`}>

            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block"
                    htmlFor='amountInputId'>

                    {label}
                </label>
                <input
                    style={{ borderStyle: "none" }}

                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5 no-spinner border border-gray-400 p-2 rounded"
                    type='number'
                    placeholder='Amount'
                    value={amount}
                    onChange={e => {
                        onAmounChange && onAmounChange(Number(e.target.value))
                    }}

                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => {
                        onCurrencyChange && onCurrencyChange(e.target.value)
                    }}>

                    {currencyOptions.map((curr) =>
                        <option key={curr}
                            value={curr}>
                            {curr}
                        </option>

                    )}

                </select>
            </div>
        </div>
    );
}
