import { useRouter } from "expo-router";
import React from "react";
import { Platform, Pressable, ScrollView, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const isWeb = Platform.OS === "web";
  const { width } = useWindowDimensions();
  const widthGreaterThan1000 = width > 1000 ? true : false;
  const router = useRouter()
  return (
    <SafeAreaView className="flex-1 bg-bgDark">
      <ScrollView contentContainerClassName={isWeb ? "flex-1 items-center" : " items-strech"}>
        <View className={isWeb ? "w-full max-w-[1000px] h-full px-10" : "flex-1 px-10"}>
          <Text>APP NAME</Text>
          <View className="flex-col">
            <Pressable className="m-5 border border-white p-5" onPress={() => {router.push("/(tabs)/AccountCreation")}}>
              <Text className="text-text">CREATE AN ACCOUNT</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
