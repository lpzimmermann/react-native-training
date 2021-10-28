import {useColorScheme} from 'react-native';

export const useColorSchemeHelpers = () => {
  const colorScheme = useColorScheme();

  return {
    isDarkMode: colorScheme === 'dark',
  };
};
