import SingleInput from "@/components/SingleInput";
import { TokenName, WalletImgLocation } from "@/types/types";
import { generateMnemonic } from "@/utils/Bip39";
import { bitcoinWalletGenerator } from "@/utils/bitcoinWalletGenerator";
import { ethereumWalletGenerator } from "@/utils/ethereumWalletGenerator";
import { solanaWalletGenerator } from "@/utils/solana/walletGeneratorSolana";
import { router } from "expo-router";
import { useSearchParams } from "expo-router/build/hooks";
import React from "react";
import { Account, SingleToken, useAccountStore, useSingleInputStore } from "../zustand/store";

const SetAccountName = () => {
  const { currentAccountIndex, accounts, addAccount } = useAccountStore();
  const { currentInput } = useSingleInputStore();

  const searchParams = useSearchParams();
  const source = searchParams.get("source");
  const handleOnPress = async () => {
    if (source === "watchAccount") {
      console.log("pressed")
      const account: Account = {
        accountName: currentInput ?? "",
        accountNumber: currentAccountIndex+1,
        tokens: [],
      };
      addAccount(account);
      router.push("/(tabs)/WatchAccountOption")
    } else {
      const mnemonic = generateMnemonic();
      const solanaWallet = await solanaWalletGenerator(mnemonic);
      const ethereumWallet = await ethereumWalletGenerator(mnemonic);
      const bitcoinWallet = await bitcoinWalletGenerator(mnemonic);

      const solanaToken: SingleToken = {
        tokenName: TokenName.solana,
        tokenImage: WalletImgLocation.solana,
        balance: 10,
        publicKey: solanaWallet.publicKey,
        mintAddress: "",
      };
      const ethreumToken: SingleToken = {
        tokenName: TokenName.ethereum,
        tokenImage: WalletImgLocation.ethereum,
        balance: 10,
        publicKey: ethereumWallet.publicKey,
        mintAddress: "",
      };
      const bitcoinToken: SingleToken = {
        tokenName: TokenName.bitcoin,
        tokenImage: WalletImgLocation.bitcoin,
        balance: 0,
        publicKey: bitcoinWallet.publicKey,
        mintAddress: "",
      };

      const tokens = [solanaToken, ethreumToken, bitcoinToken];

      const account: Account = {
        accountName: currentInput ?? "",
        accountNumber: currentAccountIndex,
        tokens,
      };
      addAccount(account);
      router.push(`/(tabs)/wallet/${0}`);
    }
  };

  return (
    <SingleInput
      title="New Account Name"
      buttonText="ADD ACCOUNT"
      onPress={() => {
        handleOnPress();
      }}
      placeholder="Enter the account name"
      key="SetAccountName"
    />
  );
};

export default SetAccountName;
