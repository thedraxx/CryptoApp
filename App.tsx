import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigator/TabNavigator';
import {CryptoListProvider} from './src/context/CryptoLIstContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <TabNavigator />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <CryptoListProvider>{children}</CryptoListProvider>;
};

export default App;
