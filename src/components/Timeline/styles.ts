import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin: 15px;

  border: 2px solid #7C00F3;
  border-radius: 10px;

  background-color: white;
`;

export const Tab = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom-width: 1px;
  border-bottom-color: #7C00F3;
`;

export const TimelineSections = styled.View`
  flex-direction: row;
  align-items: center;
`;

const sectionTexts = css`
  padding: 12px 18px;

  font-size: 16px;
  font-family: Poppins_600SemiBold;
`;

export const PiusSectionText = styled.Text`
  ${sectionTexts}

  color: #FFF500;
  text-shadow: 1px 1px 0 black;

  background-color: #9E00FF;
  border-right-width: 1px;
  border-right-color: #7C00F3;
`;

export const SectionText = styled.Text`
  ${sectionTexts}
  color: #7C00F3;
`;

export const SearchInput = styled.TextInput`
  width: 100px;
  height: 30px; 
  margin-right: 8px;
  padding: 5px;

  font-size: 13px;
  font-family: Poppins_400Regular;
  background-color: #EAC9FF;

  border: 1px solid #7C00F3;
  border-radius: 8px;
`;