import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const OrderId = styled.Text`
  font-weight: bold;
  font-size: 19px;
  color: #333;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const Status = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
`;

export const Price = styled.Text`
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;
`;

export const Test = styled.Text``;
