import styled from 'styled-components/native';
import {Colors} from '../../utilities/Colors';

export const ContainerInfo = styled.View`
  width: 100%;
  height: 150px;
`;

export const ContainerSalute = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 45px;
  margin-top: 50px;
`;

export const TextHelloName = styled.Text`
  font-size: 15px;
  color: ${Colors.white};
`;

export const TextHello = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${Colors.white};
`;

export const ContainerInfoUser = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const ImageUser = styled.Image`
  width: 60px;
  height: 60px;
  right: 50px;
  border-radius: 50px;
`;
