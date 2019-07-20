import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 2px;
  padding: 10px;
  border-radius: 5px;
  background: rgba(255,255,255,0.3);

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

export const EmailInvitedText = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const StatusText = styled.Text`
  margin-left: 10px;
  font-size: 12px;
  text-align: right;
  color: #00bc58;
`;
