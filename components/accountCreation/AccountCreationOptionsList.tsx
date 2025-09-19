import AccountCreationOptions from "@/components/AccountCreationOptions";
import { useRouter } from "expo-router";
import { FolderInput, Key, LucideView, Plus } from "lucide-react-native";
import React from "react";
import { View } from "react-native";

const AccountCreationOptionsList = () => {
  const router = useRouter();

  const options = [
    {
      title: "Create New Account",
      desc: "Add a new multi-chain account",
      onPress: () => router.push("/(tabs)/MnemonicCreationOption"),
      icon: Plus,
    },
    {
      title: "Import Private Key",
      desc: "Add a new single-chain account",
      onPress: () => router.push("/(tabs)/ImportKeyOption"),
      icon: Key,
    },
    {
      title: "Watch An Account",
      desc: "Add a new account which you can watch but not sign any transactions.",
      onPress: () => router.push("/(tabs)/WatchAccountOption"),
      icon: LucideView,
    },
    {
      title: "Import From Mnemonic",
      desc: "Import accounts from another wallet",
      onPress: () => router.push("/(tabs)/MnemonicInputOption"),
      icon: FolderInput,
    },
  ];

  return (
    <View className="flex-auto gap-5">
      {options.map((option, index) => (
        <AccountCreationOptions
          key={index}
          title={option.title}
          desc={option.desc}
          onPress={option.onPress}
          icon={option.icon}
        />
      ))}
    </View>
  );
};

export default AccountCreationOptionsList;