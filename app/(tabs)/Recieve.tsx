import { EachAccount } from "@/components/EachAccount";
import InitializeComponent from "@/components/InitializeComponent";
import { TokenName } from "@/types/types";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

const Recieve = () => {
  const router = useRouter();
  return (
    <InitializeComponent scrollable={false}>
      <View className="flex-col h-full">
        <View className="flex-col">
          <Text className="text-text font-poppinsSemiBold text-3xl mt-5">Recieve Tokens</Text>
          <Text className="text-text font-poppins text-md mt-2 mb-5">Which token you want to receive?</Text>
        </View>
        <View className="flex-col gap-5">
          <EachAccount accountName={TokenName.solana} onPress = {() =>{router.push(`/(tabs)/RecieveTokenInput`)}}/>
          <EachAccount accountName={TokenName.ethereum} onPress = {() =>{router.push(`/(tabs)/RecieveTokenInput`)}}/>
          <EachAccount accountName={TokenName.bitcoin} onPress = {() =>{router.push(`/(tabs)/RecieveTokenInput`)}}/>
        </View>
      <QRCode value="www.google.com" color="red"></QRCode>
      </View>
    </InitializeComponent>
  );
};

export default Recieve;
