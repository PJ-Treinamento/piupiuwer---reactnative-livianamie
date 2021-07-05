import React, { useState } from "react";
import { IPiu, IPius } from "../../models";

import Piu from "../Piu";

import {
  Container,
  PiusSectionText,
  SearchInput,
  SectionText,
  Tab,
  TimelineSections,
} from "./styles";

const Timeline: React.FC<IPius> = ({ pius }) => {
  const [search, setSearch] = useState('');
  
  return (
    <Container>
      <Tab>
        <TimelineSections>
          <PiusSectionText>Pius</PiusSectionText>
          <SectionText>Pius e repostas</SectionText>
        </TimelineSections>

        <SearchInput
          placeholder="Filtrar por usuário"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </Tab>

      {pius.map((piu: IPiu) => {
        if (
          search === "" ||
          piu.user.username.toLowerCase().includes(search.toLowerCase()) ||
          piu.user.first_name.toLowerCase().includes(search.toLowerCase()) ||
          piu.user.last_name.toLowerCase().includes(search.toLowerCase())
        ) {
          return (
            <Piu
              key={piu.id}
              // piuUsername={piu.user.username}
              pius={pius}
              piu={piu}
              // isLiked={likedPiusId.includes(piu.id)}
              // isFavorited={favoritedPiusId.includes(piu.id)}
            />
          );
        }
      })}
    </Container>
  );
};

export default Timeline;
