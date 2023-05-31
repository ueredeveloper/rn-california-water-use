// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen(props) {

    const { name } = props;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> Nome: {name}</Text>
            <Button
                title="Go to Details"
                onPress={() => props.navigation.navigate('Details')}
            />
        </View>
    );
}

function DetailsScreen(props) {

    const { name } = props;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Nome Completo: {name}</Text>
            <Button
                title="Go to Home"
                onPress={() => props.navigation.navigate('Home')}

            />
        </View>
    );
}

const Stack = createNativeStackNavigator();

function NContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Details"

                >
                    {(props) => <DetailsScreen {...props} name={"Silvio Holanda Do Nascimento"} />}
                </Stack.Screen>


                <Stack.Screen name="Home">
                    {(props) => <HomeScreen {...props} name={"Silvio"} />}
                </Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NContainer;