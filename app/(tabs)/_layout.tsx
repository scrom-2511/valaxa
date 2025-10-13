import { Stack, Tabs } from "expo-router";
import { Platform } from "react-native";

export default function TabsLayout() {
  if (Platform.OS === "web") {
    // Web → keep simple stack navigation
    return <Stack screenOptions={{ headerShown: false }} />;
  }

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="Home" options={{ title: "Home" }} />
      <Tabs.Screen name="YourAccounts" options={{ title: "YourAccounts" }} />
      <Tabs.Screen name="Swap" options={{ title: "Swap", href: null }} />
      <Tabs.Screen name="wallet" options={{ title: "Wallet", href: null }} />
      <Tabs.Screen name="Send" options={{ title: "Send", href: null }} />
      <Tabs.Screen name="ManualSend" options={{ title: "ManualSend", href: null }} />
      <Tabs.Screen name="ManualSendDetails" options={{ title: "ManualSendDetails", href: null }} />
      <Tabs.Screen name="Recieve" options={{ title: "Recieve", href: null }} />
      <Tabs.Screen name="RecieveTokenInput" options={{ title: "RecieveTokenInput", href: null }} />
      <Tabs.Screen name="ReceiveTokenQR" options={{ title: "ReceiveTokenQR", href: null }} />
      <Tabs.Screen name="AccountCreation" options={{ title: "AccountCreation", href: null }} />
      <Tabs.Screen name="ImportKeyOption" options={{ title: "ImportKeyOption", href: null }} />
      <Tabs.Screen name="SetAccountName" options={{ title: "SetAccountName", href: null }} />
      <Tabs.Screen name="Scanner" options={{ title: "Scanner" }} />
      <Tabs.Screen name="MnemonicCreationOption" options={{ title: "MnemonicCreationOption", href: null }} />
      <Tabs.Screen name="MnemonicInputOption" options={{ title: "MnemonicInputOption", href: null }} />
      <Tabs.Screen name="WatchAccountOption" options={{ title: "WatchAccountOption", href: null }} />
    </Tabs>
  );
}
