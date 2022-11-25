import React from 'react';
import {Text} from 'react-native';
import {CryptoSearchInterface} from '../../interfaces/CryptoSearchInterface';
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
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  crypto: CryptoSearchInterface;
}

const Crypto = ({crypto}: Props) => {
  console.log(crypto);
  return (
    <ContainerEachCrypto>
      <Left>
        <ImageCoin source={{uri: crypto.image.small}} />
        <NameAndSymbol>
          <TextNameCrypto>{crypto.id}</TextNameCrypto>
          <TextSymbolCrypto>{crypto.symbol}</TextSymbolCrypto>
        </NameAndSymbol>
      </Left>

      {crypto.market_data.ath_change_percentage.usd < 0 ? (
        <Center>
          <Icon name="line-chart" size={20} color="#ff0000" />
        </Center>
      ) : (
        <Center>
          <Icon name="line-chart" size={20} color="#43ff43" />
        </Center>
      )}

      <Right>
        <NameAndSymbol>
          <Text>{crypto.market_data.current_price.usd} USD</Text>
          <Text>{crypto.market_data.ath_change_percentage.usd}</Text>
        </NameAndSymbol>
      </Right>
    </ContainerEachCrypto>
  );
};

export default Crypto;
