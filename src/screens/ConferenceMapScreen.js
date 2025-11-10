// Platform proxy: export the platform-specific implementation.
// This file intentionally avoids importing `react-native-maps` so the web
// bundler doesn't attempt to resolve native-only internals.
import { Platform } from 'react-native';

let Impl;
if (Platform.OS === 'web') {
  // require local web implementation at runtime
  // eslint-disable-next-line global-require
  Impl = require('./ConferenceMapScreen.web').default;
} else {
  // eslint-disable-next-line global-require
  Impl = require('./ConferenceMapScreen.native').default;
}

export default Impl;