import styled from 'styled-components/native';

import Button from '~/components/Button';
import Input from '~/components/Input';

export const Container = styled.ScrollView`
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

export const DescriptionText = styled.Text`
  margin-top: 15px;
  font-size: 15px;
  color: #fff;
  align-content: center;
  text-align: center;
`;

export const GroupAdmin = styled.View``;

export const WithoutGroup = styled.View``;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 30px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;


