import React from 'react'
import { View,SafeAreaView } from 'react-native'
import { Input,Text,Button } from 'react-native-elements'
import MaterialComminutyIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import styles from './styles'
import { useNavigation } from '@react-navigation/core'
import { StackList } from '../../routes/PublicRoutes'
import { StackNavigationProp } from '@react-navigation/stack'

type LoginScreenProps = StackNavigationProp<StackList,'Login'>

const Register = ()=>{
    const navigation = useNavigation<LoginScreenProps>()
    return (
        <SafeAreaView style={styles.container}>
            <Text h2>Cadastrar</Text>
            <View style={styles.boxLogin}>
                <Input 
                    placeholder="Nome" 
                    leftIcon={<FontAwesome name="user" size={24}/>}
                />
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
                title="Cadastrar" 
                buttonStyle={styles.buttonStyle} 
                containerStyle={styles.containerButtonStyle}
            />
            <Button 
                title="Login"
                type="clear"
                onPress={()=>navigation.navigate('Login')}
            />
        </SafeAreaView>
    )
}

export default Register