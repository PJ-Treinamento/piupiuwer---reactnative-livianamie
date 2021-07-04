import React, { useState, useCallback, useEffect } from "react";

import {
  Container,
  CounterContainer,
  CounterErrorText,
  CounterText,
  NewPiuContent,
  NewPiuText,
  PostButton,
  PostButtonText,
} from "./styles";

const NewPiu: React.FC = () => {
  const [newPiuText, setNewPiuText] = useState('');
  const [counterErrorText, setCounterErrorText] = useState('');
  const [isWrong, setIsWrong] = useState(false);
  

  useEffect(() => {
    const counterCheck = () => {
      if (newPiuText.length > 140) {
        setCounterErrorText('* Não ultrapasse o limite de caracteres');
        setIsWrong(true);
      }
      else {
        setCounterErrorText('');
        setIsWrong(false);
      }
    }
    counterCheck();
  }, [newPiuText.length])

  return (
    <Container>
      {/* <UserPicture 
        source={{
          uri: "https://pbs.twimg.com/profile_images/1245853589320368133/cRyUvTc5_400x400.jpg",
      }} /> */}

      <NewPiuContent>
        <NewPiuText
          isWrong={isWrong}
          multiline={true}
          numberOfLines={3}
          placeholder="O que você está pensando?"
          value={newPiuText}
          onChangeText={(text) => setNewPiuText(text)}
          placeholderTextColor="#c1bccc"
        />

        <CounterContainer>
          <CounterErrorText>
            { counterErrorText }
          </CounterErrorText>

          <CounterText isWrong={isWrong}>
            { newPiuText.length }
          </CounterText>
        </CounterContainer>
      </NewPiuContent>

      <PostButton>
        <PostButtonText>Piu</PostButtonText>
      </PostButton>
    </Container>
  );
};

export default NewPiu;
