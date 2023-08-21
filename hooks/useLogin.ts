import { useState } from "react";
import { Alert, NativeSyntheticEvent, TextInputChangeEventData } from "react-native"
import { TCredentials } from "../types/credentials.type";

const useLogin = () => {
    const [credentials, setCredentials] = useState<TCredentials>({login: "", password: ""})
    
    const submitHandler = () => {
        Alert.alert("Hello world !");
    }

    const changeCredentialsHandler = (text: string, value: "login"|"password")=> {
        setCredentials(prev => {
            return {...prev, [value]:text}
        })
    }
    return { submitHandler, credentials, changeCredentialsHandler};
}

export default useLogin;