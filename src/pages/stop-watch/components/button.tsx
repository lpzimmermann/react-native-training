import {css} from '@emotion/native';
import {Circle, Text, View} from 'native-base';
import React from 'react';

interface Props {
  text: string;
  onClick: () => void;
  backgroundColor: string;
  fontColor: string;
}

const Button: React.VFC<Props> = ({
  backgroundColor,
  fontColor,
  onClick,
  text,
}) => (
  <View
    style={css`
      border: 2px solid ${backgroundColor};
      border-radius: 82px;
      padding: 2px;
    `}
  >
    <Circle
      style={css`
        width: 82px;
        height: 82px;
        background-color: ${backgroundColor};
      `}
      onTouchEnd={onClick}
    >
      <Text
        style={css`
          color: ${fontColor};
          font-size: 18px;
        `}
      >
        {text}
      </Text>
    </Circle>
  </View>
);

export default Button;
