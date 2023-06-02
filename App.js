import { StyleSheet, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import LoginForm from './components/Common/LoginForm';
import UserAccount from './components/MainFlow/UserAccount';
import { Menu, Appbar } from 'react-native-paper';

import MenuIcon from './components/Common/MenuIcon';

const theme = {
  ...DefaultTheme,
  flex: 1,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#DC3023',
    accent: '#1783EF',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <UserAccount />
    </PaperProvider>
  );
}

