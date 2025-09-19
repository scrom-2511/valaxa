import CardOverview from "@/components/CardOverview";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Platform, Pressable, ScrollView, Text, useWindowDimensions, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";

const YourAccounts = () => {
  const isWeb = Platform.OS === "web";
  const { width } = useWindowDimensions();
  const widthGreaterThan1000 = width > 1000 ? true : false;
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-bgDark">
      <ScrollView contentContainerClassName={isWeb ? "flex-1 items-center" : "items-strech"}>
        <View className={isWeb ? "w-full max-w-[1000px] h-full" : "flex-auto"}>
          <Text className="text-text px-5 font-robotoBold mt-5" style={{fontSize: widthGreaterThan1000 ? 24 : RFPercentage(2)}}>PORTFOLIO OVERVIEW</Text>
          <View className="flex-row flex-wrap gap-5 p-5">
            <CardOverview></CardOverview>
            <CardOverview></CardOverview>
            <CardOverview></CardOverview>
            <CardOverview></CardOverview>
          </View>
          <View className="flex-col p-5 gap-5">
            <View className="flex-row justify-between items-center">
              <Text className="text-text text-xl font-bold" style={{fontSize: widthGreaterThan1000 ? 15 : RFPercentage(1.5)}}>CONNECTED ACCOUNTS</Text>
              <Pressable className="bg-bgPrimaryBtn p-2 px-3 rounded-md">
                <Text className="text-text font-roboto" style={{fontSize: widthGreaterThan1000 ? 13 : RFPercentage(1)}} onPress={()=>{router.push("/(tabs)/AccountCreation")}}>ADD ACCOUNT</Text>
              </Pressable>
            </View>
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
