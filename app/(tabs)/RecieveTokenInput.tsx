import SingleInput from "@/components/SingleInput";
import { useRouter } from "expo-router";
import React from "react";
import { useSelectedAccountDetails } from "../zustand/store";

const RecieveTokenInput = () => {
  const router = useRouter();
  const { selectedToken } = useSelectedAccountDetails();
  return (
    <SingleInput
      buttonText="Continue"
      title={`Recieve ${selectedToken.tokenName}`}
      placeholder="Enter the amount you want to receive, or leave it blank to let the sender specify the amount."
      onPress={() => router.push("/(tabs)/ReceiveTokenQR")}
    />
  );
};

export default RecieveTokenInput;
