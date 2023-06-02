import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import MenuIcon from '../Common/MenuIcon';


const UserAccount = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <MenuIcon />
                </View>
                <View style={styles.headerContent}>
                    <Text style={styles.headerContentText}>Cadastro de Usuário</Text>
                </View>
                <View style={styles.headerRight}>
                    <Text >Right</Text>
                </View>
            </View>

            <View style={styles.content}>
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


        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40 },
        headerLeft: {},
        headerRight: {},
        headerContent: {},
        headerContentText: { fontSize: 24 },
        container: { display: 'flex', flex: 1, margin: 10 },
        inputContainer: { marginTop: 10, marginBottom: 10, backgroundColor: 'green' },
        buttonContainer: { flexDirection: 'row', marginTop: 10 },
        buttons: { borderRadius: 5, height: 50, justifyContent: 'center', marginRight: 25 },

    }
)

export default UserAccount;