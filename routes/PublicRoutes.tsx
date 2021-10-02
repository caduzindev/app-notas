import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Register from "../screens/Register";

export type StackList = {
    Login:undefined
    Register:undefined
}

const { Navigator,Screen } = createStackNavigator<StackList>()

const PublicRoutes = ()=>(
    <Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
        <Screen name="Login" component={Login}/>
        <Screen name="Register" component={Register}/>
    </Navigator>
)

export default PublicRoutes