import { StatusBar } from "expo-status-bar";
import React from "react";
import Header from "../../components/Header";
import {
  BackgroundImage,
  Container,
  MessageContainer,
  MessagesScroll,
  MessagesScrollContainer,
  MessageText,
  MessageTextsContainer,
  UserNames,
} from "./styles";

import Background from "../../assets/background.png";
import { FontAwesome } from "@expo/vector-icons";

const MessagesPage: React.FC = () => {
  return (
    <BackgroundImage source={Background} resizeMode="cover">
      <Container>
        <StatusBar />

        <Header />

        <MessagesScroll>
          <MessagesScrollContainer>
            <MessageContainer>
              <FontAwesome size={50} name="user-circle" />
              <MessageTextsContainer>
                <UserNames>Fulano</UserNames>
                <MessageText>Fulano curtiu seu piu</MessageText>
              </MessageTextsContainer>
            </MessageContainer>

            <MessageContainer>
              <FontAwesome size={50} name="user-circle" />
              <MessageTextsContainer>
                <UserNames>Fulano</UserNames>
                <MessageText>Fulano curtiu seu piu</MessageText>
              </MessageTextsContainer>
            </MessageContainer>

            <MessageContainer>
              <FontAwesome size={50} name="user-circle" />
              <MessageTextsContainer>
                <UserNames>Fulano</UserNames>
                <MessageText>Fulano curtiu seu piu</MessageText>
              </MessageTextsContainer>
            </MessageContainer>
          </MessagesScrollContainer>
        </MessagesScroll>
      </Container>
    </BackgroundImage>
  );
};

export default MessagesPage;
