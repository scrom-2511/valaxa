import React from "react";
import { Text } from "react-native";

const HeaderMnemonic = ({ input }: { input: boolean }) => {
  return <Text className="text-text font-poppinsSemiBold text-3xl">{input ? "Enter Your Secret Phrase" : "Your Secret Phrase"}</Text>;
};

export default HeaderMnemonic;
