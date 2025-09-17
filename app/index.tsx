import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center gap-6 bg-yellow-600">
      <Link href = "/YourAccounts">got to home</Link>
      <Link href = "/Wallet">got to wallet</Link>
    </View>
  );
}
