import { lifiToken } from "@/types/types";
import axios from "axios";

export const getQuoteSwap = async (fromToken: lifiToken | undefined, toToken: lifiToken | undefined, amount: string) => {
  if (!fromToken || !toToken || !amount) {
    return "all fields required";
  }
  const params = {
    fromChain: fromToken.chainId,
    toChain: toToken.chainId,
    fromToken: fromToken.address,
    toToken: toToken.address,
    fromAmount: amount,
    fromAddress: "0x9FC3da866e7DF3a1c57adE1a97c9f00a70f010c8",
  };
  console.log(params);

  try {
    // const res = await axios.get(
    //   "https://li.quest/v1/quote?fromChain=1&toChain=1&fromToken=0x0000000000000000000000000000000000000000&toToken=0x65e3c4a750a2E7cC7cce86d01587bBcbbe99042E&fromAmount=58888888888&fromAddress=0x9FC3da866e7DF3a1c57adE1a97c9f00a70f010c8",
    // );
    const res = await axios.get("https://li.quest/v1/quote", { params });
    console.log("Hii there");
    console.log(res.data.estimate.toAmountMin);
    return res.data.estimate.toAmountMin;
  } catch (error) {
    console.log(error);
    return null;
  }
};
