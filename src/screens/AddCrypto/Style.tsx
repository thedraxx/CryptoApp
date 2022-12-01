import styled from 'styled-components/native';
import {Colors} from '../../utilities/Colors';

export const ContainerAddCrypto = styled.View`
  flex: 1;
  background-color: ${Colors.white};
  width: 100%;
  height: 100%;
`;

export const ContainerInput = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex: 1;
`;

export const TextInputCrypto = styled.TextInput`
  width: 90%;
  height: 50px;
  border-radius: 25px;
  background-color: ${Colors.whiteGray};
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
`;

export const Tittle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${Colors.darkGray};
  margin-bottom: 20px;
`;

export const ContainerAlert = styled.View`
  position: absolute;
  width: 100px;
  height: 100px;
  z-index: 999;
`;
