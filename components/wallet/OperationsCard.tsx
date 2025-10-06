import React from "react";
import { Pressable, Text } from "react-native";
import { SvgXml } from "react-native-svg";

const OperationsCard = ({ xml, rotate = "0deg", OperationNmae, onPress }: { xml: string, rotate?: string, OperationNmae: string, onPress: () => void }) => {
  // const handleOnPress = async () => {
  //   const send = await sendSolana("", "", 9, "", "")
  // }
  return (
    <Pressable className="bg-bgMedium w-20 rounded-2xl flex-auto items-center justify-center p-5" onPress={onPress}>
      <SvgXml xml={xml} style={{ transform: [{ rotate: rotate }] }} />
      <Text className="text-textMuted font-poppinsSemiBold mt-2">{OperationNmae}</Text>
    </Pressable>
  );
};

export default OperationsCard;
