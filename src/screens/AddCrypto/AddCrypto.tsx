import React, {useContext} from 'react';
import {Alert} from 'react-native';
import {useForm} from '../../components/hooks/useForm';
import {
  ContainerAddCrypto,
  ContainerAlert,
  ContainerInput,
  TextInputCrypto,
  Tittle,
} from './Style';
import {CryptoListContext} from '../../context/CryptoLIstContext';

const AddCrypto = () => {
  const {form, onChange} = useForm({
    search: '',
  });

  const {addCryptoListState, isFetching, changeAlert} =
    useContext(CryptoListContext);

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
            addCryptoListState(form.search.toLowerCase().trim())
          }
        />
      </ContainerInput>
    </ContainerAddCrypto>
  );
};

export default AddCrypto;
