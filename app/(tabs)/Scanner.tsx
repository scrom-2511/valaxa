import InitializeComponent from '@/components/InitializeComponent';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { useSingleInputStore } from '../zustand/store';

const Scanner = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const router = useRouter();
  const { setCurrentInput } = useSingleInputStore();
  const handleOnBarcodeScanned = () => {
    setCurrentInput(null)
    router.push("/(tabs)/Send")
  }

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (                    
      <View className='flex-1 justify-center'>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <InitializeComponent scrollable={false}>
        <Text>Camera component</Text>
      <CameraView style={{flex:1}} facing="back" onBarcodeScanned={(e)=>{console.log(e)}} />
    </InitializeComponent>
  );

}

export default Scanner
