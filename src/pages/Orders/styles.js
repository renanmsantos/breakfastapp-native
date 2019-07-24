import styled from 'styled-components/native';

import Input from '~/components/Input';

export const Container = styled.View`
  flex: 1;
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
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const FormInput = styled(Input)`
  margin: 5px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 10,
  },
  showsVerticalScrollIndicator: false,
})``;
