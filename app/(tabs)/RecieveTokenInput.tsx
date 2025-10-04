import SingleInput from "@/components/SingleInput";
import { TokenName } from "@/types/types";
import { useRouter } from "expo-router";
import React from "react";

const RecieveTokenInput = () => {
  const router = useRouter();
  return (
    <SingleInput
      buttonText="Continue"
      title={`Recieve ${TokenName.solana}`}
      placeholder="Enter the amount you wish to receive, or leave it blank to let the sender specify the amount."
      onPress={() => router.push("/(tabs)/ReceiveTokenQR")}
    />
  );
};

export default RecieveTokenInput;
