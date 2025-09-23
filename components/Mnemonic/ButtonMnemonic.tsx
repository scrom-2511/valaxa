import { useRouter } from "expo-router";
import React from "react";

import { Pressable, Text } from "react-native";
const ButtonMnemonic = ({ input, isChecked }: { input: boolean; isChecked: boolean }) => {
  const router = useRouter();

  const handleOnClickCreateAccountBtn = async () => {
    if (isChecked) router.push("/(tabs)/SetAccountName")
  };
  const bgBtnOnCreateAccount = isChecked ? "bg-bgPrimaryBtn" : "bg-bgSecondaryBtn";

  return (
    <>
      {input ? (
        <Pressable className="bg-bgPrimaryBtn p-2 px-3 rounded-md">
          <Text className="text-text font-roboto">IMPORT ACCOUNT(S)</Text>
        </Pressable>
      ) : (
        <Pressable className={`${bgBtnOnCreateAccount} p-2 px-3 rounded-md`} onPress={handleOnClickCreateAccountBtn}>
          <Text className="text-text font-roboto">CREATE ACCOUNT</Text>
        </Pressable>
      )}
    </>
  );
};

export default ButtonMnemonic;