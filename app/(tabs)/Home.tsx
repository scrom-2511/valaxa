import InitializeComponent from "@/components/InitializeComponent";
import { useRouter } from "expo-router";
import React from "react";
import { Platform, Pressable, Text, useWindowDimensions, View } from "react-native";

const Home = () => {
  const isWeb = Platform.OS === "web";
  const { width } = useWindowDimensions();
  const widthGreaterThan1000 = width > 1000 ? true : false;
  const router = useRouter()
  return (
    <InitializeComponent scrollable={false} >
          <Text>APP NAME</Text>
          <View className="flex-col">

            <Pressable className="m-5 border border-white p-5" onPress={() => {router.push("/(tabs)/AccountCreation")}}>
              <Text className="text-text">CREATE AN ACCOUNT</Text>
            </Pressable>
          </View>
        </InitializeComponent>
  );
};

export default Home;