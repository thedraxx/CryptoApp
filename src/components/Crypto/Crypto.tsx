import React from 'react';
import {TouchableOpacity} from 'react-native';
import {CryptoSearchInterface} from '../../interfaces/CryptoSearchInterface';
import {
  Center,
  ContainerEachCrypto,
  ImageCoin,
  Left,
  NameAndSymbol,
  PriceAndPercentage,
  Right,
  TextNameCrypto,
  TextPercentage,
  TextPrice,
  TextSymbolCrypto,
} from './Style';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  crypto: CryptoSearchInterface;
}

const Crypto = ({crypto}: Props) => {
  return (
    <TouchableOpacity style={{flex: 1}}>
      <ContainerEachCrypto>
        <Left>
          <ImageCoin source={{uri: crypto.image.small}} />
          <NameAndSymbol>
            <TextNameCrypto>{crypto.name}</TextNameCrypto>
            <TextSymbolCrypto>{crypto.symbol}</TextSymbolCrypto>
          </NameAndSymbol>
        </Left>

        <Center>
          {crypto.market_data.ath_change_percentage.usd < 0 ? (
            <Icon name="line-chart" size={20} color="#ff0000" />
          ) : (
            <Icon name="line-chart" size={20} color="#43ff43" />
          )}
        </Center>
        <Right>
          <PriceAndPercentage>
            <TextPrice>{crypto.market_data.current_price.usd} USD</TextPrice>
            <TextPercentage>
              {crypto.market_data.ath_change_percentage.usd}
            </TextPercentage>
          </PriceAndPercentage>
        </Right>
      </ContainerEachCrypto>
    </TouchableOpacity>
  );
};

export default Crypto;
