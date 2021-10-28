import {css} from '@emotion/native';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {LinearGradient} from 'react-native-svg';
import StopwatchPage from './pages/stop-watch/stopwatchPage';
import {useColorSchemeHelpers} from './shared/useColorSchemeHelpers';

const expoGradientConfig = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
};

const App = () => {
  const {isDarkMode} = useColorSchemeHelpers();

  return (
    <SafeAreaView
      style={css`
        flex: 1;
        background-color: #000;
      `}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NativeBaseProvider config={expoGradientConfig}>
        <StopwatchPage />
      </NativeBaseProvider>
    </SafeAreaView>
  );
};

export default App;
