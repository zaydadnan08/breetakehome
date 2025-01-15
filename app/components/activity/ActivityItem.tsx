import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import StatusBadge from './StatusBadge'; 
import { formatDate } from '../../utils/dateUtils';
import { Transaction } from '@/app/data/Transaction';
import { globalStyles } from '@/app/styles/globalStyles';

interface ActivityItemProps {
  transaction: Transaction 
}

const ActivityItem: React.FC<ActivityItemProps> = ({ transaction }) => {
  return (
    <TouchableOpacity style={styles.activityItem} onPress={() => { /* Do nothing */ }}>
      <View style={styles.activityDetails}>
        <Text style={globalStyles.smallText}>{formatDate(transaction.date)}</Text>
        <Text style={globalStyles.largeText}>{transaction.amount}</Text>
      </View>
      <StatusBadge status={transaction.status} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#f0f0f0',
    marginBottom: 10, 
  },
  activityDetails: {
    flexDirection: 'column',
    flex: 1,
  },
});

export default ActivityItem;
