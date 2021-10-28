import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {LinearGradient} from 'react-native-svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import StopwatchPage from './pages/stop-watch/stopwatchPage';
import {useColorSchemeHelpers} from './shared/useColorSchemeHelpers';

/*const AppRoutes = () => (
  <>
    <Route path="/watch" component={StopwatchPage} />
    <Route path="/about" component={StopwatchPage} />
  </>
);*/

const expoGradientConfig = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
};

const App = () => {
  const {isDarkMode} = useColorSchemeHelpers();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <NativeBaseProvider config={expoGradientConfig}>
          <StopwatchPage />
        </NativeBaseProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
