import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {
  loginIdentifiedUser,
  loginUnidentifiedUser,
  logoutUser,
  showMessageComposer,
  setLauncherVisibility,
} from './services/intercom';

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Intercom Integration</Text>
      <Button
        title="Login Identified User"
        onPress={() => loginIdentifiedUser('123', 'user@example.com')}
      />
      <Button title="Login Unidentified User" onPress={loginUnidentifiedUser} />
      <Button title="Logout User" onPress={logoutUser} />
      <Button
        title="Show Message Composer"
        onPress={() => showMessageComposer('Hello!')}
      />
      <Button
        title="Show Launcher"
        onPress={() => setLauncherVisibility(true)}
      />
      <Button
        title="Hide Launcher"
        onPress={() => setLauncherVisibility(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Index;
