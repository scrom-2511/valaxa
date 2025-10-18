import axios from "axios";

// export const getPriceOfToken = async (symbol: string) => {
//   const params = {
//     symbol,
//     convert: "USD",
//   };

//   try {
//     const res = await axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest", {
//       headers: { "X-CMC_PRO_API_KEY": "80883153ef2e412b906363b7404ad5e4" },
//       params,
//     });
//     return res.data.data.ETH.quote;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

export const getPriceOfToken = async (chain: string, address: string) => {
  try {
    const url = `https://api.coingecko.com/api/v3/simple/token_price/${chain}`;
    const res = await axios.get(url, {
      params: {
        contract_addresses: address,
        vs_currencies: "usd",
      },
    });

    const price = res.data[address.toLowerCase()]?.usd || null;
    if (!price) {
      console.log("Token not found on CoinGecko.");
      return null;
    }

    return price;
  } catch (error: any) {
    console.error("Error fetching price:", error.response?.data || error.message);
    return null;
  }
};