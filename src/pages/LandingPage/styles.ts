import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;

  align-self: stretch;
`;

export const PiupiuwerText = styled.Text`
  font-size: 40px;
  font-family: Poppins_600SemiBold;

  margin-top: 20px;

  color: #7C00F3;
  text-shadow: 1px 1px #FFF500;
`;

export const WelcomeText = styled.Text`
  font-size: 18px;
  font-family: Poppins_600SemiBold;

  margin: 40px;

  text-align: center;

  color: #7C00F3;
`;

export const ButtonsContainer = styled.View`

`;

export const LandindButton = styled(RectButton)`
  align-items: center;

  width: 250px;
  padding: 10px 0;
  margin-top: 20px;

  background-color: #9E00FF;

  /* box-shadow: 1px 1px 0 1px #FFF500; */
  border-radius: 8px;
`;

export const LoginPageButtonText = styled.Text`
  font-size: 20px;
  letter-spacing: 2px;
  color: #FFF500;
  text-shadow: 1px 1px 0 #000000;
  font-family: Poppins_600SemiBold;

  padding: 8px;
`;

export const SignUpPageButtonText = styled.Text`
  font-size: 20px;
  letter-spacing: 2px;
  color: #FFF500;
  text-shadow: 1px 1px 0 #000000;
  font-family: Poppins_600SemiBold;

  padding: 8px 10px;
`;