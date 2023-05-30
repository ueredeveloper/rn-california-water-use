import React from 'react';
import { TextInput, View, Text } from 'react-native';


const LoginForm = ()=>{
    return (
        <View>
            <Text>California Water Use</Text>
            <Text>Username</Text>
            <TextInput/>
            <Text>Password</Text>
            <TextInput/>
        </View>
    )
}

export default LoginForm;