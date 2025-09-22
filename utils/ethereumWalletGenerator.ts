import { TokenGenerator } from "@/interfaces/tokenGenerator.Interface";
import { HDNodeWallet, Wallet } from "ethers";
import { generateMnemonic, mnemonicToSeed } from "./Bip39";

export const ethereumWalletGenerator = async (mnemonic?: string): Promise<TokenGenerator> => {
  let mnemonicString = mnemonic || "";
  if (!mnemonic) {
    mnemonicString = generateMnemonic();
  }
  const seed = await mnemonicToSeed(mnemonicString);
  const derivationPath = `m/44'/60'/0'/0/0`;
  const hdNode = HDNodeWallet.fromSeed(seed);
  const child = hdNode.derivePath(derivationPath);
  const privateKey = child.privateKey;
  const wallet = new Wallet(privateKey);
  return {privateKey: privateKey, publicKey: wallet.address}
};
