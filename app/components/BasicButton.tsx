import React from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle, TextStyle, GestureResponderEvent, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

interface BasicButtonProps {
  onPress: () => void;
  buttonText?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  disabled?: boolean; 
}

const BasicButton: React.FC<BasicButtonProps> = ({
  onPress,
  buttonText = 'Enable Step Tracking',
  buttonStyle = {},
  buttonTextStyle = {},
  children,
  disabled = false,
}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress} disabled={disabled}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, justifyContent: 'center' }}>
        {children}
        <Text style={[globalStyles.largeText, buttonTextStyle]}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 4,
    borderColor: '#000',
    borderRadius: 8,
    padding: 8,
    marginVertical: 8
  },
});

export default BasicButton;
