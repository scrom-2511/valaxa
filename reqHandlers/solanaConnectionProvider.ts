import { Connection } from "@solana/web3.js";

const rpcEndpoint = "https://proportionate-smart-glitter.solana-mainnet.quiknode.pro/96f988509728756010bb13466f7bd589f398b9c9/";
export const solanaConnection = new Connection(rpcEndpoint);