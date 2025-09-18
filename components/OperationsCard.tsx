import React from "react";
import { Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

const OperationsCard = ({ xml, rotate = "0deg", OperationNmae }: { xml: string; rotate?: string, OperationNmae: string }) => {
  return (
    <View className="bg-bgMedium w-20 rounded-2xl flex-auto items-center justify-center p-5">
      <SvgXml xml={xml} style={{ transform: [{ rotate: rotate }] }} />
      <Text className="text-textMuted font-poppinsSemiBold mt-2">{OperationNmae}</Text>
    </View>
  );
};

export default OperationsCard;
