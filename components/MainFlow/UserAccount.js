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
                    onChangeText={(text) => console.warn('telephone')}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>

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
        container: { display: 'flex', flex: 1, marginTop: 100 },
        buttons: { margin: 10, borderRadius: 5, height: 50, justifyContent: 'center' },
        inputContainer: {

        }
    }
)

export default UserAccount;