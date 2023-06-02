import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import UserAccount from './components/MainFlow/UserAccount';

const theme = {
  ...DefaultTheme,
  flex: 1,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#DC3023',
  },

};



export default function App() {
  return (
    <PaperProvider theme={theme}>
      <UserAccount />
    </PaperProvider>
  );
}

