import { useSolanaSplTokens } from "@/app/hooks/useSolanaSplTokens";
import { Account, useAccountStore, useSelectedAccountDetails } from "@/app/zustand/store";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { EachAccount } from "../EachAccount";

const ConnectedAccountsYourAccounts = () => {
  const router = useRouter();
  const { accounts, addTokens } = useAccountStore();
  const { selectedAccount, setSelectedAccountDetails } = useSelectedAccountDetails();
  const [selectedPubKey, setSelectedPubKey] = useState<string | null>(null);
  const { data: splTokensData } = useSolanaSplTokens(selectedPubKey || "");
  const handleOnClick = (account: Account) => {
    // const solanaPubKey = account.tokens.find(
    //   (token) => token.tokenName === TokenName.solana
    // )?.publicKey;

    // if (!solanaPubKey) return;

    // setSelectedPubKey(solanaPubKey);
    // if (splTokensData) {
    //   addTokens(account.accountNumber, splTokensData);
    // }
    // account.tokens.forEach((token)=>(
    //   connWebSocket(token.publicKey, solanaConnectionWs)
    // ))
    setSelectedAccountDetails(account);
    router.push(`/(tabs)/wallet/${account.accountNumber}`);
  };

  return (
    <View className="flex-col p-5 gap-5">
      <View className="flex-row justify-between items-center">
        <Text className="text-text text-xl font-bold">CONNECTED ACCOUNTS</Text>
        <Pressable className="bg-bgPrimaryBtn p-2 px-3 rounded-md">
          <Text
            className="text-text font-roboto"
            onPress={() => {
              router.push("/(tabs)/AccountCreation");
            }}
          >
            ADD ACCOUNT
          </Text>
        </Pressable>
      </View>

      {accounts.map((account) => (
        <EachAccount
          accountName={account.accountName}
          key={account.accountNumber}
          onPress={() => {
            handleOnClick(account);
          }}
        />
      ))}
    </View>
  );
};

export default ConnectedAccountsYourAccounts;
