import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TransactionStatus } from '@/app/data/Transaction';
import { Colors } from '@/app/constants/colors'
import { globalStyles } from '@/app/styles/globalStyles';

interface StatusBadgeProps {
  status: TransactionStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  let badgeStyle;
  let badgeText;

  switch (status) {
    case 'Completed':
      badgeStyle = styles.completedBadge;
      badgeText = 'Completed';
      break;
    case 'Pending':
      badgeStyle = styles.pendingBadge;
      badgeText = 'Pending';
      break;
    case 'Rejected':
      badgeStyle = styles.failedBadge;
      badgeText = 'Rejected';
      break;
    default:
      badgeStyle = styles.defaultBadge;
      badgeText = 'Unknown';
      break;
  }

  return (
    <View style={[styles.badge, badgeStyle]}>
      <Text style={globalStyles.smallText}>{badgeText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completedBadge: {
    backgroundColor: Colors.green, 
    borderWidth: 1 
  },
  pendingBadge: {
    backgroundColor: Colors.yellow, 
    borderWidth: 1 
  },
  failedBadge: {
    backgroundColor: Colors.red, 
    borderWidth: 1 
  },
  defaultBadge: {
    backgroundColor: Colors.gray,
    borderWidth: 1 
  },
});

export default StatusBadge;
