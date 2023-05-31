import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, Linking } from 'react-native';
import { TextInput, Checkbox, Button } from 'react-native-paper';

const LoginForm = () => {

    const [checked, setChecked] = useState(false);
    const [login, SetLogin] = useState({
        username: "santos.dummond",
        password: "123456"
    });

    const handleCheckboxToggle = () => {
        setChecked(!checked);
    };

    const handlePress = async () => {
        const url = 'https://example.com';
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            console.log("Don't know how to open URI: " + url);
        }
    };

    return (
        <SafeAreaView style={{ display: 'flex', flex: 1, justifyContent: 'center', margin: 10 }}>
            <View style={{ backgroundColor: 'blue', alignItems: 'center', margin: 60 }}>
                <Image
                    style={{ width: 120, height: 120, borderRadius: 5 }}
                    source={require('../assets/logo.png')} />
            </View>
            <View style={{ backgroundColor: 'orange', alignItems: 'center', height: 50 }}>
                <Text style={{ fontSize: 25 }}>California Water Use</Text>
            </View>
            <View style={{ backgroundColor: 'gray', marginTop: 40, marginBottom: 40 }}>
                <View style={{ marginBottom: 20 }}>
                    <TextInput
                        label="Username"
                        value={login.username}
                        onChangeText={text => setText(text)}
                    />
                </View>
                <View style={{ marginBottom: 20 }}>
                    <TextInput
                        label="Password"
                        value={login.password}
                        onChangeText={text => setText(text)}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Checkbox.Android
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={handleCheckboxToggle}
                    />
                    <Text>Remember me</Text>
                    <Button mode="text" onPress={() => console.log('Forgot password?')}>
                        Forgot password?
                    </Button>
                </View>

            </View>
            <View >
                <Button
                    mode="contained"
                    onPress={() => console.log('Login')}
                    style={{ borderRadius: 5, height: 70, justifyContent: 'center' }}
                >
                    Login
                </Button>
            </View>

        </SafeAreaView>
    )
}

export default LoginForm;