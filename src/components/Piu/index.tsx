import React from "react";

import {
  CommentText,
  Container,
  Interaction,
  InteractionsContainer,
  LikeText,
  PiuContent,
  PiuText,
  RepiuText,
  TopContent,
  UserInfos,
  UserName,
  UserPicture,
  UserUsername,
} from "./styles";

import { Feather } from "@expo/vector-icons";
import { IPiu, IPius } from "../../models";
import { useAuth } from "../../hooks/useAuth";

interface PiuProps {
  piu: IPiu;
  pius: IPiu[];
  isLiked?: boolean;
  isFavorited?: boolean;
  piuUsername?: string;
}

const Piu: React.FC<PiuProps> = ({
  piu,
  pius,
  piuUsername,
  isLiked,
  isFavorited,
}) => {
  const { user } = useAuth();

  return (
    <Container>
      <UserPicture source={{ uri: piu.user.photo }} />
      <PiuContent>
        <TopContent>
          <UserInfos>
            <UserName>{piu.user.first_name}</UserName>
            <UserUsername>@{piu.user.username}</UserUsername>
          </UserInfos>

          <Feather name="more-horizontal" size={15} />
        </TopContent>

        <PiuText>{piu.text}</PiuText>

        <InteractionsContainer>
          <Interaction>
            <Feather name="message-square" size={15} />
            <CommentText>0</CommentText>
          </Interaction>

          <Interaction>
            <Feather name="repeat" size={15} />
            <RepiuText>0</RepiuText>
          </Interaction>

          <Interaction>
            <Feather name="heart" size={15} />
            <LikeText>0</LikeText>
          </Interaction>

          <Feather name="star" size={15} />
          {piu.user.username === user.username ? (
            <Feather name="trash-2" size={15} />
          ) : (
            <Feather name="share" size={15} />
          )}
        </InteractionsContainer>
      </PiuContent>
    </Container>
  );
};

export default Piu;
