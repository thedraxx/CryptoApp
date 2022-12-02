import styled from 'styled-components/native';
import {Colors} from '../../utilities/Colors';

export const ContainerEachCrypto = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Colors.white};
  border-radius: 50px;
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
  width: 33%;
`;

export const NameAndSymbol = styled.View`
  flex-direction: column;
  left: 0px;
`;

export const TextNameCrypto = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${Colors.black};
`;

export const TextSymbolCrypto = styled.Text`
  font-size: 12px;
  color: ${Colors.black};
`;

export const ImageCoin = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;

export const Center = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  left: 0px;
  width: 33%;
`;

export const Right = styled.View`
  left: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 33%;
`;

export const TextPrice = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${Colors.black};
  left: 0;
`;

export const TextPercentage = styled.Text`
  font-size: 12px;
  color: ${Colors.black};
  left: 0;
`;

export const PriceAndPercentage = styled.View`
  flex-direction: column;
  left: 0px;
`;
