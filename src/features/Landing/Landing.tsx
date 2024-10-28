import React, {useCallback} from 'react';
import {Text, View, FlatList} from 'react-native';
import {styles} from './style';

const products = [
  {id: '1', name: 'Wireless Earbuds', price: 29.99, inStock: true},
  {id: '2', name: 'Bluetooth Speaker', price: 49.99, inStock: false},
  {id: '3', name: 'Smart Watch', price: 199.99, inStock: true},
  {id: '4', name: 'Portable Charger', price: 19.99, inStock: true},
  {id: '5', name: 'HD Webcam', price: 89.99, inStock: false},
];

const Landing = () => {
  const renderItem = useCallback(
    ({item}: any) => {
      return (
        <View>
          <Text>{item.name}</Text>
        </View>
      );
    },
    [products],
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem as any}
        style={{flex: 1}}
      />
      {/* <Text>{`Welcome to your New life :-)`}</Text> */}
    </View>
  );
};

export default Landing;
