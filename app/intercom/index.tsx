import React from 'react';
import { Button } from 'react-native';
import { showIntercom, displayMessageComposer } from '../services/intercom';

const IntercomComponent = () => {
  return (
    <>
      <Button title="Open Intercom Messenger" onPress={showIntercom} />
      <Button title="Open Message Composer" onPress={() => displayMessageComposer('Hello!')} />
    </>
  );
};

export default IntercomComponent;
