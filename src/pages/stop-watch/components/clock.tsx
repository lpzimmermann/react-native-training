import {css} from '@emotion/native';
import {Text, View} from 'native-base';
import React from 'react';

interface Props {
  minutes: string;
  seconds: string;
  milliSeconds: string;
}

const Clock: React.VFC<Props> = ({minutes, seconds, milliSeconds}) => (
  <View>
    <Text
      style={css`
        font-size: 84px;
        line-height: 120px;
        color: #fff;
        
        text-align: center;
      `}
    >
      {minutes}:{seconds}.{milliSeconds}
    </Text>
  </View>
);

export default Clock;
