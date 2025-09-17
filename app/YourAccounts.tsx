import CardOverview from "@/components/CardOverview";
import React from "react";
import { Image, Platform, ScrollView, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const YourAccounts = () => {
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === "web";

  return (
    <SafeAreaView className="flex-1 bg-bgDark">
      <ScrollView contentContainerClassName={isWeb ? "flex-1 items-center" : " items-strech"}>
        <View className={isWeb ? "max-w-[1000px] h-full" : "flex-1"}>
          <Text
            className="text-text text-2xl px-5 font-robotoBold mt-5">
            PORTFOLIO OVERVIEW
          </Text>
          <View className="flex-row flex-wrap gap-5 p-5">
            <CardOverview></CardOverview>
            <CardOverview></CardOverview>
            <CardOverview></CardOverview>
            <CardOverview></CardOverview>
          </View>
          <View className="flex-col p-5 gap-5">
            <Text className="text-text text-lg font-bold">CONNECTED ACCOUNTS</Text>
            <View className="bg-bgMedium flex-row h-32 w-full rounded-2xl items-center justify-between px-10">
              <View className="flex-row items-center gap-5">
                {/* <Image></Image> */}
                <View className="h-10 w-10 bg-text rounded-md"></View>
                <Text className="text-text text-lg">Account Name</Text>
              </View>
              <View>
                <Image></Image>
                <View className="h-10 w-10 bg-text rounded-md"></View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default YourAccounts;
