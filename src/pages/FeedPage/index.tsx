import React, { useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";

import Header from "../../components/Header";
import NewPiu from "../../components/NewPiu";
import Timeline from "../../components/Timeline";

import { BackgroundImage, Container, TimelineScroll } from "./styles";

import api from "../../services/api";
import { IPiu, IUser } from "../../models";
import Background from "../../assets/background.png";
import { useAuth } from "../../hooks/useAuth";

const FeedPage: React.FC = () => {
  const [pius, setPius] = useState<IPiu[]>([]);
  const [updatedUser, setUpdatedUser] = useState<IUser>({} as IUser);

  const { user } = useAuth();

  useEffect(() => {
    const loadPius = async () => {
      const response = await api.get("/pius");
      setPius(response.data);
    };
    loadPius();

    const getUser = async () => {
      const response = await api.get(`/users?username=${user.username}`);
      setUpdatedUser(response.data);
    };
    getUser();
  }, []);

  return (
    <BackgroundImage source={Background} resizeMode="cover">
      <Container>
        <StatusBar />
        <Header page_name='Página Inicial' />
        <TimelineScroll>
          <NewPiu pius={pius} setPius={setPius} />
          <Timeline updatedUser={updatedUser} pius={pius} setPius={setPius} />
        </TimelineScroll>
      </Container>
    </BackgroundImage>
  );
};

export default FeedPage;
