import {Badge, Box, FlatList, Heading, HStack, Text, View} from 'native-base';
import React from 'react';

interface Props {
  lapTimes: number[];
}

const Laps: React.VFC<Props> = ({lapTimes}) => {
  const slowestRound = lapTimes.reduce((prev, curr) => Math.max(prev, curr), 0);
  const fastestRound = lapTimes.reduce(
    (prev, curr) => Math.min(prev, curr),
    slowestRound,
  );

  const fastestRoundIndex = lapTimes.findIndex((v) => v === fastestRound);
  const slowestRoundIndex = lapTimes.findIndex((v) => v === slowestRound);

  const showBadges = fastestRound !== slowestRound;

  return (
    <View mt="10">
      <Heading fontSize="lg" textAlign="center">
        Laps
      </Heading>
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
            <HStack>
              <Text w="20">{item}</Text>
              {showBadges && index === fastestRoundIndex && (
                <Badge colorScheme="success" variant="outline">
                  Fastest Round
                </Badge>
              )}
              {showBadges && index === slowestRoundIndex && (
                <Badge colorScheme="danger" variant="outline">
                  Slowest Round
                </Badge>
              )}
            </HStack>
          </Box>
        )}
      />
    </View>
  );
};

export default Laps;
