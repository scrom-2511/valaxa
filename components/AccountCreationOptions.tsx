import React from "react";
import { Platform, Text, useWindowDimensions, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const AccountCreationOptions = ({ title, desc }: { title: string; desc: string }) => {
  const isWeb = Platform.OS === "web";
  const { width } = useWindowDimensions();
  const widthGreaterThan1000 = width > 1000 ? true : false;
  return (
    <View className="bg-bgMedium flex-auto w-full rounded-2xl justify-center px-10">
      <View className="flex-row items-center gap-5">
        {/* <Image></Image> */}
        <View className="h-10 w-10 bg-text rounded-md"></View>
        <View className="flex-col">
          <Text className="text-text font-robotoLight" style={{ fontSize: widthGreaterThan1000 ? 20 : RFPercentage(2.1) }}>
            {title}
          </Text>
          <Text className="text-textMuted text-md" style={{ fontSize: widthGreaterThan1000 ? 18 : RFPercentage(1.6) }}>
            {desc}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AccountCreationOptions;
