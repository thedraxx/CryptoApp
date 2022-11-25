import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../utilities/Colors';
import {ContainerInfoUser, ImageUser} from './Style';
import {
  ContainerInfo,
  ContainerSalute,
  TextHello,
  TextHelloName,
} from './Style';

const User = () => {
  return (
    <ContainerInfo>
      <LinearGradient
        useAngle={true}
        angle={250}
        angleCenter={{x: 0.5, y: 0.5}}
        colors={[Colors.primary, Colors.secondary]}
        style={styles.linearGradient}>
        <ContainerSalute>
          <ContainerInfoUser>
            <TextHelloName>Hello Martha</TextHelloName>
            <TextHello>Welcome Back</TextHello>
          </ContainerInfoUser>
          <ImageUser source={require('../../assets/images/stockImage.jpg')} />
        </ContainerSalute>
      </LinearGradient>
    </ContainerInfo>
  );
};

export default User;

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});
