import React from "react";
import { Platform, Pressable, Text, useWindowDimensions, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const AccountCreationOptions = ({ title, desc, onPress }: { title: string; desc: string, onPress: () => void }) => {
  const isWeb = Platform.OS === "web";
  const { width } = useWindowDimensions();
  const widthGreaterThan1000 = width > 1000 ? true : false;
  return (
    <Pressable className="bg-bgMedium flex-auto w-full rounded-2xl justify-center" onPress={onPress}>
      <View className="flex-row items-center gap-5">
        {/* <Image></Image> */}
        {/* <View className="h-10 w-10 bg-text rounded-md"></View> */}
        <View className="flex-col px-10">
          <Text className="text-text font-robotoLight" style={{ fontSize: widthGreaterThan1000 ? 20 : RFPercentage(2.1) }}>
            {title}
          </Text>
          <Text className="text-textMuted text-md" style={{ fontSize: widthGreaterThan1000 ? 18 : RFPercentage(1.6) }}>
            {desc}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default AccountCreationOptions;
