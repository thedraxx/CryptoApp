import React, {createContext, useReducer, useState} from 'react';
import CryptoApi from '../api/CryptoApi';
import {CryptoSearchInterface} from '../interfaces/CryptoSearchInterface';
import {CryptoListReducer} from './CryptoListReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Definir como luce y que expone el context

export interface CryptoListState {
  crypto: CryptoSearchInterface[];
}

// Estado Inicial
export const CryptoListInitialState: CryptoListState = {
  crypto: [],
};

// Lo usamos para decirle a React como luce y que expone el context
export interface CryptoListContextProps {
  cryptoListState: CryptoListState;
  addCryptoListState: (userSearch: string) => void;
  isFetching: boolean;
  changeAlert: () => void;
  updateCryptos: () => void;
  ReadStorage: () => void;
}

// Crear el contexto
export const CryptoListContext = createContext({} as CryptoListContextProps);

// Componente proveedor del estado
export const CryptoListProvider = ({children}: any) => {
  const [cryptoListState, dispatch] = useReducer(
    CryptoListReducer,
    CryptoListInitialState,
  );
  const [isFetching, setIsFetching] = useState(false);

  const changeAlert = () => {
    setIsFetching(false);
  };

  const addCryptoListState = async (userSearch: string) => {
    try {
      const crypto = await CryptoApi.get<CryptoSearchInterface>(
        `/coins/${userSearch}`,
      );
      dispatch({type: 'addCrypto', payload: crypto.data});
      setIsFetching(true);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCryptos = () => {
    try {
      cryptoListState.crypto.map(async cry => {
        const cryptoUpdated = await CryptoApi.get<CryptoSearchInterface>(
          `/coins/${cry.name.toLowerCase()}`,
        );
        dispatch({type: 'updateCrypto', payload: cryptoUpdated.data});
      });
    } catch (error) {
      console.log(error);
    }
  };

  const ReadStorage = async () => {
    const CryptoStorage = await AsyncStorage.getItem('cryptoList');
    try {
      if (CryptoStorage) {
        const JsonValue = JSON.parse(CryptoStorage);
        dispatch({type: 'updateCryptoStorage', payload: JsonValue});
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CryptoListContext.Provider
      value={{
        cryptoListState,
        addCryptoListState,
        isFetching,
        changeAlert,
        updateCryptos,
        ReadStorage,
      }}>
      {children}
    </CryptoListContext.Provider>
  );
};
