import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Octicons } from '@expo/vector-icons';
import { useNetworkState } from 'expo-network';
import { router } from 'expo-router';
import Header from './components/Header';
import BasicButton from './components/BasicButton'; // Assuming the BasicButton component is in the same components folder
import ActivityList from './components/activity/ActivityList';

export default function App() {
  const insets = useSafeAreaInsets();
  const networkState = useNetworkState();
  const [isConnected, setIsConnected] = useState<boolean>(networkState.isConnected ?? false);

  useEffect(() => {
    setIsConnected(networkState.isConnected ?? false);
    console.log('Network state:', networkState);
  }, [networkState]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar backgroundColor="white" />
      <View style={[styles.container, { paddingTop: insets.top + 20 }]}>

        <Header 
          title="Activity"
          icon={{
            library: Octicons,
            name: 'bookmark',
            color: '#1c1c1c',
          }}
          showCloseButton={true}
          onClose={() => {router.push('/')}}
        />

        <ActivityList />

      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  }
});
