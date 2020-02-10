import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  Keyboard,
  Animated,
  Platform
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ANIMATION_DURATION = 250; //in milliseconds

class Logo extends Component {
  static propTypes = {
    tintColor: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      containerImageWidth: new Animated.Value(styles.$largeCointainerSize),
      imageWidth: new Animated.Value(styles.$largeImageSize),
    };
  }
  componentDidMount() {
    this.keyboardShowListener = Keyboard.addListener(
      'keyboardWillShow',
      this.keyboardShow,
    );
    this.keyboardHideListener = Keyboard.addListener(
      'keyboardWillHide',
      this.keyboardHide,
    );
  }

  componentWillUnmount() {
    //because componentWillMount is deprecated
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  render() {
    const containerImageStyle = [
      styles.containerImage,
      {
        width: this.state.containerImageWidth,
        height: this.state.containerImageWidth,
      },
    ];

    const imageStyle = [styles.logo, {width: this.imageWidth}];

    const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);
    const AnimatedLogo = Animated.createAnimatedComponent(Image);

    return (
      <View style={styles.container}>
        <AnimatedImage
          source={require('./images/background.png')}
          style={styles.containerImage}
          resizeMode="contain">
          <AnimatedLogo
            source={require('./images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </AnimatedImage>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
