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
    }
  | {
      type: 'updateCryptoStorage';
      payload: any;
    }
  | {
      type: 'deleteCrypto';
      payload: string;
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
      if (state.crypto.map(cry => cry.name).includes(action.payload.name)) {
        return {...state};
      } else {
        return {
          ...state,
          crypto: [...state.crypto, action.payload],
        };
      }

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

    case 'updateCryptoStorage':
      return {
        ...state,
        crypto: action.payload,
      };

    case 'deleteCrypto':
      AsyncStorage.setItem(
        'cryptoList',
        JSON.stringify(state.crypto.filter(cry => cry.id !== action.payload)),
      );
      return {
        ...state,
        crypto: state.crypto.filter(cry => cry.id !== action.payload),
      };
  }

  return state;
};
