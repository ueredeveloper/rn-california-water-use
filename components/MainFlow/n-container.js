// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-paper';

function Home({navigation}) {

    const address = "Rua 10"

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24 }}> Endereço: {address}</Text>
            <Button
                mode="contained"
                onPress={() => navigation.navigate('Details')}
                style={{margin: 10}}
            > Enviar parâmetros ao chamar o componente</Button>
            <Button
                mode="contained"
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('DetailsWithRouteParam', {
                        details: 'Rua, 10, casa 13, Sobradinho - DF - Brasil '
                    });
                }}
                style={{margin: 10}}
            > Enviar parâmetros pela função onPress() </Button>
            <Button
                mode="contained"
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Custom profile header' })
                  }
                  style={{margin: 10}}
            > Profile</Button>

        </View>
    );
}

function DetailsScreen(props) {

    const { details } = props;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24 }}>Endereço completo: {details}</Text>
            <Button
                mode="contained"
                onPress={() => props.navigation.navigate('Home')}
            >Home</Button>
        </View>
    );
}


function DetailsWithRouteParam({ route, navigation }) {

    const { details } = route.params
    return (
        <View>
            <Text style={{ fontSize: 24, margin: 10 }}>{details}</Text>
            <Button mode="contained" onPress={() => { navigation.navigate('Home') }} >Home</Button>
        </View>
    )
}

function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile screen</Text>
            <Button 
            mode="contained"
            onPress={() => navigation.goBack()} 
            style={{margin: 10}}> Go back</Button>
        </View>
    );
}


const Stack = createNativeStackNavigator();



function NContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    // utilizando parametros no título
                    options={{ title: "My Home" }} />
                <Stack.Screen name="Details">
                    {(props) => <DetailsScreen {...props} details={"Rua, 10, casa 13"} />}
                </Stack.Screen>

                <Stack.Screen name="DetailsWithRouteParam" component={DetailsWithRouteParam} />
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={({ route }) => ({ title: route.params.name })}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NContainer;