// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen(props) {

    const { name } = props;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> Nome: {name}</Text>
        </View>
    );
}

function DetailsScreen(props) {

    const { name } = props;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Nome: {name}</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function NContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Detail"

                >
                    {(props) => <DetailsScreen {...props} name={"Silvio Holanda"} />}
                </Stack.Screen>


                <Stack.Screen name="Home">
                    {(props) => <HomeScreen {...props} name={"Silvio Holanda"} />}
                </Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NContainer;