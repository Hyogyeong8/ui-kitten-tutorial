import React, { useCallback, useEffect, useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
} from '@ui-kitten/components';
import { default as theme } from './theme.json';
import { default as mapping } from './mapping.json';
import * as SplashScreen from 'expo-splash-screen';
// import Font from 'expo';
import * as Font from 'expo-font';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          NanumSquareNeobRg: require('./assets/fonts/NanumSquareNeobRg.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    // <SafeAreaView
    //   onLayout={onLayoutRootView}
    //   style={styles.container}
    // >
    <ApplicationProvider
      {...eva}
      theme={{ ...eva.light, ...theme }}
      customMapping={{ ...mapping }}
    >
      <Layout
        onLayout={onLayoutRootView}
        style={styles.container}
      >
        <Text>Open up App.js to start working on your app!</Text>
        <Button
          style={{ height: 50 }}
          onPress={() => alert('It works')}
        >
          MyButton
        </Button>
      </Layout>

      {/* <StatusBar style='auto' /> */}
    </ApplicationProvider>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
