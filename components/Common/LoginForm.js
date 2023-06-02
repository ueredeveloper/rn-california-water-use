import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Checkbox, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';

const LoginForm = () => {

    const [checked, setChecked] = useState(false);
    const [login, setLogin] = useState({
        username: "santos.dummond",
        password: "123456"
    });

    const { colors } = useTheme();

    const handleCheckbox = () => {
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

    const handleTextChange = (key, value) => {
        setLogin((prev) => (
            { ...prev, [key]: value }
        )
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../assets/logo.png')} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>California Water Use</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        label="Username"
                        value={login.username}
                        onChangeText={(text) => handleTextChange('username', text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        label="Password"
                        value={login.password}
                        onChangeText={(text) => handleTextChange('password', text)}
                    />
                </View>
                <View style={styles.checkboxContainer}>
                    <View style={styles.checkbox}>
                        <TouchableOpacity
                            style={[styles.checkbox, checked && styles.checkboxChecked]}
                            onPress={handleCheckbox}
                        >
                            {checked ? (
                                <Ionicons name="checkbox-outline" size={40} color={colors.primary} />
                            ) : (
                                <Ionicons name="checkbox" size={40} color={colors.primary} />
                            )}
                        </TouchableOpacity>
                        <Text style={styles.checkboxText}>Remember me</Text>
                    </View>
                    <Button mode="text" onPress={() => console.log('Forgot password?')}>Forgot password?</Button>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    mode="contained"
                    onPress={() => console.log('Login')}
                    style={styles.loginButton}
                >
                    Login
                </Button>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        margin: 10,
    },
    logoContainer: {
        alignItems: 'center',
        margin: 60,
    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: 5,
    },
    titleContainer: {
        alignItems: 'center',
        height: 50,
    },
    title: {
        fontSize: 25,
    },
    formContainer: {
        marginTop: 40,
        marginBottom: 40,
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {

    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    checkbox: {
        flexDirection: 'row',
    },
    checkboxChecked: {

    },
    checkboxText: {
        marginLeft: 5,
        alignSelf: 'center',
    },
    buttonContainer: {
        marginTop: 10,
    },
    loginButton: {
        borderRadius: 5,
        height: 60,
        justifyContent: 'center'
    }
});

export default LoginForm;