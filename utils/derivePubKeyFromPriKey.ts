import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
import { Wallet } from "ethers";

export const derivePubKeyFromPriKey = (key: string) => {
    if (key.startsWith("0x")){
        deriveEthAddressFromPriKey(key);
    } else{
        deriveSolAddressFromPriKey(key)
    }
}


export function deriveSolAddressFromPriKey(key: string) {
  try {
    const secretKey = bs58.decode(key);
    const keypair = Keypair.fromSecretKey(secretKey);
    console.log(keypair.publicKey.toBase58());
    return keypair;
  } catch (e) {
    console.error("Failed to derive Solana address:", e);
  }
}

export function deriveEthAddressFromPriKey(privateKey: string) {
  try {
    if (!privateKey.startsWith('0x')) {
      privateKey = '0x' + privateKey;
    }

    const wallet = new Wallet(privateKey);
    console.log(wallet.address);
    return wallet;
  } catch (e) {
    console.error("Failed to derive Ethereum address:", e);
  }
}