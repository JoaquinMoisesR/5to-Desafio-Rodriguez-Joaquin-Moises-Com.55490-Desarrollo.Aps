import { View, Text, Pressable } from 'react-native'
import styles from './Cartitem.style'
import Feather from '@expo/vector-icons/Feather'
import React from 'react'

const Cartitem = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>Nombre</Text>
      </View>
      <View style={styles.details}>
        <View>
            <Text>Cantidad</Text>
            <Text>Precio</Text>
        </View>
        <Pressable>
            <Feather name="trash" size={24} color={"black"}/>
        </Pressable>
      </View>
    </View>
  )
}

export default Cartitem