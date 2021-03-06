import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StatusBar, KeyboardAvoidingView} from 'react-native';
import {Header} from '../components/Header';
import {Container} from '../components/Container';
import {Logo} from '../components/Logo';
import {InputWithButton} from '../components/TextInput';
import {ClearButton} from '../components/Buttons';
import {LastConverted} from '../components/Text';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '77.34';
const TEMP_CONVERSION_RATE = 0.7734;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handlePressBaseCurrency = () => {
    console.log('press base');
    this.props.navigation.navigate('CurrencyList', {title: 'Base Currency'});
  };

  handlePressQuoteCurrency = () => {
    console.log('press quote');
    this.props.navigation.navigate('CurrencyList', {title: 'Quote Currency'});
  };

  handleTextChange = text => {
    console.log('change text', text);
  };

  handleSwapCurrency = () => {
    console.log('press swap currency');
  };

  handleOptionsPress = () => {
    console.log('handle options press');
    this.props.navigation.navigate('Options');
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
          />
          <InputWithButton
            buttonText={TEMP_QUOTE_CURRENCY}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            value={TEMP_QUOTE_PRICE}
          />
          <LastConverted
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            date={TEMP_CONVERSION_DATE}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton
            text="Reverse Currencies"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
