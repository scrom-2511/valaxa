import { useSelectedAccountDetails } from "@/app/zustand/store";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

const BalanceCardWallet = () => {
  const { totalUsdValue } = useSelectedAccountDetails();
  return (
    <View className="flex-row flex-wrap gap-5 mt-5">
    <LinearGradient
      colors={["#2a2e32", "#212529"]}
      className="h-48 flex-auto min-w-[40%] justify-center items-center px-7"
      style={{ borderRadius: 16 }}
    >
      <Text className="text-textMuted font-roboto pb-1">TOTAL BALANCE</Text>
      <Text className="text-text font-poppinsBold">{totalUsdValue ? totalUsdValue.toFixed(2): "null"}</Text>
    </LinearGradient>
  </View>
  )
};

export default BalanceCardWallet;
