import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-self: center;

  width: 100%;
`;

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  flex-shrink: 1;
  align-items: center;

  align-self: stretch;
`;

export const ProfileScroll = styled.ScrollView`
  flex-shrink: 1;
`;

export const ProfileScrollContainer = styled.View`
  margin: 15px;

  border: 2px solid #7c00f3;
  border-radius: 10px;

  background-color: white;
`;

export const ProfileHeaderImage = styled.Image`
  width: 100%;
  height: 140px;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const ProfileContent = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  margin: 0px 15px 20px 15px;
`;

export const UserInfosContainer = styled.View`
  align-items: flex-start;

  width: 260px;

  margin: -50px 0px 0px 0px;
`;

export const ProfileImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;

  border-width: 1.5px;
  border-color: #7c00f3;
`;

export const NamesContainer = styled.View`
  margin: 10px 0;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-family: Poppins_600SemiBold;
`;

export const Username = styled.Text`
  font-size: 14px;
  font-family: Poppins_400Regular;
`;

export const Bio = styled.Text`
  font-size: 13px;
  font-family: Poppins_400Regular;
`;

export const SideContentContainer = styled.View`
  align-items: flex-end;
`;

export const EditProfileButton = styled(RectButton)`
  align-items: center;

  padding: 5px 8px;
  margin-top: 10px;

  /* box-shadow: 1px 1px 0 1px #FFF500; */
  border-radius: 10px;
  border-color: #9e00ff;
  border-width: 1.5px;
`;

export const EditProfileButtonText = styled.Text`
  font-size: 13px;
  font-family: Poppins_400Regular;
  color: #9e00ff;
`;

export const LogOutButton = styled(RectButton)`
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;

  margin-top: 10px;

  border-radius: 16px;
  border-color: #9e00ff;
  border-width: 1.5px;
`;

export const TabContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-top-width: 2px;
  border-top-color: #7c00f3;
  border-bottom-width: 1px;
  border-bottom-color: #7c00f3;
`;

const sectionTexts = css`
  padding: 10px 16px;

  font-size: 15px;
  font-family: Poppins_600SemiBold;
`;

export const PiusSectionText = styled.Text`
  ${sectionTexts}

  color: #FFF500;
  text-shadow: 1px 1px 0 black;

  background-color: #9e00ff;
  border-right-width: 1px;
  border-right-color: #7c00f3;
`;

export const SectionText = styled.Text`
  ${sectionTexts}
  color: #7C00F3;
`;

export const ProfilePageTimeline = styled.View``;
