import styled from 'styled-components/native';
import {Colors} from '../../utilities/Colors';

export const ContainerEachCrypto = styled.View`
  width: 100%;
  height: 80px;
  background-color: ${Colors.white};
  border-radius: 25px;
  margin-bottom: 10px;
  padding: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
`;

export const Left = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  left: 0;
`;

export const NameAndSymbol = styled.View`
  flex-direction: column;
  justify-content: space-between;
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
  width: 50px;
  height: 50px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;

export const Center = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Right = styled.View`
  right: 0;
`;
