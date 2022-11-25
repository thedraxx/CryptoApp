import React, {createContext, useReducer} from 'react';
import CryptoApi from '../api/CryptoApi';
import {CryptoSearchInterface} from '../interfaces/CryptoSearchInterface';
import {CryptoListReducer} from './CryptoListReducer';

// Definir como luce y que expone el context

export interface CryptoListState {
  crypto: CryptoSearchInterface[];
  isFetch: boolean;
}

// Estado Inicial
export const CryptoListInitialState: CryptoListState = {
  crypto: [],
  isFetch: false,
};

// Lo usamos para decirle a React como luce y que expone el context
export interface CryptoListContextProps {
  cryptoListState: CryptoListState;
  addCryptoListState: (userSearch: string) => void;
}

// Crear el contexto
export const CryptoListContext = createContext({} as CryptoListContextProps);

// Componente proveedor del estado
export const CryptoListProvider = ({children}: any) => {
  const [cryptoListState, dispatch] = useReducer(
    CryptoListReducer,
    CryptoListInitialState,
  );

  const addCryptoListState = async (userSearch: string) => {
    try {
      const crypto = await CryptoApi.get<CryptoSearchInterface>(
        `/coins/${userSearch}`,
      );
      dispatch({type: 'addCrypto', payload: crypto.data});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CryptoListContext.Provider
      value={{
        cryptoListState,
        addCryptoListState,
      }}>
      {children}
    </CryptoListContext.Provider>
  );
};
