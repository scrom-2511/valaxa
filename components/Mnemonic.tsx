import { fontSize } from "@/utils/ElementSize";
import { Checkbox } from "expo-checkbox";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Platform, Pressable, ScrollView, Text, TextInput, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Mnemonic = ({ input }: { input: boolean }) => {
  const isWeb = Platform.OS === "web";
  const { width } = useWindowDimensions();
  const widthGreaterThan1000 = width > 1000 ? true : false;
  const router = useRouter();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const toggleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <SafeAreaView className="flex-1 bg-bgDark">
      <ScrollView contentContainerClassName={isWeb ? "flex-1 items-center" : "flex-1 items-strech"}>
        <View className={isWeb ? "w-full max-w-[1000px] h-full px-10 items-center py-44" : "flex-1 px-10 items-center justify-center my-64"}>
          <Text className="text-text font-poppinsSemiBold text-3xl">Your Secret Phrase</Text>
          <View className="flex-auto w-full p-10 gap-7" style={{alignItems: input ? "center" : undefined}}>
            {Array.from({ length: 3 }).map((_, rowIndex) => (
              <View key={rowIndex} className="flex-1 flex-row gap-7">
                {Array.from({ length: 3 }).map((_, colIndex) => {
                  const inputIndex = rowIndex * 3 + colIndex;

                  return input ? (
                    <TextInput
                      key={inputIndex}
                      className="text-white text-center text-xl rounded-md justify-center items-center bg-bgMedium w-[calc(100%/3)]"
                      style={{
                        borderWidth: focusedIndex === inputIndex ? 1 : 0,
                        borderColor: focusedIndex === inputIndex ? "hsl(2, 99%, 30%)" : "transparent",
                      }}
                      onFocus={() => setFocusedIndex(inputIndex)}
                      onBlur={() => setFocusedIndex(-1)}
                    />
                  ) : (
                    <View key={colIndex} className="flex-auto rounded-md justify-center items-center bg-bgMedium">
                      <Text className="text-white text-center text-xl ">This</Text>
                    </View>
                  );
                })}
              </View>
            ))}
          </View>
          <View className="flex-row mx-10 items-center gap-2 mb-5">
            <Checkbox value={isChecked} onValueChange={setIsChecked} color={isChecked ? "hsl(0 0% 70%)" : "gray"} />
            <Text className="text-textMuted font-poppins" style={{ fontSize: widthGreaterThan1000 ? 15 : fontSize(widthGreaterThan1000, 1.5) }}>
              I saved the secret phrase with me and i understand that i should never share it with anyone.
            </Text>
          </View>

          <Pressable className="bg-bgPrimary p-2 px-3 rounded-md">
            <Text className="text-text font-roboto" style={{ fontSize: widthGreaterThan1000 ? 15 : fontSize(widthGreaterThan1000, 1.5) }}>
              Let's Go!
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Mnemonic;
