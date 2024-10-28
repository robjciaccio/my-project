import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import BootSplash from 'react-native-bootsplash';
import {SafeAreaView, StyleSheet} from 'react-native';
import BottomTabNav from './src/navigation/BottomTabNav/BottomTabNav';
import Login from './src/features/Authentication/Login/Login';
import colors from './src/config/colors';

function App(): React.JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const initApp = async () => {
      await new Promise(resolve => setTimeout(resolve, 300));
      await BootSplash.hide();
    };
    initApp();
  }, []);

  return !isAuthenticated ? (
    <SafeAreaView style={styles.loginContainer}>
      <Login setAuthenticated={setIsAuthenticated} />
    </SafeAreaView>
  ) : (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <BottomTabNav />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginContainer: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
});

export default App;
