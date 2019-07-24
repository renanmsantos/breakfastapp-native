import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  padding-top: 60px;
`;

export const CardPayment = styled(RectButton)`
  flex: 1;
  width: 200px;
  height: 150px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.4);
  align-items: center;
  margin: 10px;
`;

export const ContentText = styled.Text`
  font-size: 16px;
  text-align: center;
`;
