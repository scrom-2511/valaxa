import QuickCrypto from 'react-native-quick-crypto';

export const test = () => {
    const hashed = QuickCrypto.createHash('sha256')
  .update('Damn, Margelo writes hella good software!')
  .digest('hex');
  return hashed
}
