import React from 'react';
import {Text} from 'react-native';
import {
  Center,
  ContainerEachCrypto,
  ImageCoin,
  Left,
  NameAndSymbol,
  Right,
  TextNameCrypto,
  TextSymbolCrypto,
} from './Style';

const Crypto = () => {
  return (
    <ContainerEachCrypto>
      <Left>
        <ImageCoin source={require('../../assets/images/bitcoin.png')} />
        <NameAndSymbol>
          <TextNameCrypto>Bitcoin</TextNameCrypto>
          <TextSymbolCrypto>BTC</TextSymbolCrypto>
        </NameAndSymbol>
      </Left>

      <Center>
        <ImageCoin source={require('../../assets/images/chart.jpg')} />
      </Center>

      <Right>
        <NameAndSymbol>
          <Text>$0.99</Text>
          <Text>0,01%</Text>
        </NameAndSymbol>
      </Right>
    </ContainerEachCrypto>
  );
};

export default Crypto;
