import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Register from "../screens/Register";

const { Navigator,Screen } = createStackNavigator()

const PublicRoutes = ()=>(
    <Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
        <Screen name="Login" component={Login}/>
        <Screen name="Register" component={Register}/>
    </Navigator>
)

export default PublicRoutes