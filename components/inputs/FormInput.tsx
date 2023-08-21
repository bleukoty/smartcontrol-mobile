import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

const style = StyleSheet.create({
  container: {},
  label: {},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  inputOnFocus: {
    borderColor: 'blue',
  },
});

interface FormInputProps extends TextInputProps {
  label: string;
}
const FormInput = ({label, ...props}: FormInputProps) => {
  const [isFocus, setFocus] = useState(false);
  const [isBlur, setBlur] = useState(false);
  const handleFocus = () => {
    setFocus(true);
    setBlur(false);
  };

  const handleBlur = () => {
    setFocus(false);
    setBlur(true);
  };

  return (
    <View style={style.container}>
      <Text style={style.label}>{label}</Text>
      <TextInput
        {...props}
        style={[style.input, isFocus && style.inputOnFocus]}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};

export default FormInput;
