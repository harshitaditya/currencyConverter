import { useEffect, useState } from "react";

function usecurrencyInfo(currency) {
    const [data, setdata] = useState({});

    useEffect(() => {
      

        const api_url = `https://v6.exchangerate-api.com/v6/3d964d3cbf4e848fcd65c496/latest/${currency}`;

        fetch(api_url)
            .then((res) => res.json())
            .then((res) => setdata(res.conversion_rates))
            .catch((error) => console.error("Error fetching currency data:", error));
    }, [currency]);

    return data; 
}

export default usecurrencyInfo;
