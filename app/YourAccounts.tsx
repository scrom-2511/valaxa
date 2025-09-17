import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Platform, Pressable, ScrollView, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const YourAccounts = () => {
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === "web";
  const cardWidth = isWeb ? "min-w-80" : "min-w-44";
  return (
    <SafeAreaView className="flex-1 bg-bgDark">
      <ScrollView contentContainerClassName={isWeb ? "flex-1 items-center" : " items-strech"}>
        <View className={isWeb ? "max-w-[1000px] h-full" : "flex-1"}>
          <View className="flex-row flex-wrap gap-5 p-5">
            <LinearGradient
              colors={["hsl(0 0% 10%)", "hsl(0 0% 0%)"]}
              className={`h-32 ${cardWidth} rounded-2xl border-[hsl(0_0%_20%)] border border-t border-t-[hsl(0_0%_40%)] flex-1 justify-center px-5`}
            >
              <Text className="text-textMuted font-roboto font-bold pb-3">BITCOIN</Text>
              <Text className="text-text text-3xl font-roboto font-bold ">
                $98769 <Text className="text-textMuted text-sm">≈78 BTC</Text>
              </Text>
              <Text className="text-textMuted font-roboto font-light">Across x accounts</Text>
            </LinearGradient>
            <LinearGradient
              colors={["hsl(0 0% 10%)", "hsl(0 0% 0%)"]}
              className={`h-32 ${cardWidth} rounded-2xl border-[hsl(0_0%_20%)] border border-t border-t-[hsl(0_0%_40%)] flex-1 justify-center px-5`}
            >
              <Text className="text-textMuted font-roboto font-bold pb-3">BITCOIN</Text>
              <Text className="text-text text-3xl font-roboto font-bold ">
                $98769 <Text className="text-textMuted text-sm">≈78 BTC</Text>
              </Text>
              <Text className="text-textMuted font-roboto font-light">Across x accounts</Text>
            </LinearGradient>
            <LinearGradient
              colors={["hsl(0 0% 10%)", "hsl(0 0% 0%)"]}
              className={`h-32 ${cardWidth} rounded-2xl border-[hsl(0_0%_20%)] border border-t border-t-[hsl(0_0%_40%)] flex-1 justify-center px-5`}
            >
              <Text className="text-textMuted font-roboto font-bold pb-3">BITCOIN</Text>
              <Text className="text-text text-3xl font-roboto font-bold ">
                $98769 <Text className="text-textMuted text-sm">≈78 BTC</Text>
              </Text>
              <Text className="text-textMuted font-roboto font-light">Across x accounts</Text>
            </LinearGradient>
            <LinearGradient
              colors={["hsl(0 0% 10%)", "hsl(0 0% 0%)"]}
              className={`h-32 ${cardWidth} rounded-2xl border-[hsl(0_0%_20%)] border border-t border-t-[hsl(0_0%_40%)] flex-1 justify-center px-5`}
            >
              <Text className="text-textMuted font-roboto font-bold pb-3">BITCOIN</Text>
              <Text className="text-text text-3xl font-roboto font-bold ">
                $98769 <Text className="text-textMuted text-sm">≈78 BTC</Text>
              </Text>
              <Text className="text-textMuted font-roboto font-light">Across x accounts</Text>
            </LinearGradient>
          </View>
          <View className="flex-col p-5 gap-5">
            <View className="flex-row justify-between items-center">
              <Text className="text-white text-xl font-bold uppercase font-roboto">Your Accounts</Text>
              <Pressable className="bg-[hsl(0_0%_10%)] rounded-xl px-4 py-3 items-center" onPress={() => console.log("Add account")}>
                <Text className="text-white font-bold">Add Account</Text>
              </Pressable>
            </View>
            <View className="bg-bgMedium flex-row h-[70px] w-full rounded-2xl items-center px-10">
              <Image></Image>
              <Text className="text-text text-lg">Account Name</Text>
            </View>
            <View className="bg-bgMedium flex-row h-[70px] w-full rounded-2xl items-center px-10">
              <Image></Image>
              <Text className="text-text text-lg">Account Name</Text>
            </View>
            <View className="bg-bgMedium flex-row h-[70px] w-full rounded-2xl items-center px-10">
              <Image></Image>
              <Text className="text-text text-lg">Account Name</Text>
            </View>
            <View className="bg-bgMedium flex-row h-[70px] w-full rounded-2xl items-center px-10">
              <Image></Image>
              <Text className="text-text text-lg">Account Name</Text>
            </View>
            <View className="bg-bgMedium flex-row h-[70px] w-full rounded-2xl items-center px-10">
              <Image></Image>
              <Text className="text-text text-lg">Account Name</Text>
            </View>
            <View className="bg-bgMedium flex-row h-[70px] w-full rounded-2xl items-center px-10">
              <Image></Image>
              <Text className="text-text text-lg">Account Name</Text>
            </View>
            <View className="bg-bgMedium flex-row h-[70px] w-full rounded-2xl items-center px-10">
              <Image></Image>
              <Text className="text-text text-lg">Account Name</Text>
            </View>
            <View className="bg-bgMedium flex-row h-[70px] w-full rounded-2xl items-center px-10">
              <Image></Image>
              <Text className="text-text text-lg">Account Name</Text>
            </View>
            <View className="bg-bgMedium flex-row h-[70px] w-full rounded-2xl items-center px-10">
              <Image></Image>
              <Text className="text-text text-lg">Account Name</Text>
            </View>
            <View className="bg-bgMedium flex-row h-[70px] w-full rounded-2xl items-center px-10">
              <Image></Image>
              <Text className="text-text text-lg">Account Name</Text>
            </View>
            <View className="bg-bgMedium flex-row h-[70px] w-full rounded-2xl items-center px-10">
              <Image></Image>
              <Text className="text-text text-lg">Account Name</Text>
            </View>
            <View className="bg-bgMedium flex-row h-[70px] w-full rounded-2xl items-center px-10">
              <Image></Image>
              <Text className="text-text text-lg">Account Name</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default YourAccounts;
