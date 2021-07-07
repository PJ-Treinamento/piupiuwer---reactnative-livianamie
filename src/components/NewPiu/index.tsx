import React, { useState, useCallback, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { IPiu } from "../../models";
import api from "../../services/api";

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

interface NewPiuProps {
  pius: IPiu[];
  setPius: (array: IPiu[]) => void;
}

const NewPiu: React.FC<NewPiuProps> = ({ pius, setPius }) => {
  const [newPiuInfos, setNewPiuInfos] = useState<IPiu>({} as IPiu);
  
  const [newPiuText, setNewPiuText] = useState('');
  const [counterErrorText, setCounterErrorText] = useState('');
  const [isWrong, setIsWrong] = useState(false);

  const { user } = useAuth();
  

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

  const handleNewPiu = async () => {
    const response = await api.post('/pius', { text: newPiuText });

    const newPiu: IPiu = {
      id: response.data.id,
      user: user,
      likes: [],
      text: newPiuText,
      created_at: response.data.created_at,
      updated_at: response.data.updated_at
    }

    setPius([newPiu, ...pius])
  }

  return (
    <Container>
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

      <PostButton onPress={handleNewPiu}>
        <PostButtonText>Piu</PostButtonText>
      </PostButton>
    </Container>
  );
};

export default NewPiu;
