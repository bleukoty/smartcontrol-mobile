import React from 'react';
import {Button, ButtonProps, StyleProp, StyleSheet, TouchableHighlight, ViewStyle} from 'react-native';

const styles = StyleSheet.create({
    button: {}
});

interface FormButtonProps extends ButtonProps {
    style: StyleProp<ViewStyle>
}
export const FormButton = ({style, ...props}: FormButtonProps) => {
  return (
    <TouchableHighlight style={[styles.button, style]}>
      <Button {...props} />
    </TouchableHighlight>
  );
};
