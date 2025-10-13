import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { Roboto_600SemiBold, Roboto_700Bold, Roboto_900Black } from "@expo-google-fonts/roboto";
import { onlineManager, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import * as Network from "expo-network";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import "../global.css";
import "../shim";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    RobotoRegular: Roboto_700Bold,
    RobotoBold: Roboto_900Black,
    RobotoLight: Roboto_600SemiBold,
    PoppinsRegular: Poppins_400Regular,
    PoppinsSemiBold: Poppins_600SemiBold,
    PoppinsBold: Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
      console.log("fonts loaded!");
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // keep splash until fonts load
  }

  const queryClient = new QueryClient();

  return (
    <View className="flex-1">
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </QueryClientProvider>
    </View>
  );
}

onlineManager.setEventListener((setOnline) => {
  const eventSubscription = Network.addNetworkStateListener((state) => {
    setOnline(!!state.isConnected);
  });
  return eventSubscription.remove;
});
