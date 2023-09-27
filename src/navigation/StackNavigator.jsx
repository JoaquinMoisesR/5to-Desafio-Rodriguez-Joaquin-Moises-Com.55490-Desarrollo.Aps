
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Home, Products, Details} from '../screens'
import { View} from "react-native";
import { Header } from "../components";



const Stack = createNativeStackNavigator()

function StackNavigator () {
    return (
            <Stack.Navigator initialRouteName="Home" screenOptions={({route, navigation}) => ({
              headerShown:true,
            header: () => (
               <View style={{ flexDirection:'row', height:57}}>
                   <Header title={'Aspetto BookStore'}/>
               </View>
              )
            })}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Products' component={Products} />
                <Stack.Screen name='Details' component={Details} />
            </Stack.Navigator>
    )
}


export default StackNavigator