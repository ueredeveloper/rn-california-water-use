import React, { useState } from 'react';
import { TextInput, View, Text, Button, Image } from 'react-native';
import Checkbox from 'expo-checkbox';

const LoginForm = () => {

    const [isChecked, setChecked] = useState(false);

    return (
        <View style={{ display: 'flex', flex: 1 }}>
            <View style={{ backgroundColor: 'blue', alignItems: 'center' }}>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={require('../assets/logo.png')} />
            </View>
            <View style={{ backgroundColor: 'orange', alignItems: 'center' }}>
                <Text style={{ fontSize: 25 }}>California Water Use</Text>
            </View>
            <View style={{ backgroundColor: 'gray' }}>
                <Text>Username</Text>
                <TextInput />
                <Text>Password</Text>
                <TextInput />
                <Checkbox
                    style={{ margin: 10 }}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#4630EB' : undefined}
                />

                <Text >Remember me</Text>
                <Text >Forgot Password?</Text>

            </View>
            <View style={{ backgroundColor: 'purple', height: 50 }}>
                <Button
                    title="Press me"
                    onPress={() => console.warn('Simple Button pressed')}
                />
            </View>

        </View>
    )
}

export default LoginForm;