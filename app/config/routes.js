import {createStackNavigator} from 'react-navigation';
import {StatusBar} from 'react-native';
import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Home',
        header:() => null,
      },
    },
    Options: {
      screen: Options,
      navigationOptions: {
        headerTitle: 'Options',
      },
    },
    Themes: {
      screen: Themes,
      navigationOptions: {
        headerTitle: 'Themes',
      },
    },
  },
  {
    headerMode: 'screen',
  },
);

const CurrencyListStack = createStackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({navigation}) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
});

export default createStackNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      //For some reason, it adds another header after creating HomeStack.
      header: () => null,
    },
  },
  CurrencyList: {
    screen: CurrencyListStack,
    // navigationOptions: {
    //   header: () => null,
    // },
  },
  mode: 'modal',
  headerMode: 'none',
  //cardStyle: {paddingTop: StatusBar.currentHeight},
});
