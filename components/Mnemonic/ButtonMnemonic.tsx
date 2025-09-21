import { generateMnemonic, mnemonicToSeed } from "@/utils/Bip39";
import { derivePath } from "@/utils/ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import React from "react";
import { Pressable, Text } from "react-native";
const ButtonMnemonic = ({ input, isChecked }: { input: boolean; isChecked: boolean }) => {
  const handleOnClickCreateAccountBtn = async () => {
    if (isChecked) {
      const mnemonic = generateMnemonic();
      console.log(mnemonic);
      const seed = await mnemonicToSeed(mnemonic);
      const path = `m/44'/501'/0'/0'`;
      const derivedSeed = derivePath(path, seed.toString("hex")).key;
      console.log(derivedSeed)
      const keypair = Keypair.fromSeed(derivedSeed);
      console.log(keypair.publicKey.toBase58())
    }
  };
  const bgBtnOnCreateAccount = isChecked ? "bg-bgPrimaryBtn" : "bg-bgSecondaryBtn";

  return (
    <>
      {input ? (
        <Pressable className="bg-bgPrimaryBtn p-2 px-3 rounded-md">
          <Text className="text-text font-roboto">IMPORT ACCOUNT(S)</Text>
        </Pressable>
      ) : (
        <Pressable className={`${bgBtnOnCreateAccount} p-2 px-3 rounded-md`} onPress={handleOnClickCreateAccountBtn}>
          <Text className="text-text font-roboto">CREATE ACCOUNT</Text>
        </Pressable>
      )}
    </>
  );
};

export default ButtonMnemonic;
