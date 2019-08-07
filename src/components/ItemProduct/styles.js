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

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;

export const Partner = styled.Text`
  color: #333;
`;

export const Price = styled.Text`
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;
`;

export const TotalText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  padding-right: 10px;
  color: #333;
`;
