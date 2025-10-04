import HeaderCommon from "@/components/HeaderCommon";
import InitializeComponent from "@/components/InitializeComponent";
import React from "react";
import { Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
const ReceiveTokenQR = () => {
  return (
    <InitializeComponent scrollable={false}>
      <HeaderCommon title="Receive Solana" />
      <View className="flex items-center my-16">
        <QRCode backgroundColor="hsl(220, 6%, 10%)" value="www.google.com" color="hsl(0 0% 95%)" size={170}></QRCode>
      <Text className="text-text font-poppins text-md my-10">Scan the QR to recieve your solana.</Text>
      </View>
      <View className="border border-textMuted p-5 rounded-2xl">
        <Text className="text-text font-poppinsSemiBold text-md mb-2 uppercase">Your public key:</Text>
        <Text className="text-text">929240e58d3ce3a03974c3b8d54397e03ff28ee2a781f77ff13d7ef6a57959bc</Text>
      </View>
    </InitializeComponent>
  );
};

export default ReceiveTokenQR;
