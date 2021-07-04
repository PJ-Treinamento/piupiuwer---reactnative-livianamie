import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  border-top-width: 1px;
  border-top-color: #7C00F3;
  
  padding: 10px 15px;
`;

export const UserPicture = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;

  border: 1.5px #7c00f3;

  margin-right: 10px;
`;

export const PiuContent = styled.View`
  flex-shrink: 1;
`;

export const TopContent = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 8px;
`;

export const UserInfos = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserName = styled.Text`
  font-size: 15px;
  font-family: Poppins_600SemiBold;

  margin-right: 5px;
`;

export const UserUsername = styled.Text`
  font-size: 12px;
  font-family: Poppins_400Regular;
`;

export const PiuText = styled.Text`
  font-size: 14px;
  font-family: Poppins_400Regular;

  margin-bottom: 15px;
`;

export const InteractionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Interaction = styled.View`
  flex-direction: row;
  align-items: center;
`;

const interactionsTexts = css `
  font-size: 14px;
  font-family: Poppins_400Regular;
  margin-left: 2px;
`;

export const CommentText = styled.Text`
  ${interactionsTexts}
`;

export const RepiuText = styled.Text`
  ${interactionsTexts}
`;

export const LikeText = styled.Text`
  ${interactionsTexts}
`;

// export const LikeText = styled.View`

// `;

// export const LikeText = styled.View`

// `;