import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, useWindowDimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const CardOverview = () => {
  const { width } = useWindowDimensions();
  const widthGreaterThan1000 = width > 1000 ? true : false;
  return (
    <LinearGradient colors={["#2a2e32", "#212529"]} className="h-32 flex-auto min-w-[40%] justify-center px-7" style={{ borderRadius: 16 }}>
      <Text className="text-textMuted font-roboto pb-1" style={{ fontSize: widthGreaterThan1000 ? 14 : RFPercentage(1.3) }}>
        BITCOIN
      </Text>
      <Text className="text-text font-poppinsBold" style={{ fontSize: widthGreaterThan1000 ? 24 : RFPercentage(2.3) }}>
        $98769{" "}
        <Text className="text-textMuted text-sm" style={{ fontSize: widthGreaterThan1000 ? 15 : RFPercentage(1) }}>
          ≈78 BTC
        </Text>
      </Text>
      <Text className="text-textMuted font-robotoLight" style={{ fontSize: widthGreaterThan1000 ? 13 : RFPercentage(1.4) }}>
        Across x accounts
      </Text>
    </LinearGradient>
  );
};

export default CardOverview;
