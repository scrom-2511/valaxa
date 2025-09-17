import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Platform, Text } from "react-native";

const CardOverview = () => {
    const isWeb = Platform.OS === "web"
  const cardWidth = isWeb ? "min-w-80" : "min-w-44";
  return (
    <LinearGradient
      colors={["hsl(0 0% 10%)", "hsl(0 0% 0%)"]}
      className={`h-32 ${cardWidth} rounded-2xl border-[hsl(0_0%_20%)] border border-t border-t-[hsl(0_0%_40%)] flex-1 justify-center px-7`}
    >
      <Text className="text-textMuted font-roboto pb-3">BITCOIN</Text>
      <Text className="text-text text-3xl font-poppinsBold ">
        $98769 <Text className="text-textMuted text-sm">≈78 BTC</Text>
      </Text>
      <Text className="text-textMuted font-robotoLight">Across x accounts</Text>
    </LinearGradient>
  );
};

export default CardOverview;
