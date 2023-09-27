import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../featuers/counter/counterSlice'
import {colors} from '../constants/colors'

 

const Counter = () => {
 const [inputToAdd, setInputToAdd] = useState(0)
 const counter = useSelector(state => state.counter.value)
 const dispatch = useDispatch()

  return (

    <View style={styles.container}>
      <View style={styles.counterContainer}>

        <Pressable
          style={styles.counterButtons} onPress={()=>dispatch(decrement())}
          >
          <Text style={styles.signs}>-</Text>
        </Pressable>

        <Text style={styles.signs}>{counter}</Text>

        <Pressable
          style={styles.counterButtons} onPress={()=>dispatch(increment())}
        >
          <Text style={styles.signs}>+</Text>
        </Pressable>

        </View>
      <View style={styles.inputContaienr}>
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          placeholder="Escribe el valor que deseas agregar"
          value={inputToAdd}
          onChangeText={value => setInputToAdd(Number(value))}
        />

        <Pressable style={styles.pressable} onPress={()=>dispatch(incrementByAmount(inputToAdd))}>
          <Text style={styles.text}>Agregar</Text>
        </Pressable>

      </View>
    </View>
  )
}

 

export default Counter

 

const styles = StyleSheet.create({

  container: {
    backgroundColor: colors.ocho,
    height:110,
    padding:-8,
    marginVertical:2
  },

  counterContainer: {
    flexDirection: 'row',
    backgroundColor: colors.quaternary,
    justifyContent: 'space-between',
    height: 48,
  },

  counterButtons: {
    backgroundColor: colors.siete,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  signs: {
    fontSize: 35,
    color:'black',
  },

  input: {
    backgroundColor: colors.quaternary,
    width: '80%',
    height: 30,
    color: 'black',
    padding: 2,
    marginEnd: 15,
    borderRadius: 10,
  },

  inputContaienr: {
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10,
    justifyContent:'center',
    
  },
  pressable: {
    backgroundColor: colors.siete,
    borderRadius: 5,
    height: 30,
    width: 51,
    justifyContent:'center',
    textAlign:'center',
  },
  text:{
    color: 'white',
  }
})