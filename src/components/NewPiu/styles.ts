import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";


interface IErrorProps {
  isWrong?: boolean
}

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  background-color: white;

  margin: 15px 15px 0 15px;
  padding: 15px;

  border: 2px solid #7C00F3;
  border-radius: 10px;
`;

// export const UserPicture = styled.Image`
//   width: 44px;
//   height: 44px;
//   border-radius: 22px;
// `;

export const NewPiuContent = styled.View`
  align-items: center;
  justify-content: space-between;

`;

export const NewPiuText = styled.TextInput<IErrorProps>`
  border: 1px solid;
  border-color: ${props => props.isWrong ? 'red' : 'gray'};
  border-radius: 8px;

  width: 285px;
  height: 70px;

  padding: 8px;

  font-size: 14px;
  font-family: Poppins_400Regular;
`;

export const CounterContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 280px;
`;

export const CounterErrorText = styled.Text`
  font-size: 12px;
  font-family: Poppins_400Regular;

  color: red;
`;

export const CounterText = styled.Text<IErrorProps>`
  color: ${props => props.isWrong ? 'red' : 'black'};
`;

export const PostButton = styled(RectButton)`
  align-items: center;
  justify-content: center;

  background-color: #9E00FF;
  
  padding: 8px 16px;

  /* box-shadow: 1px 1px 0 1px #FFF500; */
  border-radius: 8px;
`;

export const PostButtonText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #FFF500;
  text-shadow: 1px 1px 0 #000000;
`;