import React from 'react';
import AppProvider from './AppProvider';
import AppNavigator from '../navigation/AppNavigator';

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
};

export default App;