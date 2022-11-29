import React, {useContext, useState} from 'react';
import {FlatList, RefreshControl, Text} from 'react-native';
import Crypto from '../Crypto/Crypto';
import {
  ContainerListCryptos,
  NothingToSee,
  SeparatorList,
  TextTitle,
} from './Style';
import {CryptoListContext} from '../../context/CryptoLIstContext';

const ListOfCrypto = () => {
  const {cryptoListState, updateCryptos} = useContext(CryptoListContext);
  const [refreshing, setRefreshing] = useState(false);

  const FlatListItemSeparator = () => {
    return <SeparatorList />;
  };

  const onRefresh = () => {
    setRefreshing(true);
    updateCryptos();
    setRefreshing(false);
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
