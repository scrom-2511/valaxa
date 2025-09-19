import { fontSize } from "@/utils/ElementSize";
import React from "react";
import { Pressable, Text, TextInput, useWindowDimensions, View } from "react-native";
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
  const { width } = useWindowDimensions();
  const widthGreaterThan1000 = width > 1000 ? true : false;
  return (
    <InitializeComponent scrollable={false}>
      <View className="flex-col h-full justify-between">
        <View className="flex-col">
          <Text className="text-text font-poppinsSemiBold text-3xl my-5">{title}</Text>

          <Text className="text-text font-poppins text-md my-4">{placeholder}</Text>
          <TextInput className="border-text border rounded-2xl h-20 text-text focus:outline-none p-5"></TextInput>
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
