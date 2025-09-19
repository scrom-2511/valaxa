import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

const GridMnemonic = ({ input }: { input: boolean }) => {
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  return (
    <View className="flex-auto w-full p-10 gap-7" style={{ alignItems: input ? "center" : undefined }}>
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
                <Text className="text-white text-center text-xl">This</Text>
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
};

export default GridMnemonic;
