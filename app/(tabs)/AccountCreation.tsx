import AccountCreationOptions from "@/components/AccountCreationOptions";
import { useRouter } from "expo-router";
import { FolderInput, Key, LucideView, Plus } from "lucide-react-native";
import React from "react";
import { Platform, ScrollView, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountCreation = () => {
  const isWeb = Platform.OS === "web";
  const { width } = useWindowDimensions();
  const widthGreaterThan1000 = width > 1000 ? true : false;
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-bgDark">
      <ScrollView contentContainerClassName={isWeb ? "flex-1 items-center m-5 my-10" : "flex-1 items-strech m-5"}>
        <View className={isWeb ? "w-full max-w-[1000px] h-full px-5" : "flex-1"}>
          <Text className="text-text font-poppinsSemiBold text-2xl mb-5 text-center">HOW WOULD YOU LIKE TO CREATE THE ACCOUNT?</Text>
          <Text className="text-textMuted font-poppins text-md mb-5 text-center">Choose the method that works the best for you.</Text>
          <View className="flex-auto gap-5">
            <AccountCreationOptions
              title="Create New Account"
              desc="Add a new multi-chain account"
              onPress={() => router.push("/(tabs)/MnemonicCreationOption")}
              icon={Plus}
            />
            <AccountCreationOptions
              title="Import Private Key"
              desc="Add a new single-chain account"
              onPress={() => router.push("/(tabs)/ImportKeyOption")}
              icon={Key}
            />
            <AccountCreationOptions
              title="Watch An Account"
              desc="Add a new account which you can watch but not sign any transactions."
              onPress={() => router.push("/(tabs)/WatchAccountOption")}
              icon={LucideView}
            />
            <AccountCreationOptions
              title="Import From Mnemonic"
              desc="Import accounts from another wallet"
              onPress={() => router.push("/(tabs)/MnemonicInputOption")}
              icon={FolderInput}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountCreation;
