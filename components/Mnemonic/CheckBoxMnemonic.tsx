import Checkbox from "expo-checkbox";
import React from "react";
import { Text, View } from "react-native";

const CheckBoxMnemonic = ({
  input,
  isChecked,
  setIsChecked,
}: {
  input: boolean;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const toggleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <>
      {!input && (
        <View className="flex-row mx-10 items-center gap-2 mb-5">
          <Checkbox value={isChecked} onValueChange={setIsChecked} color={isChecked ? "hsl(0 0% 70%)" : "gray"} onChange={toggleCheckbox} />
          <Text className="text-textMuted font-poppins">
            I saved the secret phrase with me and I understand that I should never share it with anyone.
          </Text>
        </View>
      )}
    </>
  );
};

export default CheckBoxMnemonic;
