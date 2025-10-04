import React from "react";
import { Platform, ScrollView, useWindowDimensions, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const InitializeComponent = ({ children, scrollable }: { children: React.ReactNode; scrollable: boolean }) => {
  const isWeb = Platform.OS === "web";
  const { width } = useWindowDimensions();
  const widthGreaterThan1000 = width > 1000;

  return (
    <View className="flex-1 bg-bgDark">
      <SafeAreaProvider className="flex-1 bg-bgDark">
        {scrollable ? (
          <ScrollView contentContainerClassName={isWeb ? "flex-1 items-center m-5 my-10" : "items-stretch m-5"}>
            <View className={isWeb ? "w-full max-w-[1000px] h-full px-5" : "flex-1"}>{children}</View>
          </ScrollView>
        ) : (
          <View className={isWeb ? "flex-1 items-center justify-center m-5 my-10" : "flex-1 items-stretch m-5"}>
            <View className={isWeb ? "w-full max-w-[1000px] h-full px-5" : "flex-1"}>{children}</View>
          </View>
        )}
      </SafeAreaProvider>
    </View>
  );
};

export default InitializeComponent;
