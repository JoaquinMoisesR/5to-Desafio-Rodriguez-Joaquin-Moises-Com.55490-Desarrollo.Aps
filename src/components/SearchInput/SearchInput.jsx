import { View, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'
import styles from './SearchInput.style'
import { FontAwesome } from '@expo/vector-icons';

const SearchInput = ({onSearch}) => {
   
  const [value, setValue] = useState('')
  
  const search = () => {
    onSearch(value)
  }

  const clearInput = () =>{
    setValue('');
    onSearch('')
  }

  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input} 
      value={value} 
      onChangeText={setValue} 
      placeholder= "Busca aqui tu libro"
      />
      <Pressable onPress={search}>
        <FontAwesome name="search" size={24} color="black" />
      </Pressable>
      <Pressable onPress={clearInput}>
        <AntDesign name="closecircle" size={24} color="black" />
      </Pressable>
    </View>
  )
}

export default SearchInput