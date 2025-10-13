import { lifiToken } from "@/types/types";
import axios from "axios";

export const getAllTokensSwap = async () : Promise<lifiToken[] | [] > => {
  try {
    const res = await axios.get("https://li.quest/v1/tokens?chains=1151111081099710%2C1");
    console.log(Object.values(res.data.tokens).flat())
    return Object.values(res.data.tokens).flat() as lifiToken[];
  } catch (error) {
    console.error(error);
    return [];
  }
};