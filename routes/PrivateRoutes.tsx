import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'

export type StackList = {
    Home:undefined
}

const { Navigator,Screen } = createStackNavigator<StackList>()


const PrivateRoutes = ()=>(
    <Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Screen name="Home" component={Home}/>
    </Navigator>
)

export default PrivateRoutes