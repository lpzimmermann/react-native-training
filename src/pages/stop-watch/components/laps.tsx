import {Badge, Box, FlatList, Text} from 'native-base';
import React from 'react';

interface Props {
  lapTimes: number[];
}

const Laps: React.VFC<Props> = ({lapTimes}) => {
  const fastestRound = lapTimes.reduce((prev, curr) => Math.max(prev, curr), 0);
  const slowestRound = lapTimes.reduce((prev, curr) => Math.min(prev, curr), 0);

  const fastestRoundIndex = lapTimes.findIndex((v) => v === fastestRound);
  const slowestRoundIndex = lapTimes.findIndex((v) => v === slowestRound);

  const showBadges = fastestRound !== slowestRound;

  return (
    <FlatList
      data={lapTimes}
      renderItem={({item, index}) => (
        <Box
          borderBottomWidth="1"
          _dark={{
            borderColor: 'gray.600',
          }}
          borderColor="coolGray.200"
          pl="4"
          pr="5"
          py="2"
        >
          <Text>{item}</Text>
          {showBadges && index === fastestRoundIndex && (
            <Badge colorScheme="success" variant="outline">
              <Text>Fastest Round</Text>
            </Badge>
          )}
          {showBadges && index === slowestRoundIndex && (
            <Badge colorScheme="danger" variant="outline">
              <Text>Slowest Round</Text>
            </Badge>
          )}
        </Box>
      )}
    />
  );
};

export default Laps;
