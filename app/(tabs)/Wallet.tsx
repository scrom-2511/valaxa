import CardOverview from "@/components/CardOverview";
import React from "react";
import { Platform, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Wallet = () => {
  const isWeb = Platform.OS === "web";
  return (
    <SafeAreaView className="flex-1 bg-bgDark">
      <ScrollView contentContainerClassName={isWeb ? "flex-1 items-center" : " items-strech"}>
        <View className={isWeb ? "max-w-[1000px] h-full" : "flex-1"}>
          <CardOverview/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wallet;
