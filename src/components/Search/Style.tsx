import styled from 'styled-components/native';
import {Colors} from '../../utilities/Colors';

export const ContainerSearch = styled.View`
  width: 100%;
  margin-top: 5px;
  height: 100%;
  padding: 10px;
  flex: 1;
`;

export const ContainerEmpty = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 20px;
`;

export const ContainerCryptos = styled.View`
  width: 100%;
`;

export const ContainerCoin = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerEachCrypto = styled.View`
  width: 100%;
  background-color: ${Colors.white};
  border-radius: 35px;
  margin-bottom: 10px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 10px;
  flex: 1;
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
  left: 0;
  width: 150px;
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

export const RanksContainer = styled.View`
  flex-direction: row;
  left: 10px;
`;

export const TitleRank = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${Colors.black};
`;

export const TextRank = styled.Text`
  font-size: 15px;
  color: ${Colors.black};
  justify-content: center;
  align-items: center;
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
  justify-content: center;
  align-items: center;
`;

export const Right = styled.View`
  right: 0;
`;

export const SeparatorList = styled.View`
  height: 1px;
  width: 100%;
  height: 2px;
  background-color: ${Colors.whiteGray};
`;

export const LastComponent = styled.View`
  height: 100px;
  padding: 10px;
`;
