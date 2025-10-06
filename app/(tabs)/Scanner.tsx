import HeaderCommon from "@/components/HeaderCommon";
import InitializeComponent from "@/components/InitializeComponent";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";
import { useSingleInputStore } from "../zustand/store";

const Scanner = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const router = useRouter();
  const { setCurrentInput } = useSingleInputStore();

  const handleOnBarcodeScanned = () => {
    setCurrentInput(null);
    router.push("/(tabs)/Send");
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View className="flex-1 justify-center items-center px-5">
        <Text className="text-center mb-4">
          Camera access is required to scan QR codes.
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  return (
    <InitializeComponent scrollable={false}>
      <HeaderCommon
        title="Scan QR Code"
        placeholder="Align the QR code within the frame to scan"
      />

      <CameraView
        style={{ flex: 1, marginVertical: 20 }}
        facing="back"
        onBarcodeScanned={(e) => {
          console.log(e); // You may want to call handleOnBarcodeScanned here
        }}
      />

      <View className="flex items-center mb-20">
        <Text className="text-text my-10">OR</Text>
        <Text className="text-text underline">
          I want to enter the public key manually
        </Text>
      </View>
    </InitializeComponent>
  );
};

export default Scanner;
