import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ButtonProps} from './types';
import styles from './styles';

const Button = ({
  buttonTitle,
  testId,
  accessibilityLabel,
  onPress = () => null,
  isLoading,
  longPressAction = () => null,
  size = 'large',
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, styles[size]]}
      onLongPress={() => longPressAction()}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}>
      <Text style={{fontWeight: '600', fontSize: 14}}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default Button;
