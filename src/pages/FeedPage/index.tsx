import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Header from '../../components/Header';
import NewPiu from '../../components/NewPiu';
import Timeline from '../../components/Timeline';

import { Container, TimelineScroll } from './styles';

const FeedPage: React.FC = () => {
  return (
    <Container>
      <StatusBar />
      <Header />
      <TimelineScroll>
        <NewPiu />
        <Timeline />
      </TimelineScroll>
      
    </Container>
  );
}

export default FeedPage;