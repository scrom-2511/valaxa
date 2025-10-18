import { useSelectedAccountDetails } from "@/app/zustand/store";
import { getCoinBalance, getTokenBalanceUsd } from "@/reqHandlers/getBalanceInUsd";
import { TokenName } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import EachToken from "../EachToken";

const TokensSectionWallet = () => {
  const { updateUsdValue, selectedAccount } = useSelectedAccountDetails();
  const thisAccount = selectedAccount;

  // useEffect(() => {
  //   console.log(selectedAccount.tokens);
  // }, [selectedAccount]);
  const allCoins = thisAccount?.tokens.filter((token) => !token.isDerivedToken).map((token) => token.tokenName?.toLowerCase());

  const allSolanaDerivedTokens = thisAccount?.tokens
    .filter((token) => token.isDerivedToken && token.tokenName === TokenName.solana)
    .map((token) => token.tokenAddress);

  const allEthereumDerivedTokens = thisAccount?.tokens
    .filter((token) => token.isDerivedToken && token.tokenName === TokenName.ethereum)
    .map((token) => token.tokenAddress);

  const { data: coinBalance } = useQuery({
    queryKey: ["getSolanaBalance", { allCoins }],
    queryFn: () => getCoinBalance(allCoins as string[]),
    enabled: Array.isArray(allCoins) && allCoins.length > 0,
    refetchInterval: allCoins && allCoins.length > 0 ? 10000 : false,
  });

  const { data: allSolanaDerivedTokensBalanceUsd } = useQuery({
    queryKey: ["allSolanaDerivedTokensBalanceUsd", { allSolanaDerivedTokens }],
    queryFn: () => getTokenBalanceUsd(TokenName.solana.toLowerCase(), allSolanaDerivedTokens as string[]),
    enabled: Array.isArray(allSolanaDerivedTokens) && allSolanaDerivedTokens.length > 0,
    refetchInterval: allSolanaDerivedTokens && allSolanaDerivedTokens.length > 0 ? 10000 : false,
  });

  const { data: allEthereumDerivedTokensBalanceUsd } = useQuery({
    queryKey: ["allEthereumDerivedTokensBalanceUsd", { allEthereumDerivedTokens }],
    queryFn: () => getTokenBalanceUsd(TokenName.ethereum.toLowerCase(), allEthereumDerivedTokens as string[]),
    enabled: Array.isArray(allEthereumDerivedTokens) && allEthereumDerivedTokens.length > 0,
    refetchInterval: allEthereumDerivedTokens && allEthereumDerivedTokens.length > 0 ? 10000 : false,
  });

  useEffect(() => {
    if (!thisAccount) return;
    console.log("coinBalance:", coinBalance);
    console.log("allCoins:", allCoins);
    console.log("thisAccount.tokens:", thisAccount.tokens);

    if (coinBalance && allCoins) {
      thisAccount.tokens.forEach((token) => {
        const tokenName = token.tokenName?.toLowerCase()!;
        if (allCoins.includes(tokenName)) {
          const tokenData = coinBalance[tokenName];
          console.log("tokendata.usd   ", tokenData.usd);
          console.log("tokendata.pubkey   ", token.publicKey);
          if (tokenData) {
            updateUsdValue(token.publicKey, Number(tokenData.usd));
          }
        }
      });
    }

    if (allSolanaDerivedTokensBalanceUsd && allSolanaDerivedTokens) {
      thisAccount.tokens.forEach((token) => {
        const tokenAddress = token.tokenAddress as string;
        if (allSolanaDerivedTokens.includes(tokenAddress)) {
          const tokenData = allSolanaDerivedTokensBalanceUsd[tokenAddress];
          if (tokenData) {
            updateUsdValue(token.publicKey, Number(tokenData.usd));
          }
        }
      });
    }

    if (allEthereumDerivedTokensBalanceUsd && allEthereumDerivedTokens) {
      thisAccount.tokens.forEach((token) => {
        const tokenAddress = token.tokenAddress as string;
        if (allEthereumDerivedTokens.includes(tokenAddress)) {
          const tokenData = allEthereumDerivedTokensBalanceUsd[tokenAddress];
          if (tokenData) {
            updateUsdValue(token.publicKey, Number(tokenData.usd));
          }
        }
      });
    }
  }, [coinBalance, allSolanaDerivedTokensBalanceUsd, allEthereumDerivedTokensBalanceUsd]);

  if (!thisAccount) {
    return (
      <View className="flex-col">
        <Text className="text-text text-xl font-bold pt-10 mb-5">Account not found.</Text>
      </View>
    );
  }

  const tokensWithBalance = thisAccount.tokens?.filter((token) => token.balance > 0);

  if (!tokensWithBalance || tokensWithBalance.length === 0) {
    return (
      <View className="flex-col">
        <Text className="text-text text-xl font-bold pt-10 mb-5">There are no tokens.</Text>
      </View>
    );
  }

  return (
    <View className="flex-col">
      <Text className="text-text text-xl font-bold pt-10 mb-5">TOKENS</Text>
      {tokensWithBalance.map((token) => (
        <EachToken key={token.tokenName} token={token} />
      ))}
    </View>
  );
};

export default TokensSectionWallet;
