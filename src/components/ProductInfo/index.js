import React from 'react';

import { formatPrice } from '~/util/format';

import { Container, TitleText, Title, Info, Image } from './styles';

export default function ProductInfo({ product }) {
  return (
    <Container>
      <Image
        source={{
          uri: product.urlImage,
        }}
      />
      <Info>
        <TitleText>Nome: {product.name}</TitleText>
        <TitleText>Produtor: {product.partner.name}</TitleText>
        <TitleText>Produtor: {product.partner.cnpj}</TitleText>
        <TitleText>Preço: {formatPrice(product.price)}</TitleText>
        <TitleText>Dias para produção: {product.daysProduce}</TitleText>
        <TitleText>Quantidade disponível: {product.quantity}</TitleText>
        <TitleText>Categoria: {product.category.name}</TitleText>
      </Info>
    </Container>
  );
}
