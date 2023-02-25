import {css} from '@emotion/native';
import LogRocket from '@logrocket/react-native';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import StopwatchPage from './pages/stop-watch/stopwatchPage';
import {useColorSchemeHelpers} from './shared/useColorSchemeHelpers';

const App = () => {
  const {isDarkMode} = useColorSchemeHelpers();

  LogRocket.init('swisslife/pando-a', {
    serverURL: 'https://logrocket-ingest.f2c.swisslife.ch/i',
    network: {
      requestSanitizer: (request) => {
        request.body = '[redacted]'

        if (request.headers.Authorization) {
          request.headers.Authorization = '[redacted]'
        }
        return request
      },
    },
    console: {
      isEnabled: {
        info: false,
      },
      shouldAggregateConsoleErrors: true,
    },
  })

  return (
    <SafeAreaView
      style={css`
        flex: 1;
        background-color: #000;
      `}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NativeBaseProvider>
        <StopwatchPage />
      </NativeBaseProvider>
    </SafeAreaView>
  );
};

export default App;
