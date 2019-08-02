import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: center;
  margin-top: 50px;
`;

export const Title = styled.Text`
  margin-top: 50px;
  padding-bottom: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const OrderDate = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const SignLink = styled.TouchableOpacity`
  margin-bottom: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const PartnerList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 10,
  },
  showsVerticalScrollIndicator: false,
})``;

export const PartnerContent = styled.View`
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5);

  display: flex;
  flex-direction: row;
`;

export const PartnerName = styled.Text``;

export const ProductList = styled.View``;

export const CancelButton = styled.View``;
