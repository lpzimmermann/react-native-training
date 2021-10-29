import {css} from '@emotion/native';
import {HStack} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import Button from './button';

interface Props {
  running: boolean;
  toggle: () => void;
  resetTimer: () => void;
  saveLap: () => void;
}

const Controls: React.VFC<Props> = ({running, resetTimer, saveLap, toggle}) => (
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
);

export default Controls;
