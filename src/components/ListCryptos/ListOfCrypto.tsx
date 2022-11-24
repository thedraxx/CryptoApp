import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Crypto from '../Crypto/Crypto';
import {ContainerListCryptos, SeparatorList, TextTitle} from './Style';

const ListOfCrypto = () => {
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
        <FlatList
          data={array}
          renderItem={({item}) => <Crypto />}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={() => FlatListItemSeparator()}
        />
      </ContainerListCryptos>
    </>
  );
};

export default ListOfCrypto;
