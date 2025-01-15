import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ActivityItem from './ActivityItem';
import { FontAwesome5 } from '@expo/vector-icons';
import { activityData } from '@/app/data/Transaction';
import { router, Router } from 'expo-router';

interface ActivityListProps {
  viewAll?: boolean;
}

const ActivityList: React.FC<ActivityListProps> = ({ viewAll }) => {
  return (
    <View style={styles.activityContainer}>
      <View style={styles.activityHeader}>
        <Text style={{ fontSize: 20, fontWeight: 700, color: '#222' }}>Activity</Text>
        {viewAll && (
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => router.push('/activity')}>
            <Text style={{ fontSize: 16, color: '#222', textDecorationLine: 'underline' }}>View All</Text>
            <FontAwesome5 name="chevron-right" size={12} color="#222" style={{ marginLeft: 8 }} />
          </TouchableOpacity>
        )}
      </View>

      <ScrollView style={styles.activityList}>
        {activityData.map((item, index) => (
          <ActivityItem
            key={index}
            transaction={item}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    marginTop: 20,
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  activityList: {
    flex: 1,
    width: '100%',
  }
});

export default ActivityList;
