import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
        colors={['#bce0ff', '#0088ff']}
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
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
