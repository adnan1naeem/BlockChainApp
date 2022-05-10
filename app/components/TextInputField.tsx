import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextInputProps,
  TextStyle,
} from 'react-native';
import Color from '../common/Color';
import TitleText from './TitleText';

interface Props extends TextInputProps {
  label: string;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  error?: string | undefined;
}

const TextInputField: React.FC<Props> = React.forwardRef<TextInput, Props>(
  ({ editable,underline, label, style, inputStyle, error, ...rest }, ref) => {
    const styles = StyleSheet.create({
      container: {
        height: 85,
      },
      label: {
        marginLeft: 5,
        fontSize: 12,
      },
      error: {
        fontSize: 12,
        color: 'red',
        marginTop: 10,
      },
      input: {
        fontSize: 14,
        color: 'black',
        marginTop: 10,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 0.2,
        padding: 10,
      },
      inputValid: {
        borderColor: underline ? 'black' : Color.primary,
      },
      inputNotValid: {
        borderBottomColor: 'red',
      },
    });

    return (
      <View style={[styles.container, style]}>
        <TitleText style={styles.label}>{label}</TitleText>
        <TextInput
          editable={editable}
          ref={ref}
          style={[styles.input, inputStyle, error ? styles.inputNotValid : styles.inputValid]}
          {...rest}
        />
      </View>
    );
  }
);

export default TextInputField;
