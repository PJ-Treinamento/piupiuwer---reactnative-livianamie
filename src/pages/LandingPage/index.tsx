import React, { useCallback } from "react";

import {
  BackgroundImage,
  ButtonsContainer,
  Container,
  LandindButton,
  LoginPageButtonText,
  PiupiuwerText,
  SignUpPageButtonText,
  WelcomeText,
} from "./styles";

import { FontAwesome5 } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import Background from '../../assets/background.png';

const LandingPage: React.FC = () => {
  const navigation = useNavigation();

  const goToLoginPage = () => {
    navigation.navigate('Login Screen');
  }

  return (
    <Container>
      <BackgroundImage source={ Background } resizeMode='cover'>
        <FontAwesome5 name="earlybirds" size={100} color="#9E00FF" />

        <PiupiuwerText>Piupiuwer</PiupiuwerText>
        <WelcomeText>Junte-se à maior e melhor rede de trainees do país!</WelcomeText>

        <ButtonsContainer>
          <LandindButton onPress={goToLoginPage}>
            <LoginPageButtonText>Faça login</LoginPageButtonText>
          </LandindButton>

          <LandindButton>
            <SignUpPageButtonText>Cadastre-se</SignUpPageButtonText>
          </LandindButton>
        </ButtonsContainer>
      </BackgroundImage>
    </Container>
  );
};

export default LandingPage;
