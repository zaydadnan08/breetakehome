import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import BasicButton from './components/BasicButton';
import { Colors } from './constants/colors';
import { globalStyles } from './styles/globalStyles';

export default function ConfirmationPage() {
    const insets = useSafeAreaInsets();
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar backgroundColor="white" />
            <View style={[globalStyles.container, { paddingTop: insets.top + 20 }]}>

                <View style={styles.contentContainer}>
                    <FontAwesome name="check-circle" size={100} color={Colors.green} />
                    <Text style={globalStyles.titleText}>All Done!</Text>
                    <Text style={globalStyles.mediumText}>You are ready to start using your balance.</Text>
                </View>

                <BasicButton
                    buttonText="Done"
                    buttonStyle={styles.doneButton}
                    buttonTextStyle={[globalStyles.largeText, {color: '#fff'}]}
                    onPress={() => router.push('/')}
                />
            </View>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    doneButton: {
        backgroundColor: Colors.green,
        borderColor: Colors.darkgreen,
    },
});

