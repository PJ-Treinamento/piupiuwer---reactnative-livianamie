import React, { useCallback, useState } from "react";

import {
  BackgroundImage,
  Container,
  ErrorText,
  Input,
  InputsContainer,
  LoginButton,
  LoginButtonText,
  WelcomeText,
} from "./styles";

import { FontAwesome5 } from "@expo/vector-icons";
import Background from "../../assets/background.png";
import { useAuth } from "../../hooks/useAuth";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { login, error } = useAuth();

  const handleLogin = useCallback(async () => {
    await login({ email, password });

    if (error) {
      setErrorMessage("* E-mail ou senha incorretos");
    }
    if (email === "" || password === "") {
      setErrorMessage("* Todos os campos devem estar preenchidos");
    }
  }, [login, email, password]);

  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <StatusBar />
      <BackgroundImage source={Background} resizeMode="cover">
        <FontAwesome5 name="earlybirds" size={100} color="#9E00FF" />
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

        {!!errorMessage && <ErrorText>{errorMessage}</ErrorText>}

        <LoginButton onPress={handleLogin}>
          <LoginButtonText>Entrar</LoginButtonText>
        </LoginButton>
      </BackgroundImage>
    </Container>
  );
};

export default LoginPage;
