import {CryptoSearchInterface} from '../interfaces/CryptoSearchInterface';
import {CryptoListState} from './CryptoLIstContext';

type CryptoListAction = {
  type: 'addCrypto';
  payload: CryptoSearchInterface;
};

export const CryptoListReducer = (
  state: CryptoListState,
  action: CryptoListAction,
): CryptoListState => {
  switch (action.type) {
    case 'addCrypto':
      return {
        ...state,
        crypto: [...state.crypto, action.payload],
      };
  }

  return state;
};
