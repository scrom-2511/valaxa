import EachToken from "@/components/EachToken";
import InitializeComponent from "@/components/InitializeComponent";
import { TokenName } from "@/types/types";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useAccountStore, useSelectedAccountDetails } from "../zustand/store";

const Recieve = () => {
  const router = useRouter();
  const { accounts } = useAccountStore();
  const { selectedAccount, setSelectedAccountDetails } = useSelectedAccountDetails();
  const handleOnPress = (tokenName:TokenName) => {
    router.push(`/(tabs)/RecieveTokenInput`)
  }
  return (
    <InitializeComponent scrollable={false}>
      <View className="flex-col h-full">
        <View className="flex-col">
          <Text className="text-text font-poppinsSemiBold text-3xl mt-5">Recieve Tokens</Text>
          <Text className="text-text font-poppins text-md mt-2 mb-5">Which token you want to receive?</Text>
        </View>
        <View className="flex-col">
      <Text className="text-text text-xl font-bold pt-10 mb-5">TOKENS</Text>
      {accounts.map((account, index) => account.accountNumber === selectedAccount.accountNumber && account.tokens.map((token) => <EachToken token={token} />))}
    </View>
      </View>
    </InitializeComponent>
  );
};

export default Recieve;
