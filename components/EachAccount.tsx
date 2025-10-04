import { Image, Pressable, Text, View } from "react-native";

export const EachAccount = ({ accountName, onPress }: { accountName: string, onPress: () => void }) => {
    return (
      <Pressable className="bg-bgMedium flex-row h-32 w-full rounded-2xl items-center justify-between px-10" onPress={onPress}>
        <View className="flex-row items-center gap-5">
          {/* <Image></Image> */}
          <View className="h-10 w-10 bg-text rounded-md"></View>
          <Text className="text-text text-lg">{accountName}</Text>
        </View>
        <View>
          <Image></Image>
          <View className="h-10 w-10 bg-text rounded-md"></View>
        </View>
      </Pressable>
    );
  };