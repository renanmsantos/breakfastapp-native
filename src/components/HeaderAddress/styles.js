import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 56px;

  background: rgba(255,255,255,0.3);
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.Text`
  color: #333;
  font-size: 13px;
  padding-left: 5px;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
