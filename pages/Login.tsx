import React, {useState} from 'react';
import LoginLayout from '../layouts/Login.layout';
import LoginForm from '../components/forms/Login.form';
import useLogin from '../hooks/useLogin';

const Login = () => {
  const {submitHandler, changeCredentialsHandler, credentials} = useLogin();
  return (
    <LoginLayout>
      <LoginForm
        submitHandler={submitHandler}
        changeHandler={changeCredentialsHandler}
        credentials={credentials}
      />
    </LoginLayout>
  );
};

export default Login;
