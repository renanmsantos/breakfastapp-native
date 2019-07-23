import styled from 'styled-components/native';

export const Container = styled.View`
  height: 56px;
  background: rgba(255, 255, 255, 0.3);
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TotalText = styled.Text`
  color: #333;
  font-size: 18px;
  padding-right: 10px;
`;

export const TotalPriceText = styled.Text`
  color: #333;
  font-weight: bold;
  font-size: 20px;
  padding-right: 10px;
`;
