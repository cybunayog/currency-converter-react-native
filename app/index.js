import React from 'react';
import EStylesheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStylesheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
});

export default () => <Home />;
