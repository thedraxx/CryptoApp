import React from 'react';
import ListOfCrypto from '../../components/ListCryptos/ListOfCrypto';

import User from '../../components/User/User';
import {ContainerHome} from './Style';

const Home = () => {
  return (
    <ContainerHome>
      <User />
      <ListOfCrypto />
    </ContainerHome>
  );
};

export default Home;
