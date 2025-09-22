import { Account, Token, useAccountStore } from "@/app/zustand/store";
import { TokenName, WalletImgLocation } from "@/types/types";
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
      console.log("sol:");
      console.log(solanaWallet);
      console.log("eth:");
      console.log(ethereumWallet);
      console.log("btc:");
      console.log(bitcoinWallet);

      const tokenSolana: Token<TokenName.solana> = { tokenName: TokenName.solana, tokenImage: WalletImgLocation.solana, amount: 10, publicKey: "" };
      const tokenEthereum: Token<TokenName.ethereum> = {
        tokenName: TokenName.ethereum,
        tokenImage: WalletImgLocation.ethereum,
        amount: 10,
        publicKey: "",
      };
      const tokenBitcoin: Token<TokenName.bitcoin> = {
        tokenName: TokenName.bitcoin,
        tokenImage: WalletImgLocation.bitcoin,
        amount: 10,
        publicKey: "",
      };

      const account: Account = {
        accountName: "",
        accountNumer: 0,
        tokens: { [TokenName.solana]: tokenSolana, [TokenName.ethereum]: tokenEthereum, [TokenName.bitcoin]: tokenBitcoin },
      };
      addAccount(account);
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
