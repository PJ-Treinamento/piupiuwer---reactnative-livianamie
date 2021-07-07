import React, { useCallback, useState } from "react";

import {
  CommentText,
  Container,
  Interaction,
  InteractionsContainer,
  LikeIconButton,
  LikeText,
  PiuContent,
  PiuText,
  RepiuText,
  TopContent,
  TrashIconButton,
  UserInfos,
  UserName,
  UserPicture,
  UserUsername,
} from "./styles";

import { Feather } from "@expo/vector-icons";
import { IPiu, IPius } from "../../models";
import { useAuth } from "../../hooks/useAuth";
import api from "../../services/api";

interface PiuProps {
  piu: IPiu;
  pius: IPiu[];
  setPius: (array: IPiu[]) => void;
  isLiked?: boolean;
  isFavorited?: boolean;
  piuUsername?: string;
}

const Piu: React.FC<PiuProps> = ({
  piu,
  pius,
  setPius,
  piuUsername,
  isLiked,
  isFavorited,
}) => {
  const [likeCount, setLikeCount] = useState(piu.likes.length);
  const [likeStatus, setLikeStatus] = useState(isLiked);
  const [favoriteStatus, setFavoriteStatus] = useState(isFavorited);

  const { user, token } = useAuth();

  const id = piu.id;

  const handleDelete = useCallback(() => {
    pius.map((piuApi: IPiu, index) => {
      if (id === piuApi.id) {
        const newPiusArray = [...pius];
        newPiusArray.splice(index, 1);
        setPius(newPiusArray);

        const deletePiu = async () => {
          await api.delete("/pius", { data: { piu_id: piuApi.id } });
        };

        return deletePiu();
      }
    });
  }, [id, pius]);

  const handleLike = useCallback(() => {
    pius.map((piuApi: IPiu) => {
      if (id === piuApi.id) {
        const addLikeToApi = async () => {
          const response = await api.post("/pius/like", { piu_id: piuApi.id });
          const operation: string = response.data.operation;

          if (operation === "like") {
            setLikeCount(likeCount + 1);
            setLikeStatus(true);
          } else {
            setLikeCount(likeCount - 1);
            setLikeStatus(false);
          }
        };
        addLikeToApi();
      }
    });
  }, [id, pius, likeCount]);

  const handleFavorite = useCallback(() => {
    pius.map((piuApi: IPiu) => {
      if (id === piuApi.id) {
        if (favoriteStatus === true) {
          const unfavorite = async () => {
            setFavoriteStatus(false);
            await api.post("/pius/unfavorite", { piu_id: piu.id });
          };
          unfavorite();
        } else {
          const favorite = async () => {
            await api.post("/pius/favorite", { piu_id: piuApi.id });
            setFavoriteStatus(true);
          };
          favorite();
        }
      }
    });
    return favoriteStatus;
  }, [favoriteStatus, id, pius, token]);

  return (
    <Container>
      <UserPicture source={{ uri: piu.user.photo }} />
      <PiuContent>
        <TopContent>
          <UserInfos>
            <UserName>{piu.user.first_name}</UserName>
            <UserUsername>@{piu.user.username}</UserUsername>
          </UserInfos>

          <Feather name="more-horizontal" size={16} />
        </TopContent>

        <PiuText>{piu.text}</PiuText>

        <InteractionsContainer>
          <Interaction>
            <Feather name="message-square" size={16} />
            <CommentText>0</CommentText>
          </Interaction>

          <Interaction>
            <Feather name="repeat" size={16} />
            <RepiuText>0</RepiuText>
          </Interaction>

          <Interaction>
            <LikeIconButton onPress={handleLike}>
              <Feather
                name="heart"
                size={16}
                color={likeStatus ? "red" : "black"}
              />
            </LikeIconButton>
            <LikeText>{likeCount}</LikeText>
          </Interaction>

          <Interaction>
            <LikeIconButton onPress={handleFavorite}>
              <Feather
                name="star"
                size={16}
                color={favoriteStatus ? "#FFCC00" : "black"}
              />
            </LikeIconButton>
          </Interaction>

          {piu.user.username === user.username ? (
            <TrashIconButton onPress={handleDelete}>
              <Feather name="trash-2" size={16} />
            </TrashIconButton>
          ) : (
            <Feather name="share" size={16} />
          )}
        </InteractionsContainer>
      </PiuContent>
    </Container>
  );
};

export default Piu;
