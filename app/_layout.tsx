import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import IntercomComponent from './intercom/index';
import { initializeIntercom, resetIntercom } from './services/intercom';

const Layout = () => {
  useEffect(() => {
    initializeIntercom();

    return () => {
      resetIntercom();
    };
  }, []);

  return (
    <View>
      <Text>Welcome to the App!</Text>
      <IntercomComponent />
    </View>
  );
};

export default Layout;
