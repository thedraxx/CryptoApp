import styled from 'styled-components/native';
import {Colors} from '../../utilities/Colors';

export const ContainerListCryptos = styled.View`
  background-color: ${Colors.white};
  flex: 1;
`;

export const SeparatorList = styled.View`
  height: 1px;
  width: 100%;
  height: 2px;
  background-color: ${Colors.whiteGray};
`;

export const TextTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${Colors.black};
`;

export const NothingToSee = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.white};
`;
