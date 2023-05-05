import React from 'react';
import {MyTabs} from './src/routes/index.routes';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;
