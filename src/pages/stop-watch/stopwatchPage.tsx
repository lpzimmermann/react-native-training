import {css} from '@emotion/native';
import {HStack, Stack} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import {useStopwatch} from '../../shared/useStopwatch';
import Button from './components/button';
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
  } = useStopwatch(90);

  return (
    <View
      style={css`
        flex: 1;
      `}
    >
      <View
        style={css`
          flex: 1;
        `}
      >
        <Stack
          space={3}
          style={css`
            align-items: center;
            margin-top: auto;
            margin-bottom: auto;
          `}
        >
          <Clock
            minutes={minutes}
            seconds={seconds}
            milliSeconds={milliSeconds}
          />
        </Stack>
      </View>
      <View
        style={css`
          flex: 1;
        `}
      >
        <HStack
          space={3}
          style={css`
            flex-direction: row;
            align-items: center;
          `}
        >
          <View
            style={css`
              margin-left: 35px;
              margin-right: auto;
            `}
          >
            {running ? (
              <Button
                text="Lap"
                backgroundColor="#3d3d3d"
                fontColor="#fff"
                onClick={saveLap}
              />
            ) : (
              <Button
                text="Reset"
                backgroundColor="#3d3d3d"
                fontColor="#fff"
                onClick={resetTimer}
              />
            )}
          </View>
          <View
            style={css`
              margin-left: auto;
              margin-right: 35px;
            `}
          >
            {running ? (
              <Button
                text="Stop"
                backgroundColor="#420e0d"
                fontColor="#ef4f4d"
                onClick={toggle}
              />
            ) : (
              <Button
                text="Start"
                backgroundColor="#1b361f"
                fontColor="#50d137"
                onClick={toggle}
              />
            )}
          </View>
        </HStack>
        <Laps lapTimes={laps} />
      </View>
    </View>
  );
};

export default StopwatchPage;
