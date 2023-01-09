import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
} from '@ui-kitten/components';
import { default as theme } from './theme.json';

export default function App() {
  return (
    <ApplicationProvider
      {...eva}
      theme={{ ...eva.light, ...theme }}
    >
      <Layout style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style='auto' />
      </Layout>
      <Button onPress={() => alert('It works')}>MyButton</Button>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
