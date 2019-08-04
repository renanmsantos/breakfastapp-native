import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 15px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 30px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const Separator = styled.View`
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const NewButton = styled(Button)`
  margin-top: 5px;
  margin-bottom: 20px;
  background: #f2be21;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
