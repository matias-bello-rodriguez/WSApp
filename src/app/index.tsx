import React from 'react';
import AppProvider from './AppProvider';
import AppNavigator from '../navigation/AppNavigator';
import 'react-native-reanimated';

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
};

export default App;