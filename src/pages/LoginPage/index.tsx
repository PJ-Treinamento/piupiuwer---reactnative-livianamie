import React, { FormEvent, useCallback, useState } from "react";

import { StackActions, useNavigation } from "@react-navigation/native";

import {
  Container,
  ErrorText,
  Input,
  InputsContainer,
  LoginButton,
  LoginButtonText,
  WelcomeText,
} from "./styles";

import { FontAwesome5 } from "@expo/vector-icons";
import { useAuth } from "../../hooks/useAuth";
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

interface LoginData {
  email: string;
  password: string
}

const LoginPage: React.FC = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { login, error } = useAuth();

  // const handleLogin = useCallback(async (data: LoginData) => {
  //   if (email.length === 0 || password.length === 0) {
  //     setErrorMessage('Preencha usuário e senha para continuar!');
  //   } 
  //   else {
  //     try {
  //       console.log('oi1')
  //       const response = await api.post('/sessions/login', data);
  //         console.log('oi')
  //       await AsyncStorage.setItem('@AirBnbApp:token', response.data.token);
  //       console.log('oi2')
  //       navigation.navigate('Feed')
  //       console.log('oi3')
  //       // const resetAction = StackActions.reset({
  //       //   index: 0,
  //       //   actions: [
  //       //     navigation.navigate('Feed'),
  //       //   ],
  //       // });
  //       // navigation.dispatch(resetAction);
  //     } catch (_err) {
  //       setErrorMessage('Houve um problema com o login, verifique suas credenciais!');
  //     }
  //   }
  // }, [email, password]);

  // const handleLogin = useCallback(async () => {    
  //   try {
  //     console.log(email)
  //     console.log(password)
  //     const response = await api.post('/sessions/login', {
  //       email: email,
  //       passwword: password
  //     })
  
  //     const token = response.data.token;
  //     const user = response.data.user;
  
  //     await AsyncStorage.setItem('@Piupiuwer:token', token);
  //     await AsyncStorage.setItem('@Piupiuwer:user', JSON.stringify(user));
  
  //     navigation.navigate('Tabs')
  //   }
  //   catch (response) {
  //     setErrorMessage(response.data.error)
  //   }

  // }, []);

  // useEffect(() => {
  //     AsyncStorage.clear();
  // }, [])

  const handleLogin = useCallback(async () => {    
    await login({email, password});

  }, [login, email, password]);


  return (
    <Container>
      <FontAwesome5 name="earlybirds" size={100} color="#9E00FF"/>
      <WelcomeText>Bem-vinde de volta!</WelcomeText>

      <InputsContainer>
        <Input
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="e-mail"
        />
        <Input
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="senha"
        />
      </InputsContainer>

      { !!errorMessage && <ErrorText>{ errorMessage }</ErrorText> }

      <LoginButton onPress={handleLogin}>
        <LoginButtonText>Entrar</LoginButtonText>
      </LoginButton>
    </Container>
  );
};

export default LoginPage;
