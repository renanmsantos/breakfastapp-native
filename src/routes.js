import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Products from './pages/Products';
import Orders from './pages/Orders';
import Groups from './pages/Groups';

export default createAppContainer(
  createSwitchNavigator(
    {
      Sign: createSwitchNavigator({
        SignIn,
        SignUp,
      }),
      App: createBottomTabNavigator(
        {
          Products,
          Orders,
          Groups,
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
      initialRouteName: 'Sign',
    }
  )
);
