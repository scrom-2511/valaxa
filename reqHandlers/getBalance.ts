import axios from "axios";

export const getBalanceSolana = async (solanaPublicKey: string) => {
  if(Buffer.byteLength(solanaPublicKey) != 32) {
    console.log("The key is invalid!");
    return "The key is invalid!"
  };
  console.log("public key is: ", solanaPublicKey)
  if (!solanaPublicKey) {
    return "The public key is empty"
  }
  try {
    const response = await axios.post("https://devnet.helius-rpc.com/?api-key=9108538b-db95-4ca8-ae6b-5e086c6e4429", {
      jsonrpc: "2.0",
      id: "getAccBalance",
      method: "getBalance",
      params: [solanaPublicKey],
    });
    console.log(response.data)
    return (response.data.result.value) / Math.pow(10, 9);
  } catch (error) {
    console.log(error);
    return null;
  }
};
