import { Image, Text, View } from "react-native";

const EachToken = ({ tokenName, balance, key }: { tokenName: string; balance: number; key: string }) => {
  return (
    <View key={key} className="bg-bgMedium flex-row h-32 w-full rounded-2xl items-center justify-between px-10">
      <View className="flex-row items-center gap-5">
        {/* <Image></Image> */}
        <View className="h-10 w-10 bg-text rounded-md"></View>
        <Text className="text-text text-lg">{tokenName}</Text>
        <Text className="text-text text-lg">{balance}</Text>
      </View>
      <View>
        <Image></Image>
        <View className="h-10 w-10 bg-text rounded-md"></View>
      </View>
    </View>
  );
};

export default EachToken;
