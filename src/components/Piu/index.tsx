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

const Piu: React.FC = () => {
  return (
    <Container>
      <UserPicture
        source={{
          uri: "https://pbs.twimg.com/profile_images/1245853589320368133/cRyUvTc5_400x400.jpg",
        }}
      />
      <PiuContent>
        <TopContent>
          <UserInfos>
            <UserName>Lívia Namie</UserName>
            <UserUsername>@livianamie</UserUsername>
          </UserInfos>

          <Feather name='more-horizontal' size={15} />
        </TopContent>

        <PiuText>
          Opa, tudo bom? Opa, tudo bom? Opa, tudo bom? Opa, tudo bom? Opa, tudo
          bom? Opa, tudo bom? Opa, tudo bom?
        </PiuText>

        <InteractionsContainer>
          <Interaction>
          <Feather name='message-square' size={15} />
            <CommentText>0</CommentText>
          </Interaction>

          <Interaction>
          <Feather name='repeat' size={15} />
            <RepiuText>0</RepiuText>
          </Interaction>

          <Interaction>
          <Feather name='heart' size={15} />
            <LikeText>0</LikeText>
          </Interaction>

          <Feather name='star' size={15} />
          {/* <TrashIcon isFromUser={fromUser} onClick={handleDelete} /> */}

          <Feather name='share' size={15} />
        </InteractionsContainer>
      </PiuContent>
    </Container>
  );
};

export default Piu;
