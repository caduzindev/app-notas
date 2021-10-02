import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'

const RootRoutes = ()=>{
    const [isLogged,setIsLogged] = useState(false)
    return (
        <NavigationContainer>
            {!!isLogged ? <PrivateRoutes/> : <PublicRoutes/>}
        </NavigationContainer>
    )
}

export default RootRoutes