import React from "react";
import { Text, View } from "react-native";

const Wallet = () => {
  return (
    <View className="flex-1 items-center justify-center bg-bgDark">
      <Text className="text-text text-xl font-bold mb-4">Wallet</Text>
      <Text className="text-textMuted text-center px-8">
        This is the Wallet tab. Navigation is working properly!
      </Text>
    </View>
  );
};

export default Wallet;
