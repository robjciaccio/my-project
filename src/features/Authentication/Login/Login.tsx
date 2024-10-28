import React, {useRef, useEffect} from 'react';
import {Image, TextInput, View, Animated} from 'react-native';
import Button from '../../../components/Button';
import styles from './styles';
import {Props} from './types';

const Login = ({setAuthenticated}: Props) => {
  const logoPosition = useRef(new Animated.Value(0)).current; // For logo Y-position
  const usernameOpacity = useRef(new Animated.Value(0)).current; // For username fade-in

  useEffect(() => {
    Animated.sequence([
      Animated.timing(logoPosition, {
        toValue: -280, //move to top
        duration: 1100,
        useNativeDriver: true,
      }),
      Animated.timing(usernameOpacity, {
        toValue: 1, // Make the TextInput visible
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {transform: [{translateY: logoPosition}]},
        ]}>
        <Image
          source={require('../../../assets/logo/logo.png')}
          style={styles.logo}
        />
      </Animated.View>
      <Animated.View
        style={[styles.inputContainer, {opacity: usernameOpacity}]}>
        <TextInput
          placeholder="Username"
          style={styles.input}
          placeholderTextColor="#ccc"
        />
        <Button
          buttonTitle="Log In"
          isLoading={false}
          accessibilityLabel="Log In Button"
          testId="log-in-button"
          onPress={() => setAuthenticated(true)}
        />
      </Animated.View>
    </View>
  );
};

export default Login;
