/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line react-hooks/exhaustive-deps
import React, {useContext, useEffect, useState} from 'react';
import {FlatList, RefreshControl, Text} from 'react-native';
import Crypto from '../Crypto/Crypto';
import {
  ContainerListCryptos,
  NothingToSee,
  SeparatorList,
  TextTitle,
} from './Style';
import {CryptoListContext} from '../../context/CryptoLIstContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListOfCrypto = () => {
  const {cryptoListState, updateCryptos, ReadStorage} =
    useContext(CryptoListContext);
  const [refreshing, setRefreshing] = useState(false);

  const FlatListItemSeparator = () => {
    return <SeparatorList />;
  };

  const onRefresh = () => {
    setRefreshing(true);
    updateCryptos();
    setRefreshing(false);
  };

  useEffect(() => {
    StartReadStorage();
  }, []);

  const StartReadStorage = async () => {
    try {
      const CryptoStorage = await AsyncStorage.getItem('cryptoList');
      if (CryptoStorage) {
        ReadStorage();
      }
    } catch (e) {
      console.log(e);
    }
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
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            ItemSeparatorComponent={() => FlatListItemSeparator()}
          />
        )}
      </ContainerListCryptos>
    </>
  );
};

export default ListOfCrypto;
