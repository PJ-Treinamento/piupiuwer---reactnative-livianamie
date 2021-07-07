import React, { useCallback, useState } from "react";

import {
  BackgroundImage,
  Container,
  ErrorText,
  Input,
  InputsContainer,
  InputWrapper,
  Label,
  LoginButton,
  LoginButtonText,
  WelcomeText,
} from "./styles";

import { FontAwesome5 } from "@expo/vector-icons";
import Background from "../../assets/background.png";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [about, setAbout] = useState("");
  const [photo, setPhoto] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const { error } = useAuth();
  const navigation = useNavigation();

  const handleSignUp = useCallback(async () => {
    if (
      email !== "" &&
      password !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      photo !== "" &&
      about !== "" &&
      username !== ""
    ) {
      await api.post("/register", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        photo: photo,
        about: about,
        password: password,
        username: username,
      });

      navigation.navigate("LoginPage");
    } else {
      setErrorMessage("* Todos os campos devem ser preenchidos");
    }
  }, [email, password, firstName, lastName, photo, about, username]);

  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <StatusBar />
      <BackgroundImage source={Background} resizeMode="cover">
        <FontAwesome5 name="earlybirds" size={100} color="#9E00FF" />
        <WelcomeText>Vamos começar!</WelcomeText>

        <InputsContainer>
          <InputWrapper>
            <Label>Primeiro nome</Label>
            <Input
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
              placeholder="Digite seu primeiro nome"
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Sobrenome</Label>
            <Input
              value={lastName}
              onChangeText={(text) => setlastName(text)}
              placeholder="Digite seu sobrenome"
            />
          </InputWrapper>
          <InputWrapper>
            <Label>E-mail</Label>
            <Input
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Digite seu e-mail"
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Nome de Usuário</Label>
            <Input
              value={username}
              onChangeText={(text) => setUsername(text)}
              placeholder="Escolha um nome de usuário"
            />
          </InputWrapper>
          <InputWrapper>
            <Label>URL da foto de perfil</Label>
            <Input
              value={photo}
              onChangeText={(text) => setPhoto(text)}
              placeholder="Cole a URL da foto de perfil"
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Biografia</Label>
            <Input
              value={about}
              onChangeText={(text) => setAbout(text)}
              placeholder="Digite uma bio"
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Senha</Label>
            <Input
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Escolha uma senha"
            />
          </InputWrapper>
        </InputsContainer>

        {!!errorMessage && <ErrorText>{errorMessage}</ErrorText>}

        <LoginButton onPress={handleSignUp}>
          <LoginButtonText>Cadastrar</LoginButtonText>
        </LoginButton>
      </BackgroundImage>
    </Container>
  );
};

export default SignUpPage;
