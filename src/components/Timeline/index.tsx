import React from 'react';

import Piu from '../Piu';

import { Container, PiusSectionText, SearchInput, SectionText, Tab, TimelineSections } from './styles';

const Timeline: React.FC = () => {
  return (
    <Container>
      <Tab>
        <TimelineSections>
          <PiusSectionText>Pius</PiusSectionText>
          <SectionText>Pius e repostas</SectionText>
        </TimelineSections>
        
        <SearchInput placeholder='Filtrar por usuário'/>
      </Tab>

      <Piu />
      <Piu />
      <Piu />
      <Piu />
      <Piu />
      <Piu />
    </Container>
  );
}

export default Timeline;