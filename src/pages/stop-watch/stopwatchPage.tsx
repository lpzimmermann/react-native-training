import {css} from '@emotion/native';
import {Box} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import {getPrintableTime} from '../../shared/time';
import {useStopwatch} from '../../shared/useStopwatch';
import Clock from './components/clock';
import Controls from './components/controls';
import Laps from './components/laps';

const StopwatchPage: React.VFC = () => {
  const {currentTime, running, toggle, resetTimer, saveLap, lastLap, laps} =
    useStopwatch();

  const {milliSeconds, minutes, seconds} = getPrintableTime(currentTime);

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
        <Box
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
        </Box>
      </View>
      <View
        style={css`
          flex: 1;
        `}
      >
        <Controls
          resetTimer={resetTimer}
          running={running}
          saveLap={saveLap}
          toggle={toggle}
        />
        <Laps lapTimes={laps} currentLap={currentTime - lastLap} />
      </View>
    </View>
  );
};

export default StopwatchPage;
