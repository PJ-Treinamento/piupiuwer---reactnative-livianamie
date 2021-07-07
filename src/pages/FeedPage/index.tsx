import React, { useCallback, useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";

import Header from "../../components/Header";
import NewPiu from "../../components/NewPiu";
import Timeline from "../../components/Timeline";

import { BackgroundImage, Container, TimelineScroll } from "./styles";

import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IPiu } from "../../models";
import Background from '../../assets/background.png';

const FeedPage: React.FC = () => {
  const [pius, setPius] = useState<IPiu[]>([]);

  // useEffect(() => {
  //   const clearAsyncStorage = async() => {
  //     AsyncStorage.clear();
  //   }
  //   clearAsyncStorage();
  // }, [])

  useEffect(() => {
    const loadPius = async () => {
      const response = await api.get("/pius");
      setPius(response.data);
    };
    loadPius();
  }, []);

  return (
    
      <BackgroundImage source={ Background } resizeMode='cover'>
        <Container>
          <StatusBar />
          <Header />
          <TimelineScroll>
            <NewPiu pius={pius} setPius={setPius}/>
            <Timeline pius={pius}/>
          </TimelineScroll>
        </Container>
      </ BackgroundImage>
    
  );
};

export default FeedPage;
