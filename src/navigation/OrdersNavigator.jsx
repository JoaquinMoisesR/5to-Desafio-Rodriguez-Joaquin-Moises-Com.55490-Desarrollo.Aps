
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Orders} from '../screens'




const Stack = createNativeStackNavigator()

function OrdersNavigator () {
    return ( 
            <Stack.Navigator initialRouteName="Orders" screenOptions={({}) => ({
              headerShown: true,
            })}>
                <Stack.Screen name='Ordenes de Compra' component={Orders} />
            </Stack.Navigator>
    )
}


export default OrdersNavigator