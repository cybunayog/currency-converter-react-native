import React from 'react';
import {View, Text, TouchableHighlight, TextInput} from 'react-native';
import color from 'color';

import styles from './styles';
import PropTypes from 'prop-types';

const InputWithButton = props => {
  const {onPress, buttonText, editable = true} = props;

  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackroundColorModifier,
  );

  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.contanerDisabled);
  }
  return (
    <View style={containerStyles}>
      <TouchableHighlight underlayColor={underlayColor} style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View styles={styles.border} />
      <TextInput
        style={styles.input}
        underLineColorAndriod="transparent"
        {...props}
      />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
};

export default InputWithButton;
