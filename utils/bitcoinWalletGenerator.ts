import ecc from '@bitcoinerlab/secp256k1';
import BIP32Factory from 'bip32';
import * as bitcoin from "bitcoinjs-lib";
import { generateMnemonic, mnemonicToSeed } from "./Bip39";

const bip32 = BIP32Factory(ecc);


export const bitcoinWalletGenerator = async (mnemonic?: string) => {
  let mnemonicString = mnemonic || generateMnemonic();
  const seed = await mnemonicToSeed(mnemonicString);
  const path = `m/84'/0'/0'/0/0`;
  const node = bip32.fromSeed(seed, bitcoin.networks.bitcoin);
  const child = node.derivePath(path);
  console.log(child.publicKey)
};