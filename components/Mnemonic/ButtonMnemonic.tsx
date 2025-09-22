import { useAccountStore } from "@/app/zustand/store";
import { generateMnemonic } from "@/utils/Bip39";
import { bitcoinWalletGenerator } from "@/utils/bitcoinWalletGenerator";
import { ethereumWalletGenerator } from "@/utils/ethereumWalletGenerator";
import { solanaWalletGenerator } from "@/utils/solanaWalletGenerator";
import React from "react";


import { Pressable, Text } from "react-native";
const ButtonMnemonic = ({ input, isChecked }: { input: boolean; isChecked: boolean }) => {

  const { accounts, addAccount } = useAccountStore();
  const handleOnClickCreateAccountBtn = async () => {
    if (isChecked) {
      const mnemonic = generateMnemonic();
      const solanaWallet = await solanaWalletGenerator(mnemonic);
      const ethereumWallet = await ethereumWalletGenerator(mnemonic);
      const bitcoinWallet = await bitcoinWalletGenerator(mnemonic);
      console.log("sol:")
      console.log(solanaWallet)
      console.log("eth:")
      console.log(ethereumWallet)
      console.log("btc:")
      console.log(bitcoinWallet)

      
      
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