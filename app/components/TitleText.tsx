import React from 'react';
import { Animated, Text, StyleSheet, StyleProp, TextStyle, TextProps } from 'react-native';
import Color from '../common/Color';

interface Props extends TextProps {
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  animated?: boolean;
}

const TitleText: React.FC<Props> = ({ children, style, animated, ...props }) => {
  return animated ? (
    <Animated.Text {...props} style={[styles.text, style]}>
      {children}
    </Animated.Text>
  ) : (
    <Text {...props} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'black',
    letterSpacing: 0.5,
  },
});

export default TitleText;
