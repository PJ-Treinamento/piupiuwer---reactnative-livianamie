import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: #EAC9FF;
`;

export const WelcomeText = styled.Text`
  font-size: 24px;
  font-family: Poppins_600SemiBold;

  color: #7C00F3;
  text-shadow: 1px 1px #FFF500;

  margin: 40px 0;
`;

export const InputsContainer = styled.View`
  align-items: center;
`;

export const Input = styled.TextInput`
  background-color: white;
  border: 1.5px solid #7C00F3;
  border-radius: 5px;

  font-size: 16px;
  font-family: Poppins_400Regular;

  width: 250px;

  padding: 10px;
  margin-bottom: 20px;
`;

export const ErrorText = styled.Text`
  font-size: 12px;
  font-family: Archivo_400Regular;

  color: red;
`;

export const LoginButton = styled(RectButton)`
  align-items: center;

  width: 200px;
  padding: 12px 0;
  margin-top: 40px;

  background-color: #9E00FF;

  /* box-shadow: 1px 1px 0 1px #FFF500; */
  border-radius: 8px;
`;

export const LoginButtonText = styled.Text`
  font-size: 20px;
  letter-spacing: 2px;
  color: #FFF500;
  text-shadow: 1px 1px 0 #000000;
  font-family: Poppins_600SemiBold;
`;

// export const Container = styled.View`

// `;

// export const Container = styled.View`

// `;

// export const Container = styled.View`

// `;