import React from "react";
import { View } from 'react-native';
import { Menu, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'react-native-paper';

export default MenuIcon = ({navigation}) => {

    console.log(navigation)

    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    const { colors } = useTheme();

    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
            }}>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Icon name="menu" size={40} color={colors.primary} onPress={openMenu} />}
            >
                <Menu.Item   onPress={() => navigation.navigate('UserAccount')} title="Usuário" />
                <Menu.Item   onPress={() => navigation.navigate('LoginForm')} title="Login" />
                <Divider />
                <Menu.Item onPress={() => { }} title="Item 3" />
            </Menu>
        </View>
    )
}