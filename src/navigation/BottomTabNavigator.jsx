import {colors} from '../constants/colors'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from './CartNavigator'
import StackNavigator from './StackNavigator'
import { StyleSheet } from "react-native";
import Feather from '@expo/vector-icons/Feather'
import OrdersNavigator from './OrdersNavigator';
import { FontAwesome5 } from '@expo/vector-icons';

const BotomTab = createBottomTabNavigator()

function BottomTabNavigator() { 
    return ( 
    <BotomTab.Navigator initialRouteName="Shop" 
    screenOptions={{
      headerShown: false, 
      tabBarShowLabel: false, 
      tabBarStyle: styles.tabBar
      }}>

      <BotomTab.Screen 
      name="Shop" 
      component={StackNavigator} 
      options={{
        tabBarIcon:({focused}) => (
          <Feather 
          name= "shopping-bag" 
          size={24} 
          color={focused ? colors.senary : colors.quaternary }
          />
        ),
      }}/>

      <BotomTab.Screen 
      name='CartNav' 
      component={CartNavigator}
       options={{
        tabBarIcon:({focused}) => (
          <Feather 
          name= "shopping-cart" 
          size={24} 
          color={focused ? colors.senary : colors.quaternary }
          />
        ),
      }} />
      <BotomTab.Screen 
      name='OrdersNav' 
      component={OrdersNavigator}
       options={{
        tabBarIcon:({focused}) => (
          <FontAwesome5 
          name= "clipboard-list" 
          size={24} 
          color={focused ? colors.senary : colors.quaternary }
          />
        ),
      }} />
    </BotomTab.Navigator>
    )
}

export default BottomTabNavigator




const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.quinary,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  }
})