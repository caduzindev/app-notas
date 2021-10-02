import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'

const { Navigator,Screen } = createStackNavigator()

const PrivateRoutes = ()=>(
    <Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Screen name="Home" component={Home}/>
    </Navigator>
)

export default PrivateRoutes