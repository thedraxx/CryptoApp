import React, {useContext} from 'react';
import {useForm} from '../../components/hooks/useForm';
import {
  ContainerAddCrypto,
  ContainerInput,
  TextInputCrypto,
  Tittle,
} from './Style';
import {CryptoListContext} from '../../context/CryptoLIstContext';

const AddCrypto = () => {
  const {form, onChange} = useForm({
    search: '',
  });

  const {addCryptoListState} = useContext(CryptoListContext);

  return (
    <ContainerAddCrypto>
      <ContainerInput>
        <Tittle>Add Cryptocurrency</Tittle>
        <TextInputCrypto
          placeholder="Search"
          autofill="off"
          autoCapitalize="none"
          onChangeText={(value: string) => onChange(value, 'search')}
          value={form.search}
          onSubmitEditing={() => addCryptoListState(form.search)}
        />
      </ContainerInput>
    </ContainerAddCrypto>
  );
};

export default AddCrypto;
