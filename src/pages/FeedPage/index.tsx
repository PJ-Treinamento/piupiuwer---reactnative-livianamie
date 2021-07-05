import React, { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';

import Header from '../../components/Header';
import NewPiu from '../../components/NewPiu';
import Timeline from '../../components/Timeline';

import { Container, TimelineScroll } from './styles';

import api from '../../services/api';

const FeedPage: React.FC = () => {
  const [pius, setPius] = useState([]);

  useEffect(() => {
    const loadPius = async () => {
      const response = await api.get('/pius');
      setPius(response.data);
    }
    loadPius()
  }, []);
  
  return (
    <Container>
      <StatusBar />
      <Header />
      <TimelineScroll>
        <NewPiu />
        <Timeline pius={pius} />
      </TimelineScroll>
      
    </Container>
  );
}

export default FeedPage;