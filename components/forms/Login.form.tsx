import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FormButton} from '../buttons/FormButton';
import FormInput from '../inputs/FormInput';
import {TCredentials} from '../../types/credentials.type';

interface LoginFormProps {
  submitHandler: () => void;
  credentials: TCredentials;
  changeHandler: (text: string, attr: 'login' | 'password') => void;
}
const LoginForm = ({
  submitHandler,
  changeHandler,
  credentials,
}: LoginFormProps) => {
  return (
    <View style={styles.container}>
      <FormInput
        label="Email ou Matricule"
        placeholder="Email ou Matricule"
        onChangeText={(text: string) => changeHandler(text, 'login')}
        value={credentials.login}
      />
      <FormInput
        label="Mot de passe"
        placeholder="**********"
        secureTextEntry={true}
        onChangeText={(text: string) => changeHandler(text, 'password')}
        value={credentials.password}
      />

      <FormButton title="Se connecter" onPress={submitHandler} style={{marginTop: 20}}/>

      <Text style={{color: 'green', textAlign: 'center'}}>
        Mot de passe oublié ?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        gap: 20,
    }
})

export default LoginForm;
