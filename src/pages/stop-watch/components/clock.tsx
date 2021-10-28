import {Center, HStack, Text, View} from 'native-base';
import React from 'react';

interface Props {
  minutes: string;
  seconds: string;
  milliSeconds: string;
}

const Clock: React.VFC<Props> = ({minutes, seconds, milliSeconds}) => (
  <View>
    <HStack space={3} alignItems="center">
      <Center h="90" w="20" bg="primary.500" rounded="md" shadow={3}>
        <Text
          fontSize="6xl"
          fontFamily="Legacy Serif ITC W02 Bk"
          color="coolGray.600"
          verticalAlign="middle"
        >
          {minutes}
        </Text>
      </Center>
      <Center w="3">
        <Text
          fontSize="6xl"
          fontFamily="Legacy Serif ITC W02 Bk"
          color="coolGray.600"
          verticalAlign="middle"
        >
          :
        </Text>
      </Center>
      <Center h="90" w="20" bg="secondary.500" rounded="md" shadow={3}>
        <Text
          fontSize="6xl"
          fontFamily="Legacy Serif ITC W02 Bk"
          color="coolGray.600"
          verticalAlign="middle"
        >
          {seconds}
        </Text>
      </Center>
      <Center w="3">
        <Text
          fontSize="6xl"
          fontFamily="Legacy Serif ITC W02 Bk"
          color="coolGray.600"
          verticalAlign="middle"
        >
          .
        </Text>
      </Center>
      <Center h="90" w="20" bg="emerald.500" rounded="md" shadow={3}>
        <Text
          fontSize="6xl"
          fontFamily="Legacy Serif ITC W02 Bk"
          color="coolGray.600"
          verticalAlign="middle"
        >
          {milliSeconds}
        </Text>
      </Center>
    </HStack>
    <HStack space={3} alignItems="center">
      <Center h="10" w="20">
        <Text
          fontSize="md"
          fontFamily="Legacy Serif ITC W02 Bk"
          color="coolGray.600"
          verticalAlign="middle"
        >
          Minutes
        </Text>
      </Center>
      <Center w="3" />
      <Center h="10" w="20">
        <Text
          fontSize="md"
          fontFamily="Legacy Serif ITC W02 Bk"
          color="coolGray.600"
          verticalAlign="middle"
        >
          Seconds
        </Text>
      </Center>
      <Center w="3" />
      <Center h="10" w="20">
        <Text
          fontSize="md"
          fontFamily="Legacy Serif ITC W02 Bk"
          color="coolGray.600"
          verticalAlign="middle"
        >
          ms
        </Text>
      </Center>
    </HStack>
  </View>
);

export default Clock;
