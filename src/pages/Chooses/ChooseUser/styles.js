import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const ChooseText = styled.Text`
  margin-top: 50px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const ChooseButton = styled(Button)`
  margin-top: 10px;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const LinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
