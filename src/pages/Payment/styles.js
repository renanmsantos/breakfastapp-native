import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 60px 15px 15px;
`;

export const SubmitButton = styled(Button)`
  margin-bottom: 8px;
  background: #f2be21;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
