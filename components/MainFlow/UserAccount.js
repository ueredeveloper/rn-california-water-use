import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Checkbox, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';


const UserAccount = () => {
    return (
        <SafeAreaView style={styles.container}>
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
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        container: { display: 'flex', flex: 1, marginTop: 70, margin: 10 },
        inputContainer: { marginTop: 10, marginBottom: 10, backgroundColor: 'green' },
        buttonContainer: { flexDirection: 'row', marginTop: 10 },
        buttons: { borderRadius: 5, height: 50, justifyContent: 'center', marginRight: 25 },

    }
)

export default UserAccount;