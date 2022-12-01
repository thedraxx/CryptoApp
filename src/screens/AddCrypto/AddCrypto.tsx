import React, {useContext, useState} from 'react';
import {Alert} from 'react-native';
import {useForm} from '../../components/hooks/useForm';
import {
  ContainerAddCrypto,
  ContainerAlert,
  ContainerInput,
  ContainerResults,
  TextInputCrypto,
  Tittle,
} from './Style';
import {CryptoListContext} from '../../context/CryptoLIstContext';
import Search from '../../components/Search/Search';

const AddCrypto = () => {
  const {form, onChange} = useForm({
    search: '',
  });
  const {addCryptoListState, isFetching, changeAlert} =
    useContext(CryptoListContext);
  function handleSearch() {
    throw new Error('Function not implemented.');
  }

  return (
    <ContainerAddCrypto>
      <ContainerInput>
        {isFetching && (
          <ContainerAlert>
            {Alert.alert('Great', 'CryptoCurrency Added', [
              {text: 'OK', onPress: () => changeAlert()},
            ])}
          </ContainerAlert>
        )}
        <Tittle>Add Cryptocurrency</Tittle>
        <TextInputCrypto
          placeholder="Search"
          autofill="off"
          autoCapitalize="none"
          onChangeText={(value: string) => onChange(value, 'search')}
          value={form.search}
          onSubmitEditing={() =>
            // addCryptoListState(form.search.toLowerCase().trim())
            handleSearch()
          }
        />
        <Search search={form.search.toLowerCase().trim()} />
      </ContainerInput>
    </ContainerAddCrypto>
  );
};

export default AddCrypto;
