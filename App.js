import { DefaultTheme, Provider as PaperProvider, Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserAccount from './components/MainFlow/UserAccount';
import LoginForm from './components/Common/LoginForm';
import HeaderContainer from './components/Common/HeaderContainer';
import MenuIcon from './components/Common/MenuIcon';
import { View } from 'react-native';

const theme = {
  ...DefaultTheme,
  flex: 1,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#DC3023',
  },

};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginForm"
            component={LoginForm}
            options={{
              headerTitle: (props) => <MenuIcon {...props} />
            }}
          />
          <Stack.Screen name="UserAccount" component={UserAccount} />
        </Stack.Navigator>

      </PaperProvider>
    </NavigationContainer>
  );
}

