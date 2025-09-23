import { Account, SingleToken, useAccountStore } from "@/app/zustand/store";
import { TokenName, WalletImgLocation } from "@/types/types";
import { generateMnemonic } from "@/utils/Bip39";
import { bitcoinWalletGenerator } from "@/utils/bitcoinWalletGenerator";
import { ethereumWalletGenerator } from "@/utils/ethereumWalletGenerator";
import { solanaWalletGenerator } from "@/utils/solanaWalletGenerator";
import React, { useEffect } from "react";

import { Pressable, Text } from "react-native";
const ButtonMnemonic = ({ input, isChecked }: { input: boolean; isChecked: boolean }) => {
  const { accounts, addAccount } = useAccountStore();

  useEffect(() => {
    console.log(accounts);
  }, [accounts]);
  
  const handleOnClickCreateAccountBtn = async () => {
    if (isChecked) {
      const mnemonic = generateMnemonic();
      const solanaWallet = await solanaWalletGenerator(mnemonic);
      const ethereumWallet = await ethereumWalletGenerator(mnemonic);
      const bitcoinWallet = await bitcoinWalletGenerator(mnemonic);

      const solanaToken: SingleToken<TokenName.solana> = {
        tokenName: TokenName.solana,
        tokenImage: WalletImgLocation.solana,
        amount: 10,
        publicKey: solanaWallet.publicKey,
      };
      const ethreumToken: SingleToken<TokenName.ethereum> = {
        tokenName: TokenName.ethereum,
        tokenImage: WalletImgLocation.ethereum,
        amount: 10,
        publicKey: ethereumWallet.publicKey,
      };
      const bitcoinToken: SingleToken<TokenName.bitcoin> = {
        tokenName: TokenName.bitcoin,
        tokenImage: WalletImgLocation.bitcoin,
        amount: 10,
        publicKey: bitcoinWallet.publicKey,
      };

      const tokens = [solanaToken, ethreumToken, bitcoinToken];

      const account: Account = {
        accountName: "",
        accountNumer: 0,
        tokens,
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
