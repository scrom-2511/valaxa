import SingleInput from "@/components/SingleInput";
import { getTokenAccounts } from "@/reqHandlers/getAllTokens";
import { getBalanceSolana } from "@/reqHandlers/getBalance";
import { CoinAddress, TokenName, WalletImgLocation } from "@/types/types";
import { router } from "expo-router";
import React, { useState } from "react";
import { Account, useAccountStore, useSingleInputStore } from "../zustand/store";

const WatchAccountOption = () => {
  const [selectedPubKey, setSelectedPubKey] = useState<string | null>(null);
  const { currentInput } = useSingleInputStore();
  const { accounts, setAccount, addAccount, addTokens, currentAccountIndex } = useAccountStore();
  // const { data: accountBalance, refetch } = useQuery({ queryKey: ["getBalanceSolana"], queryFn: () => getBalanceSolana(selectedPubKey!) });

  const handleOnClick = async () => {
    const pubKey = currentInput?.trim();
    if (!pubKey) return;

    if (pubKey.startsWith("0x")) {
      // handle EVM addresses later
      return;
    } else {
      const accountBalance = await getBalanceSolana(pubKey);
      const accountIndexToReplaceWith = accounts.findIndex((account) => account.accountNumber === currentAccountIndex);

      if (accountIndexToReplaceWith === -1 || typeof accountBalance !== "number") return;

      const accountToReplace: Account = {
        ...accounts[accountIndexToReplaceWith],
        tokens: [
          {
            balance: accountBalance,
            publicKey: pubKey,
            tokenImage: WalletImgLocation.solana,
            tokenName: TokenName.solana,
            chain: TokenName.solana,
            isDerivedToken: false,
            usdValue: -1,
            tokenAddress: CoinAddress.solana,
          },
        ],
      };

      const updatedAccounts = [...accounts];
      updatedAccounts[accountIndexToReplaceWith] = accountToReplace;

      setAccount(updatedAccounts, currentAccountIndex);

      const splTokensData = await getTokenAccounts(pubKey);
      if (splTokensData) {
        addTokens(currentAccountIndex, splTokensData);
      }
    }

    router.push(`/(tabs)/wallet/${currentAccountIndex}`);
  };

  return <SingleInput title="Watch An Account" placeholder="Enter the public key:" buttonText="WATCH ACCOUNT" onPress={handleOnClick} />;
};

export default WatchAccountOption;
