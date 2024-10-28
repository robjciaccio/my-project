import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: colors.lightGreen,
  },
  small: {
    paddingHorizontal: 16,
    height: 40,
  },
  large: {
    paddingHorizontal: 16,
    height: 40,
  },
});

export default styles;
