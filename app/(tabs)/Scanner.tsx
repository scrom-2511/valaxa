import InitializeComponent from '@/components/InitializeComponent';
import { CameraView, useCameraPermissions } from 'expo-camera';
import React from 'react';
import { Button, Text, View } from 'react-native';

const Scanner = () => {
  const [permission, requestPermission] = useCameraPermissions();

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
      <CameraView style={{flex: 1}} facing="back" />
    </InitializeComponent>
  );

}

export default Scanner
