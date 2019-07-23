import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 2px;
  padding: 10px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);

  display: flex;
  flex-direction: row;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AddressText = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const LinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;