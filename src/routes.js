import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import SignIn from './pages/SignIn';
import Choose from './pages/Choose';
import FormCustomer from './pages/FormCustomer';
import FormPartner from './pages/FormPartner';
import FormGroup from './pages/FormGroup';
import FormAddress from './pages/FormAddress';

import Profile from './pages/Profile';
import Search from './pages/Search';
import Orders from './pages/Orders';
import Groups from './pages/Groups';

import Cart from './pages/Payment/Cart';
import ChoosePayment from './pages/Payment/ChoosePayment';
import GroupPayment from './pages/Payment/GroupPayment';
import IndividualPayment from './pages/Payment/IndividualPayment';

export default createAppContainer(
  createSwitchNavigator(
    {
      Payment: createStackNavigator(
        {
          Cart,
          ChoosePayment,
          GroupPayment,
          IndividualPayment,
        },
        {
          defaultNavigationOptions: {
            headerLayoutPreset: 'center',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
            headerTransparent: true,
            headerTintColor: '#fff',
            headerLeftContainerStyle: {
              marginLeft: 20,
            },
          },
        }
      ),
      FormGroup,
      FormAddress: { screen: FormAddress },
      Sign: createSwitchNavigator({
        SignIn,
        Choose,
        FormCustomer,
        FormPartner,
      }),
      App: createBottomTabNavigator(
        {
          Search: { screen: Search },
          Orders: { screen: Orders },
          Groups: { screen: Groups },
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
      initialRouteName: 'App',
    }
  )
);
