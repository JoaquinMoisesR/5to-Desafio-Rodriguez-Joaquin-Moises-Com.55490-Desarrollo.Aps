import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import styles from './Cart.style'
import cart from '../../data/dataCart'
import CartItem from './components/Cartitem'

const Cart = () => {
const renderItem = () =>   <CartItem/> 

  return (
    <View style={styles.container}>
      <View>
        <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        />
      </View>
      <View>
        <Pressable>
          <Text>Confirmar</Text>
          <View>
            <Text>{`Total US$100`}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

export default Cart