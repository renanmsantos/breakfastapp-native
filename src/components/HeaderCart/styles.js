import styled from 'styled-components';

export const Container = styled.View`
  padding: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #ff5f49;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #fff;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Info = styled.View`
  margin-left: 15px;
`;
