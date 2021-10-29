import {css} from '@emotion/native';
import {Box, FlatList, HStack, Text, View} from 'native-base';
import React from 'react';
import {getPrintableTime} from '../../../shared/time';

interface Props {
  lapTimes: number[];
  currentLap: number;
}

const getTimeString = ({
  minutes,
  seconds,
  milliSeconds,
}: {
  minutes: string;
  seconds: string;
  milliSeconds: string;
}) => `${minutes}:${seconds}.${milliSeconds}`;

const Laps: React.VFC<Props> = ({lapTimes, currentLap}) => {
  const slowestRound = lapTimes.reduce((prev, curr) => Math.max(prev, curr), 0);
  const fastestRound = lapTimes.reduce(
    (prev, curr) => Math.min(prev, curr),
    slowestRound,
  );

  const fastestRoundIndex = lapTimes.findIndex((v) => v === fastestRound);
  const slowestRoundIndex = lapTimes.findIndex((v) => v === slowestRound);

  const showBadges = fastestRound !== slowestRound;

  const getColor = (index: number) => {
    if (showBadges) {
      if (index === fastestRoundIndex) {
        return '#50d137';
      } else if (index === slowestRoundIndex) {
        return '#ef4f4d';
      }
    }

    return '#fff';
  };

  const renderLap = ({item, index}: {item: number; index: number}) => (
    <Box
      borderTopWidth="1"
      borderColor="#202020"
      style={css`
        padding-top: 15px;
        padding-bottom: 15px;
      `}
    >
      <HStack>
        <Text
          style={css`
            color: ${getColor(index)};
            font-size: 18px;
          `}
        >
          Lap {lapTimes.length - index}
        </Text>
        <Text
          style={css`
            margin-left: auto;
            margin-right: 0;
            font-size: 18px;
            color: ${getColor(index)};
          `}
        >
          {getTimeString(getPrintableTime(item))}
        </Text>
      </HStack>
    </Box>
  );

  return (
    <View>
      <FlatList
        data={lapTimes}
        ListHeaderComponent={() => renderLap({item: currentLap, index: -1})}
        style={css`
          margin-top: 20px;
          margin-left: 35px;
          margin-right: 35px;
          margin-bottom: 80px;
        `}
        renderItem={renderLap}
      />
    </View>
  );
};

export default Laps;
