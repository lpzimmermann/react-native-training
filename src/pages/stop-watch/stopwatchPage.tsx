import {css} from '@emotion/native';
import {Heading, Stack} from 'native-base';
import React from 'react';
import {Button, View} from 'react-native';
import {useStopwatch} from '../../shared/useStopwatch';
import Clock from './components/clock';
import Laps from './components/laps';

const ResetButtonStyle = css`
  margin-top: 20px;
`;

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
  } = useStopwatch(100);

  return (
    <View>
      <Stack space={3} alignItems="center">
        <Heading textAlign="center" mb="4" marginTop="60" fontSize="6xl">
          Timer
        </Heading>
        <Clock
          minutes={minutes}
          seconds={seconds}
          milliSeconds={milliSeconds}
        />
      </Stack>
      <Button title={running ? 'Pause' : 'Start'} onPress={toggle} />
      {running && (
        <View style={ResetButtonStyle}>
          <Button
            title="Lap"
            onPress={() => {
              saveLap;
            }}
          />
        </View>
      )}
      ;
      {!running && (
        <View style={ResetButtonStyle}>
          <Button title="Reset timer" onPress={resetTimer} />
        </View>
      )}
      <Laps lapTimes={laps} />
    </View>
  );
};

export default StopwatchPage;
