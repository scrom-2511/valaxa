import SingleInput from "@/components/SingleInput";
import { createAccount } from "@/utils/createAccount";
import { router } from "expo-router";
import React from "react";
import { useAccountStore, useSingleInputStore } from "../zustand/store";

const WatchAccountOption = () => {
  const { currentInput } = useSingleInputStore();
  const { currentAccountIndex } = useAccountStore();

  const handleOnClick = async () => {
    const pubKey = currentInput?.trim();
    if (!pubKey) return;
    await createAccount(pubKey);
    router.push(`/(tabs)/wallet/${currentAccountIndex}`);
  };

  return <SingleInput title="Watch An Account" placeholder="Enter the public key:" buttonText="WATCH ACCOUNT" onPress={handleOnClick} />;
};

export default WatchAccountOption;
