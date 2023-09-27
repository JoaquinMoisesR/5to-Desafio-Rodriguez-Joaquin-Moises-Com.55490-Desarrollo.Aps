import { View, Text, Image, StatusBar, ScrollView, Button } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import styles from './Details.style'
import { useDispatch, useSelector } from 'react-redux'
import Counter from '../../components/Counter'

const Details = ({route}) => {
  const counter = useSelector(state=> state.counter.value)
  const {product} = route.params
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Header title={'Detalles'} /> 
      <ScrollView><Image style={styles.image} source={{ uri: product.images[0] }}/>
      <View>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{`US$ ${product.price}`}</Text>
      <Text style={styles.text}>Ya agregaste: {counter} libros</Text>
      <Counter/>
      </View></ScrollView>
    
    </View>
  )
}

export default Details