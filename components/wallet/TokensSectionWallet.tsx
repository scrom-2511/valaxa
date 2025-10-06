import { useAccountStore } from "@/app/zustand/store";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import EachToken from "../EachToken";

const TokensSectionWallet = () => {
  const { accounts } = useAccountStore();
  const { id } = useLocalSearchParams();
  return (
    <View className="flex-col">
      <Text className="text-text text-xl font-bold pt-10 mb-5">TOKENS</Text>
      {accounts.map((account, index) => account.accountNumber === Number(id) && account.tokens.map((token) => <EachToken token={token} />))}
    </View>
  );
};

export default TokensSectionWallet;
