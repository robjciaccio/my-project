import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkBlue,
    marginTop: 80,
  },
  logoContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  logo: {width: 200, height: 200},
  inputContainer: {
    position: 'absolute',
    bottom: '45%',
  },
  input: {
    height: 40,
    width: 250,
    borderColor: colors.lightGreen,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 20,
    color: '#fff',
    borderRadius: 8,
  },
});

export default styles;
