import React from "react";
import { Platform, ScrollView, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const InitializeComponent = ({ children, scrollable }: { children: React.ReactNode, scrollable:boolean }) => {
  const isWeb = Platform.OS === "web";
  const { width } = useWindowDimensions();
  const widthGreaterThan1000 = width > 1000;

  return (
    <SafeAreaView className="flex-1 bg-bgDark">
      <ScrollView contentContainerClassName={isWeb ? "flex-1 items-center m-5 my-10" : scrollable ? "items-stretch m-5" : "flex-1 items-stretch m-5"}>
        <View className={isWeb ? "w-full max-w-[1000px] h-full px-5" : "flex-1"}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InitializeComponent;
