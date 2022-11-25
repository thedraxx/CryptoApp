import React, {useContext, useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import Crypto from '../Crypto/Crypto';
import {
  ContainerListCryptos,
  NothingToSee,
  SeparatorList,
  TextTitle,
} from './Style';
import {CryptoListContext} from '../../context/CryptoLIstContext';

const ListOfCrypto = () => {
  const {cryptoListState} = useContext(CryptoListContext);

  useEffect(() => {
    // console.log(cryptoListState.crypto);
  }, [cryptoListState]);

  const array = [
    {
      name: 'Bitcoin',
      price: 10000,
      symbol: 'BTC',
      percent_change_1h: 1,
    },
    {
      name: 'Ethereum',
      price: 10000,
      symbol: 'ETH',
      percent_change_1h: 1,
    },
    {
      name: 'Ripple',
      price: 10000,
      symbol: 'XRP',
    },
    {
      name: 'Bitcoin Cash',
      price: 10000,
      symbol: 'BCH',
    },
    {
      name: 'Litecoin',
      price: 10000,
      symbol: 'LTC',
    },
    {
      name: 'EOS',
      price: 10000,
      symbol: 'EOS',
    },
    {
      name: 'Binance Coin',
      price: 10000,
      symbol: 'BNB',
    },
    {
      name: 'Stellar',
      price: 10000,
      symbol: 'XLM',
    },
  ];

  const FlatListItemSeparator = () => {
    return <SeparatorList />;
  };

  return (
    <>
      <ContainerListCryptos>
        <TextTitle>Wallets</TextTitle>
        {!cryptoListState || cryptoListState.crypto.length === 0 ? (
          <NothingToSee>
            <Text>Nothing to see here! Please Add a CryptoCurrency</Text>
          </NothingToSee>
        ) : (
          <FlatList
            data={cryptoListState.crypto}
            renderItem={({item}) => <Crypto crypto={item} />}
            keyExtractor={item => item.name}
            ItemSeparatorComponent={() => FlatListItemSeparator()}
          />
        )}
      </ContainerListCryptos>
    </>
  );
};

export default ListOfCrypto;
