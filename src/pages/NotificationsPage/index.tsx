import { StatusBar } from "expo-status-bar";
import React from "react";
import Header from "../../components/Header";
import {
  BackgroundImage,
  Container,
  NotificationContainer,
  NotificationsScroll,
  NotificationsScrollContainer,
  NotificationText,
} from "./styles";

import Background from "../../assets/background.png";

const NotificationsPage: React.FC = () => {
  return (
    <BackgroundImage source={Background} resizeMode="cover">
      <Container>
        <StatusBar />

        <Header page_name='Notificações'/>

        <NotificationsScroll>
          <NotificationsScrollContainer>
            <NotificationContainer>
              <NotificationText>Fulano curtiu seu piu</NotificationText>
            </NotificationContainer>
            <NotificationContainer>
              <NotificationText>Ciclano respondeu seu piu</NotificationText>
            </NotificationContainer>
            <NotificationContainer>
              <NotificationText>Ciclano curtiu seu piu</NotificationText>
            </NotificationContainer>
          </NotificationsScrollContainer>
        </NotificationsScroll>
      </Container>
    </BackgroundImage>
  );
};

export default NotificationsPage;
