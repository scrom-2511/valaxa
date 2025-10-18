import axios from "axios";

export const getTokenBalanceUsd = async(chain:string, tokenAddress: string[]) => {
    console.log("chain is: ", chain , "and address is:", tokenAddress)
    try {
        const res = await axios.get(`https://api.coingecko.com/api/v3/simple/token_price/${chain}?contract_addresses=${tokenAddress}&vs_currencies=usd`)
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.error(error)
        return null;
    }
}

export const getCoinBalance = async (chain:string[]) => {
    console.log("chain is: ", chain)
    try {
        const res = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${chain}&vs_currencies=usd`)
        console.log(res.data)
        return res.data;
    } catch (error) {
        console.log(error)
        return null
    }
}