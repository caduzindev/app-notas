import React from 'react'
import { View,SafeAreaView } from 'react-native'
import { Input,Text,Button } from 'react-native-elements'
import MaterialComminutyIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import { StackList } from '../../routes/PublicRoutes'
import { StackNavigationProp } from '@react-navigation/stack'

type RegisterScreenProp = StackNavigationProp<StackList,'Register'>

const Login = ()=>{
    const navigation = useNavigation<RegisterScreenProp>()
    return (
        <SafeAreaView style={styles.container}>
            <Text h2>Login</Text>
            <View style={styles.boxLogin}>
                <Input 
                    placeholder="Email"
                    leftIcon={<MaterialComminutyIcons name="email" size={24}/>}
                />
                <Input 
                    placeholder="Senha" 
                    secureTextEntry={true}
                    leftIcon={<MaterialComminutyIcons name="lock" size={24}/>}
                />
            </View>
            <Button 
                title="Entrar" 
                buttonStyle={styles.buttonStyle} 
                containerStyle={styles.containerButtonStyle}
            />
            <Button
                title="Cadastrar"
                type="clear"
                onPress={()=>navigation.navigate('Register')}
            />
        </SafeAreaView>
    )
}

export default Login