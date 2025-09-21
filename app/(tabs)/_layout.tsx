import { Stack, Tabs } from "expo-router";
import { Platform } from "react-native";

export default function TabsLayout() {
  if (Platform.OS === "web") {
    // Web → keep simple stack navigation
    return <Stack screenOptions={{ headerShown: false }} />;
  }
  
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="YourAccounts" options={{ title: "Accounts" }} />
      <Tabs.Screen name="Swap" options={{ title: "Swap" }} />
      <Tabs.Screen name="Wallet" options={{ title: "Wallet" }} />
      <Tabs.Screen name="Home" options={{ title: "Home" }} />
    </Tabs>
  );
}
