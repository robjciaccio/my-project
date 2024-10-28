import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Landing from '../../features/Landing/Landing';
import Profile from '../../features/Profile/Profile';
import screens from '../screens';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator backBehavior="history">
      <Tab.Screen name={screens.HOME} component={Landing} />
      <Tab.Screen name={screens.SEARCH} component={() => null} />
      <Tab.Screen name={screens.NETWORK} component={() => null} />
      <Tab.Screen name={screens.NOTIFICATIONS} component={() => null} />
      <Tab.Screen name={screens.SETTINGS} component={Profile} />
    </Tab.Navigator>
  );
};
export default BottomTabNav;
