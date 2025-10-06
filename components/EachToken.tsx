import { SingleToken, useSelectedAccountDetails } from "@/app/zustand/store";
import { TokenName } from "@/types/types";
import { Image, Pressable, Text, View } from "react-native";

const EachToken = ({ token }: { token:SingleToken<TokenName> }) => {
  const { setSelectedToken } = useSelectedAccountDetails();
  return (
    <Pressable key={token.publicKey} className="bg-bgMedium flex-row h-32 w-full rounded-2xl items-center justify-between px-10" onPress={()=>setSelectedToken(token)}>
      <View className="flex-row items-center gap-5">
        {/* <Image></Image> */}
        <View className="h-10 w-10 bg-text rounded-md"></View>
        <Text className="text-text text-lg">{token.tokenName}</Text>
        <Text className="text-text text-lg">{token.amount}</Text>
      </View>
      <View>
        <Image></Image>
        <View className="h-10 w-10 bg-text rounded-md"></View>
      </View>
    </Pressable>
  );
};

export default EachToken;
