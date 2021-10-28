import {css} from '@emotion/native';
import {Center, Circle, Heading, HStack, Stack} from 'native-base';
import React from 'react';
import {Text, View} from 'react-native';
import {useStopwatch} from '../../shared/useStopwatch';
import Clock from './components/clock';
import Laps from './components/laps';

const StopwatchPage: React.VFC = () => {
  const {
    milliSeconds,
    minutes,
    seconds,
    running,
    toggle,
    resetTimer,
    saveLap,
    laps,
  } = useStopwatch(1000);

  return (
    <View>
      <Stack space={3} alignItems="center">
        <Heading textAlign="center" mb="4" marginTop="60" fontSize="6xl">
          <Text>Timer</Text>
        </Heading>
        <Clock
          minutes={minutes}
          seconds={seconds}
          milliSeconds={milliSeconds}
        />
      </Stack>
      <HStack space={3} mt="10" alignItems="center">
        <Center w="230">
          <Circle size={98} bg="secondary.400" onTouchEnd={toggle}>
            <Text
              style={css`
                color: white;
              `}
            >
              {running ? 'Pause' : 'Start'}
            </Text>
          </Circle>
        </Center>
        <Center>
          {running ? (
            <Circle size={98} bg="primary.500" onTouchEnd={saveLap}>
              <Text
                style={css`
                  color: white;
                `}
              >
                Lap
              </Text>
            </Circle>
          ) : (
            <Circle size={98} bg="primary.500" onTouchEnd={resetTimer}>
              <Text
                style={css`
                  color: white;
                `}
              >
                Reset
              </Text>
            </Circle>
          )}
        </Center>
      </HStack>
      <Laps lapTimes={laps} />
    </View>
  );
};

export default StopwatchPage;
