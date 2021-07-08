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

export const NotificationsScroll = styled.ScrollView`
  flex-shrink: 1;
`;

export const NotificationsScrollContainer = styled.View`
  margin: 15px;

  border: 2px solid #7c00f3;
  border-radius: 10px;

  background-color: white;
`;

export const NotificationContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  border-top-width: 1px;
  border-top-color: #7C00F3;
  
  padding: 10px 15px;
`;

export const NotificationText = styled.Text`
  font-size: 16px;
  font-family: Poppins_400Regular;
`;