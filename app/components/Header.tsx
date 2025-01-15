import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

interface HeaderProps {
  title: string;
  icon: {
    library: React.ComponentType<any>;
    name: string;
    size?: number;
    color?: string;
    style?: object;
  };
  showCloseButton: boolean;
  onClose?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, icon, showCloseButton, onClose }) => {
  const Icon = icon.library;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Icon name={icon.name} size={icon.size || 20} color={icon.color || '#1c1c1c'} style={icon.style || { marginRight: 8 }} />
        <Text style={globalStyles.mediumText}>{title}</Text>
      </View>
      {showCloseButton && (
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <FontAwesome name="close" size={20} color="#1c1c1c" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    right: 0,
    padding: 6,
  },
});

export default Header;
