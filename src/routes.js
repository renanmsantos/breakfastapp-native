import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import SignIn from './pages/SignIn';

import ChooseAddress from './pages/ChooseAddress';

import Rate from './pages/Rate';

import Profile from './pages/Profile';
import Search from './pages/Search';
import Orders from './pages/Orders';

import Cart from './pages/Payment/Cart';
import Payment from './pages/Payment/Payment';

import FormCustomer from './pages/FormCustomer';
import FormAddress from './pages/FormAddress';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Payment: createStackNavigator(
          {
            Cart: { screen: Cart },
            Payment: { screen: Payment },
          },
          {
            defaultNavigationOptions: {
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
                alignSelf: 'center',
                textAlign: 'center',
              },
              headerTransparent: true,
              headerTintColor: '#fff',
              headerLeftContainerStyle: {
                paddingLeft: 30,
              },
            },
          }
        ),
        FormAddress: { screen: FormAddress },
        ChooseAddress: { screen: ChooseAddress },
        Rate: { screen: Rate },
        Sign: createSwitchNavigator({
          SignIn: { screen: SignIn },
          FormCustomer: { screen: FormCustomer },
        }),
        App: createBottomTabNavigator(
          {
            Search: { screen: Search },
            Orders: { screen: Orders },
            Profile: { screen: Profile },
          },
          {
            tabBarOptions: {
              activeTintColor: '#FEC810',
              inactiveTintColor: 'rgba(255,255,255,0.4)',
              keyboardHidesTabBar: true,
              style: {
                backgroundColor: '#f73d25',
                paddingBottom: 10,
                paddingTop: 10,
                height: 55,
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
