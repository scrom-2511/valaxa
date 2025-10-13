import HeaderCommon from "@/components/HeaderCommon";
import InitializeComponent from "@/components/InitializeComponent";
import React from "react";
import { Text, View } from "react-native";

const ManualSendDetails = () => {
  return (
    <InitializeComponent scrollable={false}>
      <HeaderCommon title="Send Tokens" />
      <Text className="text-text font-poppinsSemiBold text-md mb-2 mt-5">Transaction Details</Text>
      <EachDetail/>
      <EachDetail/>
      <EachDetail/>
    </InitializeComponent>
  );
};

export default ManualSendDetails;

const EachDetail = () => {
  return (
    <View className="flex-row justify-between">
      <Text className="text-text font-poppinsSemiBold text-md mb-2">To</Text>
      <Text className="text-text font-poppins text-md mb-2">To</Text>
    </View>
  );
};
