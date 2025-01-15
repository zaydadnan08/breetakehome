import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Octicons } from '@expo/vector-icons';
import { useNetworkState } from 'expo-network';
import { router } from 'expo-router';
import Header from './components/Header';
import BasicButton from './components/BasicButton'; // Assuming the BasicButton component is in the same components folder
import { globalStyles } from './styles/globalStyles';
import { glob } from 'fs';

export default function App() {
  const insets = useSafeAreaInsets();
  const networkState = useNetworkState();
  const [isConnected, setIsConnected] = useState<boolean>(networkState.isConnected ?? false);
  const [tip, setTip] = useState<number>(5); // Initial tip percentage

  useEffect(() => {
    setIsConnected(networkState.isConnected ?? false);
    console.log('Network state:', networkState);
  }, [networkState]);

  const summaryItems = [
    { key: 'Advance', value: '$15.00' },
    { key: 'Tip', value: `${tip}%` },
    { key: 'Delivery', value: 'Standard (No charge)' },
    { key: 'Repayment Date', value: 'Jan 20, 2025' },
  ];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar backgroundColor="white" />
      <View style={[globalStyles.container, { paddingTop: insets.top + 20 }]}>

        <Header 
          title="Order Summary"
          icon={{
            library: Octicons,
            name: 'paper-airplane',
            color: '#1c1c1c',
          }}
          showCloseButton={true}
          onClose={() => {router.push('/')}}
        />

        <Text style={globalStyles.titleText}>You're all set!</Text>
        
        <View style={styles.summaryContainer}>
          <Text style={styles.availableText}>Summary</Text>
          {summaryItems.map((item, index) => (
            <View
              key={item.key}
              style={[styles.summaryItem, index < summaryItems.length - 1 && styles.divider]}>
              <Text style={globalStyles.mediumText}>{item.key}:</Text>
              {item.key === 'Tip' ? (
                <View style={styles.tipContainer}>
                  <TouchableOpacity onPress={() => setTip(tip > 0 ? tip - 1 : 0)} style={styles.tipButton}>
                    <Text style={globalStyles.mediumText}>-</Text>
                  </TouchableOpacity>
                  <Text style={globalStyles.mediumText}>{tip}%</Text>
                  <TouchableOpacity onPress={() => setTip(tip + 1)} style={styles.tipButton}>
                    <Text style={globalStyles.mediumText}>+</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <Text style={globalStyles.mediumText}>{item.value}</Text>
              )}
            </View>
          ))}
        </View>

        <View style={globalStyles.bottomContainer}>
          <BasicButton 
            onPress={() => { router.push('/confirmation') }}
            buttonText="Confirm Order"
          />
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  summaryContainer: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#f7f7f7',
  },
  availableText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 16,
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    alignItems: 'center',
  },
  tipContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  tipButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },
});
