import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 60px 20px 15px 20px;

  background-color: white;
  border-bottom-color: #7C00F3;
  border-bottom-width: 2px;
`;

export const PageInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;


export const PageInfoText = styled.Text`
  font-size: 20px;
  font-family: Poppins_600SemiBold;
  margin-left: 15px;
`;

export const SearchButton = styled(RectButton)`
  border-radius: 15px;
`;

export const Modal = styled.Modal`

`;

export const PopUpContent = styled.View`
  align-items: center;
  justify-content: center;
  align-self: center;

  width: 300px;
  height: 500px;

  padding: 20px;
  border-radius: 8px;
  border: 2px #7C00F3;

  background-color: white;
`;

export const PopUpSearchInput = styled.TextInput`
  width: 200px;
  height: 40px; 

  margin-bottom: 20px;
  padding: 5px 10px;

  background-color: #EAC9FF;

  border: 1.5px #7C00F3;
  border-radius: 8px;
  /* box-shadow: 2px 2px 0 0 #FFF500; */

  font-size: 16px;
  font-family: Poppins_400Regular;
`;

export const UsersList = styled.ScrollView`
  border: 1.5px #7C00F3;
  border-radius: 8px;
`;

export const User = styled.View`
  flex-direction: row;
  align-items: center;

  width: 250px;

  padding: 10px;

  border-top-width: 1px;
  border-top-color: #9E00FF;
`;

export const UserPicture = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;

  margin-right: 10px;
`;

export const NamesContainer = styled.View`

`;

export const UserNames = styled.Text`
  font-size: 16px;
  font-family: Poppins_600SemiBold;
`;

export const UserUsername = styled.Text`
  font-size: 14px;
  font-family: Poppins_400Regular;
`;

export const ClosePopUpButton = styled(RectButton)`
  margin-top: 20px;
  border-radius: 18px;
`;