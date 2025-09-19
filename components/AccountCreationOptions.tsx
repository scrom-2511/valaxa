import React from "react";
import { Platform, Pressable, Text, useWindowDimensions, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";


const AccountCreationOptions = ({
  title,
  desc,
  onPress,
  icon: Icon,
}: {
  title: string;
  desc: string;
  onPress: () => void;
  icon: React.ComponentType<{ color?: string; size?: number }>;
}) => {
  const isWeb = Platform.OS === "web";
  const { width } = useWindowDimensions();
  const widthGreaterThan1000 = width > 1000 ? true : false;
  return (
    <Pressable className="bg-bgMedium flex-auto rounded-2xl justify-center px-8" onPress={onPress}>
      <View className="flex-row items-center gap-5">
        <View className="flex-row gap-5 items-center">
        <Icon color="hsl(0, 0%, 95%)" size={35}></Icon>
          <View className="flex-auto">
          <Text className="text-text font-robotoLight" style={{ fontSize: widthGreaterThan1000 ? 20 : RFPercentage(2.1) }}>
            {title}
          </Text>
          <Text className="text-textMuted text-md" style={{ fontSize: widthGreaterThan1000 ? 18 : RFPercentage(1.6) }}>
            {desc}
          </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default AccountCreationOptions;
