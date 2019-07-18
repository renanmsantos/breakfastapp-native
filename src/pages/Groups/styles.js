import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding-left: 25px;
  padding-right: 25px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
`;

export const UsernameText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  align-self: center;
`;

export const WithoutGroupText = styled.Text`
  margin-top: 15px;
  margin-bottom: 20px;
  font-size: 15px;
  color: #fff;
  align-content: stretch;
`;
