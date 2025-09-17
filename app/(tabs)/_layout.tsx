import { Stack, Tabs } from "expo-router";
import { Platform } from "react-native";

export default function TabsLayout() {

  if (Platform.OS === "web") {
    // Web → keep simple stack navigation
    return <Stack screenOptions={{ headerShown: false }} />;
  }
  return (
    <Tabs screenOptions={{ headerShown: false}}>
      <Tabs.Screen name="index" options={{ title: "Accounts" }} />
      <Tabs.Screen name="swap" options={{ title: "Swap" }} />
      <Tabs.Screen name="wallet" options={{ title: "Wallets" }} />
    </Tabs>
  );
}
