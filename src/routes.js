import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import SignIn from './pages/SignIn';

import ChooseUser from './pages/Chooses/ChooseUser';
import ChoosePayment from './pages/Chooses/ChoosePayment';
import ChooseAddress from './pages/Chooses/ChooseAddress';

import Profile from './pages/Profile';
import Search from './pages/Search';
import Orders from './pages/Orders';
import Groups from './pages/Groups';

import Cart from './pages/Payment/Cart';
import GroupPayment from './pages/Payment/GroupPayment';
import IndividualPayment from './pages/Payment/IndividualPayment';

import FormCustomer from './pages/Forms/FormCustomer';
import FormPartner from './pages/Forms/FormPartner';
import FormGroup from './pages/Forms/FormGroup';
import FormAddress from './pages/Forms/FormAddress';

export default createAppContainer(
  createSwitchNavigator(
    {
      Payment: createStackNavigator(
        {
          Cart: { screen: Cart },
          ChoosePayment: { screen: ChoosePayment },
          GroupPayment: { screen: GroupPayment },
          IndividualPayment: { screen: IndividualPayment },
        },
        {
          defaultNavigationOptions: {
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
            headerTransparent: true,
            headerTintColor: '#fff',
          },
        }
      ),
      FormGroup: { screen: FormGroup },
      FormAddress: { screen: FormAddress },
      ChooseAddress: { screen: ChooseAddress },
      Sign: createSwitchNavigator({
        SignIn: { screen: SignIn },
        ChooseUser: { screen: ChooseUser },
        FormCustomer: { screen: FormCustomer },
        FormPartner: { screen: FormPartner },
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
