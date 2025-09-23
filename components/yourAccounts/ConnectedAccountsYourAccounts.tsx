import { useAccountStore } from "@/app/zustand/store";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const ConnectedAccountsYourAccounts = () => {
  const router = useRouter();
  const { accounts } = useAccountStore();
  return (
    <View className="flex-col p-5 gap-5">
      <View className="flex-row justify-between items-center">
        <Text className="text-text text-xl font-bold">CONNECTED ACCOUNTS</Text>
        <Pressable className="bg-bgPrimaryBtn p-2 px-3 rounded-md">
          <Text
            className="text-text font-roboto"
            onPress={() => {
              router.push("/(tabs)/AccountCreation");
            }}
          >
            ADD ACCOUNT
          </Text>
        </Pressable>
      </View>

      {accounts.map((account) => (
        <EachAccount accountName={account.accountName} key={account.accountNumber} />
      ))}
    </View>
  );
};

export default ConnectedAccountsYourAccounts;

const EachAccount = ({ accountName }: { accountName: string }) => {
  return (
    <View className="bg-bgMedium flex-row h-32 w-full rounded-2xl items-center justify-between px-10">
      <View className="flex-row items-center gap-5">
        {/* <Image></Image> */}
        <View className="h-10 w-10 bg-text rounded-md"></View>
        <Text className="text-text text-lg">{accountName}</Text>
      </View>
      <View>
        <Image></Image>
        <View className="h-10 w-10 bg-text rounded-md"></View>
      </View>
    </View>
  );
};
