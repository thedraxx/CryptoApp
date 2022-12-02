import React, {useContext} from 'react';
import {TouchableOpacity, Alert} from 'react-native';
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
import {CryptoListContext} from '../../context/CryptoLIstContext';

interface Props {
  crypto: CryptoSearchInterface;
}

const Crypto = ({crypto}: Props) => {
  const {deleteCrypto} = useContext(CryptoListContext);

  const AlertMessage = (id: string) =>
    Alert.alert('Delete Crypto?', 'Press Ok if you want to do that', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => deleteCrypto(id)},
    ]);

  return (
    <TouchableOpacity style={{flex: 1}} onPress={() => AlertMessage(crypto.id)}>
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
