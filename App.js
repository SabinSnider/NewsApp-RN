import React from 'react';

import {View, StyleSheet} from 'react-native';

import {Provider as PaperProvider} from 'react-native-paper';
import MainNavigator from './navigations/RootNavigator';
import NewsProvider from './store/providers/NewsProvider';

const App = () => {
  return (
    <NewsProvider>
      <PaperProvider>
        <MainNavigator />
      </PaperProvider>
    </NewsProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
