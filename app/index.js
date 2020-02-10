import React from 'react';
import EStylesheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';
import Options from './screens/Options';

EStylesheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $darkText: '#343434',
});

export default () => <Options />;
