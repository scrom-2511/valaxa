import { SingleToken, useSelectedAccountDetails } from "@/app/zustand/store";
import { formatAmount } from "@/utils/formatAmount";
import { Pressable, Text, View } from "react-native";

const EachToken = ({ token }: { token: SingleToken }) => {
  const { setSelectedToken,selectedAccount } = useSelectedAccountDetails();

  // useEffect(()=>{
  //   console.log(selectedAccount.tokens)
  // }, [selectedAccount])
  return (
    <Pressable
      key={token.publicKey}
      className="bg-bgMedium flex-row h-28 w-full rounded-2xl items-center justify-between px-10 mb-5"
      onPress={() => setSelectedToken(token)}
    >
      <View className="flex-row items-center gap-5">
        {/* <Image></Image> */}
        <View className="h-10 w-10 bg-text rounded-md"></View>
        <View className="flex-col">
          <Text className="text-text text-lg">{token.tokenName}</Text>
          <Text className="text-textMuted text-lg">{formatAmount(token.balance).replace("$", "")} {token.symbol}</Text>
        </View>
      </View>
      <View>
        <View className="">
          <Text className="text-textMuted">{token.usdValue ? formatAmount(Number(token.usdValue) * token.balance) : "-"}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default EachToken;