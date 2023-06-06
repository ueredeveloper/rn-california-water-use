import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import MenuIcon from './MenuIcon';

const HeaderContainer = (props, {navigation}) => {

    const { title } = props;

    return (
        <View style={styles.headerContainer}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <MenuIcon navigation={navigation}/>
                </View>
                <View style={styles.headerContent}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.headerRight}></View>
            </View>
            <View style={styles.headerBottom}>
            </View>
        </View>

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
    }
)

export default HeaderContainer;