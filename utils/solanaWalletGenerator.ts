import { TokenGenerator } from "@/interfaces/tokenGenerator.Interface";
import { Keypair } from "@solana/web3.js";
import { generateMnemonic, mnemonicToSeed } from "./Bip39";
import { derivePath } from "./ed25519-hd-key";

export const solanaWalletGenerator = async (mnemonic?: string): Promise<TokenGenerator> => {
  let mnemonicString = mnemonic || generateMnemonic();
  const seed = await mnemonicToSeed(mnemonicString);
  const path = `m/44'/501'/0'/0'`;
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  console.log(derivedSeed);
  const keypair = Keypair.fromSeed(derivedSeed);
  // console.log(keypair.publicKey.toBase58());
  return { privateKey: keypair.secretKey.toString(), publicKey: keypair.publicKey.toString() };
};
