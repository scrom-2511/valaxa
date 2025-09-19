import { useState } from 'react';
import { Platform } from 'react-native';

const useIsWeb = () => {
  const [isWeb, setIsWeb] = useState(Platform.OS === "web");
  return isWeb;
};

export default useIsWeb;
