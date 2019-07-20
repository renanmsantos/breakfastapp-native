import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Image, Info, Name, Partner, Price } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ListProducts({ navigation }) {
  return (
    <Container>
      <Left>
        <Image
          source={{ uri: 'https://api.adorable.io/avatars/50/'+ Math.random() +'.png' }}
        />
        <Info>
          <Name>Produto 1</Name>
          <Partner>Salgado da tia Ana</Partner>
          <Price>R$ 23,50</Price>
        </Info>
      </Left>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Icon name="add-shopping-cart" size={30} color="#000" />
      </TouchableOpacity>
    </Container>
  );
}
