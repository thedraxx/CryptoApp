/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {
  ContainerEmpty,
  ContainerSearch,
  ContainerEachCrypto,
  ImageCoin,
  Left,
  NameAndSymbol,
  Right,
  TextNameCrypto,
  TextSymbolCrypto,
  RanksContainer,
  TitleRank,
  TextRank,
} from './Style';
import {CryptoUserSearch} from '../../interfaces/CryptoUserSearch';
import CryptoApi from '../../api/CryptoApi';
import {SeparatorList} from './Style';
import {CryptoListContext} from '../../context/CryptoLIstContext';

interface Props {
  search: string;
}

const Search = ({search}: Props) => {
  const [userCryptoSearch, setUserCryptoSearch] = useState<CryptoUserSearch>();
  const {addCryptoListState} = useContext(CryptoListContext);

  useEffect(() => {
    getCryptoSearch();
  }, [search]);

  const getCryptoSearch = async () => {
    if (search.length > 0) {
      const CryptoSearch = await CryptoApi.get<CryptoUserSearch>(
        `/search?query=${search}`,
      );
      setUserCryptoSearch(CryptoSearch.data);
    }
  };

  const FlatListItemSeparator = () => {
    return <SeparatorList />;
  };

  return (
    <ContainerSearch>
      {!userCryptoSearch || search.length === 0 ? (
        <ContainerEmpty />
      ) : (
        <FlatList
          data={userCryptoSearch.coins}
          keyExtractor={crypto => crypto.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => FlatListItemSeparator()}
          renderItem={crypto => (
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => addCryptoListState(crypto.item.id.toLowerCase())}>
              <>
                <ContainerEachCrypto>
                  <Left>
                    <ImageCoin source={{uri: crypto.item.thumb}} />
                    <NameAndSymbol>
                      <TextNameCrypto>{crypto.item.name}</TextNameCrypto>
                      <TextSymbolCrypto>{crypto.item.symbol}</TextSymbolCrypto>
                    </NameAndSymbol>
                  </Left>

                  <Right>
                    <RanksContainer>
                      <TitleRank>Rank: </TitleRank>
                      <TextRank>{crypto.item.market_cap_rank}</TextRank>
                    </RanksContainer>
                  </Right>
                </ContainerEachCrypto>
              </>
            </TouchableOpacity>
          )}
        />
      )}
    </ContainerSearch>
  );
};

export default Search;
