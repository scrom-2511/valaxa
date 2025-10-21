import SingleInput from "@/components/SingleInput";
import { createAccount } from "@/utils/createAccount";
import { derivePubKeyFromPriKey } from "@/utils/derivePubKeyFromPriKey";
import { router } from "expo-router";
import React from "react";
import { useAccountStore, useSingleInputStore } from "../zustand/store";

const ImportKeyOption = () => {
  const { currentInput } = useSingleInputStore();
  const { currentAccountIndex } = useAccountStore();
  
  const handleOnClick = async () => {
    if (!currentInput) return;
    const publicKey = derivePubKeyFromPriKey(currentInput);
    await createAccount(publicKey!);
    router.push(`/(tabs)/wallet/${currentAccountIndex}`);
  };
  return <SingleInput title="Import Private Key" placeholder="Enter your private key:" buttonText="IMPORT ACCOUNT" onPress={handleOnClick} />;
};

export default ImportKeyOption;