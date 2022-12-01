import {CryptoSearchInterface} from '../interfaces/CryptoSearchInterface';
import {CryptoListState} from './CryptoLIstContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

type CryptoListAction =
  | {
      type: 'addCrypto';
      payload: CryptoSearchInterface;
    }
  | {
      type: 'updateCrypto';
      payload: CryptoSearchInterface;
    };

export const CryptoListReducer = (
  state: CryptoListState,
  action: CryptoListAction,
): CryptoListState => {
  switch (action.type) {
    case 'addCrypto':
      AsyncStorage.setItem(
        'cryptoList',
        JSON.stringify([...state.crypto, action.payload]),
      );
      return {
        ...state,
        crypto: [...state.crypto, action.payload],
      };

    case 'updateCrypto':
      return {
        ...state,
        crypto: state.crypto.map(cry => {
          if (cry.id === action.payload.id) {
            return action.payload;
          } else {
            return cry;
          }
        }),
      };
  }

  return state;
};
