import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../features/home/screens/Home';
import Profile from '../../features/profile/screens/Profile';

const Tab = createBottomTabNavigator();

function BottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Profile} />
    </Tab.Navigator>
  );
}

export default BottomNav;
