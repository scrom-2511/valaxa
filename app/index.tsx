import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center gap-6 bg-yellow-600">
      <Link href = "/YourAccounts">got to your accounts</Link>
      <Link href = "/Wallet">got to wallet</Link>
      <Link href = "/Home">got to home</Link>
    </View>
  );
}
