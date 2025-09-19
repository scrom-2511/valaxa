import { fontSize } from "@/utils/ElementSize";
import { useRouter } from "expo-router";
import React from "react";
import { Platform, Pressable, ScrollView, Text, TextInput, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Import_Watch = ({
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
  const isWeb = Platform.OS === "web";
  const { width } = useWindowDimensions();
  const widthGreaterThan1000 = width > 1000 ? true : false;
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-bgDark">
      <ScrollView contentContainerClassName={isWeb ? "flex-1 items-center" : "flex-1 items-strech"}>
        <View className={isWeb ? "w-full max-w-[1000px] h-full p-5" : "flex-auto m-5"}>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Import_Watch;
