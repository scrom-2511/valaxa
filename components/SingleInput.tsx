import { useSingleInputStore } from "@/app/zustand/store";
import { fontSize } from "@/utils/ElementSize";
import React from "react";
import { Pressable, Text, TextInput, useWindowDimensions, View } from "react-native";
import HeaderCommon from "./HeaderCommon";
import InitializeComponent from "./InitializeComponent";
const SingleInput = ({
  title,
  placeholder,
  buttonText,
  onPress,
}: {
  title: string;
  placeholder: string;
  buttonText: string;
  onPress: () => void;
}) => {
  const { currentInput, setCurrentInput } = useSingleInputStore();
  const { width } = useWindowDimensions();
  const widthGreaterThan1000 = width > 1000 ? true : false;
  return (
    <InitializeComponent scrollable={false}>
      <View className="flex-col h-full justify-between">
        <View className="flex-col">
          <HeaderCommon title={title} placeholder= {placeholder}/>
          <TextInput
            className="border-text border rounded-2xl h-20 text-text focus:outline-none p-5"
            value={currentInput}
            onChangeText={setCurrentInput}
          ></TextInput>
        </View>
        <View className="">
          <Pressable className="bg-bgPrimaryBtn p-4 px-3 rounded-2xl flex items-center">
            <Text
              className="text-text font-roboto"
              style={{ fontSize: widthGreaterThan1000 ? 18 : fontSize(widthGreaterThan1000, 2) }}
              onPress={onPress}
            >
              {buttonText}
            </Text>
          </Pressable>
        </View>
      </View>
    </InitializeComponent>
  );
};

export default SingleInput;
