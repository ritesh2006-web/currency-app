import React from "react"

export default function useCurrencyInfo(currency) {
    const APIKEY = import.meta.env.VITE_API_KEY;
    const [data, setData] = React.useState({});
    React.useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/${APIKEY}/latest/${currency}`)
            .then(res => res.json())
            .then(data => setData(data.conversion_rates));
    }, [currency]);

    return data;
}