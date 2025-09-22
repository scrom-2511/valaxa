// shim.ts
import { Buffer } from 'buffer';
import 'react-native-get-random-values';
import 'react-native-quick-crypto';
import { install } from 'react-native-quick-crypto';

// Install crypto
install();

// Polyfill global variables
global.Buffer = Buffer;
// global.process = require('process');