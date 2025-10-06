import HeaderCommon from "@/components/HeaderCommon";
import InitializeComponent from "@/components/InitializeComponent";
import ListOptions from "@/components/ListOptions";
import { ScanQrCode } from "lucide-react-native";
import React from "react";

const Send = () => {
  const listOptions = [
    {
      title: "Scan QR Code",
      desc: "Quickly scan a QR code to send tokens — no need to manually select a token or enter the amount.",
      icon: ScanQrCode,
      onPress: () => console.log("done"),
    },
    {
      title: "Send Using Public Key",
      desc: "Manually enter the recipient’s public key to send tokens.",
      icon: ScanQrCode,
      onPress: () => console.log("done"),
    },
  ];

  return (
    <InitializeComponent scrollable={false}>
      <HeaderCommon title="Send Tokens" placeholder="How would you like to send the tokens?" />
      {listOptions.map((item, index) => (
        <ListOptions key={index} title={item.title} desc={item.desc} icon={item.icon} onPress={item.onPress} />
      ))}
    </InitializeComponent>
  );
};

export default Send;
