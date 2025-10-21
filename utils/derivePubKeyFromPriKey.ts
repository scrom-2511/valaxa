import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
import { Wallet } from "ethers";

export const derivePubKeyFromPriKey = (key: string) => {
  console.log("key is:", key)
  if (!key) return;
  let publicKey;
  if (key.startsWith("0x")) {
    publicKey = deriveEthAddressFromPriKey(key);
  } else {
    publicKey = deriveSolAddressFromPriKey(key);
  }
  return publicKey;
};

export function deriveSolAddressFromPriKey(key: string) {
  try {
    const secretKey = bs58.decode(key);
    const keypair = Keypair.fromSecretKey(secretKey);
    console.log(keypair.publicKey.toBase58());
    return keypair.publicKey.toString();
  } catch (e) {
    console.error("Failed to derive Solana address:", e);
  }
}

export function deriveEthAddressFromPriKey(privateKey: string) {
  try {
    if (!privateKey.startsWith("0x")) {
      privateKey = "0x" + privateKey;
    }

    const wallet = new Wallet(privateKey);
    console.log(wallet.address);
    return wallet.address.toString();
  } catch (e) {
    console.error("Failed to derive Ethereum address:", e);
  }
}
