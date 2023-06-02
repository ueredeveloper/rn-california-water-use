import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { TextInput, Button, useTheme, Card } from 'react-native-paper';

import MenuIcon from '../Common/MenuIcon';
import HeaderContainer from '../Common/HeaderContainer';


const UserAccount = () => {
    const { colors } = useTheme();

    return (
        <SafeAreaView style={styles.container}>
           <HeaderContainer title={'Cadastro de Usuário'}/>
            <Card style={styles.content}>
                <Card.Content>
                    <View >
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                label="Name"
                                value={'Conde de Montecristo'}
                                onChangeText={(text) => console.warn('name')}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                label="Telephone"
                                value={'987-654555'}
                                onChangeText={(text) => console.warn('telephon')}
                            />
                        </View>
                        <View style={styles.buttonContainer}>

                            <Button
                                mode="contained"
                                onPress={() => console.log('Save')}
                                style={styles.buttons}
                            >
                                Back
                            </Button>
                            <Button
                                mode="contained"
                                onPress={() => console.log('Savessss')}
                                style={styles.buttons}
                            >
                                Save
                            </Button>

                        </View>
                    </View>

                </Card.Content>
            </Card>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        headerContainer: {
            shadowColor: '#000',
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.4,
            shadowRadius: 3,
            elevation: 5,
            backgroundColor: '#ffffff',
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 50,
        },
        headerLeft: { width: 40 },
        headerRight: { width: 40 },
        headerContent: {},
        headerBottom: { height: 20 },
        title: { fontSize: 24 },
        content: { margin: 5 },
        container: { display: 'flex', flex: 1 },
        inputContainer: { marginTop: 10, marginBottom: 10, backgroundColor: 'green' },
        buttonContainer: { flexDirection: 'row', marginTop: 10 },
        buttons: { borderRadius: 5, height: 50, justifyContent: 'center', marginRight: 25 },

    }
)

export default UserAccount;