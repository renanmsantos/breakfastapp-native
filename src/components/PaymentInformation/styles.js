import styled from 'styled-components/native';

export const Container = styled.View`
  border: 2px;
  height: 75%;
  margin: 2px;

  background: rgba(255, 255, 255, 0.3);
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.View`
  flex: 1;
  align-self: stretch;
  flex-direction: row;
  padding-top: 10px;
  padding-left: 10px;
`;

export const Form = styled.View`
  margin: 5px;
  flex: 1;
  align-self: stretch;
  padding-left: 10px;
  padding-bottom: 15px;
`;

export const TitleText = styled.Text`
  color: #333;
  padding-top: 10px;
  padding-left: 10px;
  font-size: 15px;
  font-weight: bold;
`;

export const Text = styled.Text`
  color: #333;
  font-size: 13px;
`;
