import SingleInput from "@/components/SingleInput";
import { TokenName, WalletImgLocation } from "@/types/types";
import { generateMnemonic } from "@/utils/Bip39";
import { bitcoinWalletGenerator } from "@/utils/bitcoinWalletGenerator";
import { ethereumWalletGenerator } from "@/utils/ethereumWalletGenerator";
import { solanaWalletGenerator } from "@/utils/solana/walletGeneratorSolana";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Account, SingleToken, useAccountStore, useSingleInputStore } from "../zustand/store";

const SetAccountName = () => {
  const router = useRouter();
  const { currentAccountIndex, accounts, addAccount } = useAccountStore();
  const { currentInput } = useSingleInputStore();

  const handleOnPress = async () => {
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
      accountName: currentInput,
      accountNumber: currentAccountIndex,
      tokens,
    };
    addAccount(account, currentAccountIndex + 1);
    router.push(`/(tabs)/wallet/${0}`);
  };

  useEffect(() => {
    console.log(accounts);
  }, [accounts]);
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
