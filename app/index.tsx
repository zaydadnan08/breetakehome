import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AnimatedNumber from './components/AnimatedNumber';
import { useSharedValue } from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import { Feather, FontAwesome5, Octicons } from '@expo/vector-icons';
import BasicButton from './components/BasicButton';
import { useNetworkState } from 'expo-network';
import ActivityList from './components/activity/ActivityList';
import { router } from 'expo-router';
import Header from './components/Header';
import { globalStyles } from './styles/globalStyles';
import { Colors } from './constants/colors';


export default function App() {
  const insets = useSafeAreaInsets();
  const animatedTextValue = useSharedValue(0);
  const networkState = useNetworkState();

  const [isConnected, setIsConnected] = useState<Boolean>(networkState.isConnected ?? false);

  useEffect(() => {
    animatedTextValue.value = 20;
  }, []);

  useEffect(() => {
    setIsConnected(networkState.isConnected ?? true);
  }, [networkState]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar backgroundColor="white" />
      <View style={[globalStyles.container, { paddingTop: insets.top + 20 }]}>
        <Header
          title="Home"
          icon={{
            library: Octicons,
            name: 'home',
            color: Colors.primary,
          }}
          showCloseButton={false}
        />
        <Text style={globalStyles.titleText}>Welcome, Zayd</Text>
        <View style={styles.limitContainer}>
          <Text style={globalStyles.mediumText}>Available Advance</Text>
          <View style={globalStyles.row}>
            <AnimatedNumber value={animatedTextValue} style={styles.animatedNumber} />
            {isConnected ? null : <Feather name='wifi-off' size={32} color={Colors.gray} style={{ marginRight: 8 }} />}
          </View>
          <BasicButton
            buttonText="Get Cash"
            onPress={() => { router.push('/summary') }}
          />
        </View>
        <ActivityList viewAll={true} />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  limitContainer: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginVertical: 8,
  },
  animatedNumber: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#1c1c1c',
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
});

