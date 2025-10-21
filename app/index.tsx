import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";
import { Appearance, Pressable, Text, View } from "react-native";
import { useAccountStore } from "./zustand/store";

export default function Index() {
  Appearance.setColorScheme("light");
  const handleOnClick = () => {
    AsyncStorage.removeItem("account-storage");
    useAccountStore.setState({
      accounts: [],
      currentAccountIndex: 0,
    });
  };
  const { accounts } = useAccountStore();
  const handleOnClick2 = () => {
    console.log(accounts[0]);
  };
  return (
    <View className="flex-1 items-center justify-center gap-6 bg-yellow-600">
      <Link href="/YourAccounts">got to your accounts</Link>

      <Link href="/Home">got to home</Link>
      <Pressable onPress={handleOnClick}>
        <Text>Clear state</Text>
      </Pressable>
      <Pressable onPress={handleOnClick2}>
        <Text>Check state</Text>
      </Pressable>
    </View>
  );
}
