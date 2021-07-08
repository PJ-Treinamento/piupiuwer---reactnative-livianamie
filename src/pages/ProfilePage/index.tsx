import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  BackgroundImage,
  Bio,
  Container,
  EditProfileButton,
  EditProfileButtonText,
  LogOutButton,
  Name,
  NamesContainer,
  PiusSectionText,
  ProfileContent,
  ProfileHeaderImage,
  ProfileImage,
  ProfilePageTimeline,
  ProfileScroll,
  ProfileScrollContainer,
  SectionText,
  SideContentContainer,
  TabContainer,
  UserInfosContainer,
  Username,
} from "./styles";
import Background from "../../assets/background.png";
import Tower from "../../assets/tower.jpg";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header";
import { useAuth } from "../../hooks/useAuth";
import { IPiu } from "../../models";
import api from "../../services/api";
import Piu from "../../components/Piu";
import { Feather } from "@expo/vector-icons";

const ProfilePage: React.FC = () => {
  const [pius, setPius] = useState<IPiu[]>([]);
  const { user, logout } = useAuth();

  useEffect(() => {
    const loadPius = async () => {
      const response = await api.get("/pius");
      setPius(response.data);
    };
    loadPius();
  }, []);

  const likedPiusId = useMemo(() => {
    const likedPius = pius.filter((piu) => {
      const likedPiusUsername = piu.likes.map((users) => users.user.username);
      return likedPiusUsername.includes(user.username);
    });
    return likedPius.map((piu) => piu.id);
  }, [pius, user.username]);

  const favoritedPiusId = useMemo(() => {
    return user.favorites.map((favoritedPiu) => favoritedPiu.id);
  }, [user.favorites]);

  const handleLogout = useCallback(() => {    
    logout();
  }, [logout]);

  return (
    <BackgroundImage source={Background} resizeMode="cover">
      <Container>
        <StatusBar />

        <Header page_name='Perfil' />

        <ProfileScroll>
          <ProfileScrollContainer>
            <ProfileHeaderImage source={Tower} />

            <ProfileContent>
              <UserInfosContainer>
                <ProfileImage source={{ uri: user.photo }} />

                <NamesContainer>
                  <Name>
                    {user.first_name} {user.last_name}
                  </Name>
                  <Username>@{user.username}</Username>
                </NamesContainer>

                <Bio>
                  {user.about !== ""
                    ? user.about
                    : "Apaixonada por sorvete de chocomenta"}
                </Bio>
              </UserInfosContainer>

              <SideContentContainer>
                <EditProfileButton>
                  <EditProfileButtonText>Editar perfil</EditProfileButtonText>
                </EditProfileButton>

                <LogOutButton onPress={handleLogout}>
                  <Feather name="power" size={16} color='#9e00ff'/>
                </LogOutButton>
              </SideContentContainer>
            </ProfileContent>

            <TabContainer>
              <PiusSectionText>Pius</PiusSectionText>
              <SectionText>Repostas</SectionText>
              <SectionText>Favoritos</SectionText>
              <SectionText>Curtidas</SectionText>
            </TabContainer>

            <ProfilePageTimeline>
              {pius.map((piu: IPiu) => {
                if (piu.user.username === user.username) {
                  return (
                    <Piu
                      key={piu.id}
                      // piuUsername={piu.user.username}
                      pius={pius}
                      setPius={setPius}
                      piu={piu}
                      isLiked={likedPiusId.includes(piu.id)}
                      isFavorited={favoritedPiusId.includes(piu.id)}
                    />
                  );
                }
              })}
            </ProfilePageTimeline>
          </ProfileScrollContainer>
        </ProfileScroll>
      </Container>
    </BackgroundImage>
  );
};

export default ProfilePage;
