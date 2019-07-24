import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 2px;
  padding: 10px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);

  flex-direction: row;
`;

export const Left = styled.View`
  flex: 1;
`;

export const Box = styled.View`
  flex-direction: row;
  align-content: center;
`;

export const AddressText = styled.Text`
  font-size: 14px;
  color: #333;
`;
