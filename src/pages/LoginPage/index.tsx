import React, { useCallback, useState } from "react";

import {
  BackgroundImage,
  Container,
  ErrorText,
  SignUpButton,
  Input,
  InputsContainer,
  InputWrapper,
  Label,
  LoginButton,
  LoginButtonText,
  OptionsContainer,
  OptionText,
  WelcomeText,
} from "./styles";

import { FontAwesome5 } from "@expo/vector-icons";
import Background from "../../assets/background.png";
import { useAuth } from "../../hooks/useAuth";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { login, error } = useAuth();
  const navigation = useNavigation();

  const handleLogin = useCallback(async () => {
    await login({ email, password });

    if (error) {
      setErrorMessage("* E-mail ou senha incorretos");
    }
    if (email === "" || password === "") {
      setErrorMessage("* Todos os campos devem estar preenchidos");
    }
  }, [login, email, password]);

  const goToSignUpPage = () => {
    navigation.navigate('SignUpPage');
  }

  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <StatusBar />
      <BackgroundImage source={Background} resizeMode="cover">
        <FontAwesome5 name="earlybirds" size={100} color="#9E00FF" />
        <WelcomeText>Bem-vinde de volta!</WelcomeText>

        <InputsContainer>
          <InputWrapper>
            <Label>E-mail</Label>
            <Input
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="ex: fulano.silva@polijunior.com.br"
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Senha</Label>
            <Input
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="ex: polijunior2021"
              secureTextEntry={true}
            />
          </InputWrapper>
        </InputsContainer>

        {!!errorMessage && <ErrorText>{errorMessage}</ErrorText>}

        <LoginButton onPress={handleLogin}>
          <LoginButtonText>Entrar</LoginButtonText>
        </LoginButton>

        <OptionsContainer>
          <OptionText>Esqueci minha senha</OptionText>
          <SignUpButton onPress={goToSignUpPage}>
            <OptionText>Cadastre-se</OptionText>
          </SignUpButton>
        </OptionsContainer>
      </BackgroundImage>
    </Container>
  );
};

export default LoginPage;
