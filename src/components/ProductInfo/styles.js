import styled from 'styled-components/native';

export const Container = styled.View`
  border: 2px;
  height: 55%;
  margin: 2px;

  background: rgba(255, 255, 255, 0.3);
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.View`
  flex: 1;
  align-self: stretch;
  align-content: space-around;
  flex-direction: row;
  padding-top: 10px;
  padding-left: 10px;
`;

export const Form = styled.View`
  margin: 5px;
  height: 80%;
  flex-direction: row;
  align-self: stretch;
`;

export const TitleText = styled.Text`
  color: #333;
  padding-top: 10px;
  padding-left: 10px;
  font-size: 15px;
  font-weight: bold;
`;

export const Image = styled.Image`
  flex: 1;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  flex-direction: column;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Info = styled.View`
  margin-left: 15px;
  padding-bottom: 10px;
`;
