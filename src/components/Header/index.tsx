import React, { useCallback, useEffect, useState } from "react";

import {
  ClosePopUpButton,
  Container,
  NamesContainer,
  PageInfo,
  PageInfoText,
  PopUpContent,
  PopUpSearchInput,
  SearchButton,
  User,
  UserNames,
  UserPicture,
  UsersList,
  UserUsername,
} from "./styles";

import { Feather, FontAwesome5 } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { IUser } from "../../models";
import api from "../../services/api";

const Header: React.FC = () => {
  const [popUpDisplay, setPopUpDisplay] = useState(false);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      const response = await api.get("/users");
      setUsers(response.data);
    };
    loadUsers();
  }, []);

  const openPopUp = useCallback(() => {
    setPopUpDisplay(true);
  }, []);

  const closePopUp = useCallback(() => {
    setPopUpDisplay(false);
  }, []);

  return (
    <Container>
      <PageInfo>
        <FontAwesome5 name="earlybirds" size={35} color="#9E00FF" />
        <PageInfoText>Página Inicial</PageInfoText>
      </PageInfo>

      <SearchButton onPress={openPopUp}>
        <Feather name="search" size={30} color="#7C00F3" />
      </SearchButton>

      <Modal isVisible={popUpDisplay}>
        <PopUpContent>
          <PopUpSearchInput
            placeholder="Buscar"
            placeholderTextColor="#F8EDFF"
          />

          <UsersList>
            {users.map((user: IUser) => {
              if (
                search === "" ||
                user.username.toLowerCase().includes(search.toLowerCase()) ||
                user.first_name.toLowerCase().includes(search.toLowerCase()) ||
                user.last_name.toLowerCase().includes(search.toLowerCase())
              ) {
                return (
                  <User key={user.id}>
                    <UserPicture source={{ uri: user.photo }} />
                    <NamesContainer>
                      <UserNames>
                        {user.first_name} {user.last_name}
                      </UserNames>
                      <UserUsername>@{user.username}</UserUsername>
                    </NamesContainer>
                  </User>
                );
              }
            })}
          </UsersList>

          <ClosePopUpButton onPress={closePopUp}>
            <Feather name="x-circle" size={36} color="#7C00F3" />
          </ClosePopUpButton>
        </PopUpContent>
      </Modal>
    </Container>
  );
};

export default Header;
