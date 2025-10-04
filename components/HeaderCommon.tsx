import React from "react";
import { Text, View } from "react-native";

const HeaderCommon = ({ title, placeholder }: { title: string; placeholder?: string }) => {
  return (
    <View className="flex-col">
      <Text className="text-text font-poppinsSemiBold text-3xl my-5">{title}</Text>
      {placeholder && <Text className="text-text font-poppins text-md mb-2 mt-5">{placeholder}</Text>}
    </View>
  );
};

export default HeaderCommon;
