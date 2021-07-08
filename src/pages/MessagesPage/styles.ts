import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-self: center;

  width: 100%;
`;

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  flex-shrink: 1;
  align-items: center;

  align-self: stretch;
`;

export const MessagesScroll = styled.ScrollView`
  flex-shrink: 1;
`;

export const MessagesScrollContainer = styled.View`
  margin: 15px;

  border: 2px solid #7c00f3;
  border-radius: 10px;

  background-color: white;
`;

export const MessageContainer = styled.View`
  flex-direction: row;
  align-items: center;

  border-top-width: 1px;
  border-top-color: #7C00F3;
  
  padding: 10px 15px;
`;

export const MessageTextsContainer = styled.View`
  align-items: flex-start;
  margin-left: 10px;
`;

export const UserNames = styled.Text`
  font-size: 16px;
  color: #7C00F3;
  font-family: Poppins_600SemiBold;
`;

export const MessageText = styled.Text`
  font-size: 14px;
  color: gray;
  font-family: Poppins_400Regular;
  margin-top: 5px;
`;