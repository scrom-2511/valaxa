import { Link } from "expo-router";
import { Appearance, View } from "react-native";

// Force light theme

export default function Index() {
  Appearance.setColorScheme('light');
  return (
    <View className="flex-1 items-center justify-center gap-6 bg-yellow-600">
      <Link href = "/YourAccounts">got to your accounts</Link>
      {/* <Link href = "/Wallet">got to wallet</Link> */}
      <Link href = "/Home">got to home</Link>
    </View>
  );
}