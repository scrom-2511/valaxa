import HeaderCommon from "@/components/HeaderCommon";
import InitializeComponent from "@/components/InitializeComponent";
import React from "react";
import { Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { useSelectedAccountDetails, useSingleInputStore } from "../zustand/store";
const ReceiveTokenQR = () => {
  const { selectedToken } = useSelectedAccountDetails();
  const { currentInput } = useSingleInputStore();
  const value = {publicKey: selectedToken.publicKey, amount: currentInput ? currentInput : -1}
  return (
    <InitializeComponent scrollable={false}>
      <HeaderCommon title={`Recieve ${selectedToken.tokenName}`} />
      <View className="flex items-center my-16">
        <QRCode backgroundColor="hsl(220, 6%, 10%)" value={JSON.stringify(value)} color="hsl(0 0% 95%)" size={170}></QRCode>
      <Text className="text-text font-poppins text-md my-10">Scan the QR to recieve your solana.</Text>
      </View>
      <View className="border border-textMuted p-5 rounded-2xl">
        <Text className="text-text font-poppinsSemiBold text-md mb-2 uppercase">Your public key:</Text>
        <Text className="text-text">{selectedToken.tokenName}</Text>
      </View>
    </InitializeComponent>
  );
};

export default ReceiveTokenQR;
