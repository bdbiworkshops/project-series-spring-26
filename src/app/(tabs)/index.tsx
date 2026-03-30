import React from 'react';
import { ScrollView, Text, View, useWindowDimensions } from 'react-native';
import Colors from '../colors';
import useUser from '../hooks/useUser';
import styles from '../styles';

const Index = () => {
    const { width: screenWidth } = useWindowDimensions();
    const { user } = useUser();

    return (
        <View style={styles.flex}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.flex}>
                    <View style={styles.card}>
                        {user.name && <Text style={styles.heading}>Welcome back, {user.name}!</Text>}
                        <Text style={styles.description}>Let's take a look at where you've been.</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.heading}>Your Recent Activity</Text>
                        <View style={[styles.flex, { gap: 10 }]}>
                            {user.locations.map((location, index) => (
                                <View key={index} style={[styles.shadow, { padding: 20, borderRadius: 8, backgroundColor: '#f9f9f9' }]}>
                                    <Text style={[styles.heading, { color: Colors.navy }]}>{location.name}</Text>
                                    <Text style={styles.description}>Last visited: {location.lastVisited}</Text>
                                    <Text style={styles.description}>Times visited: {location.timesVisited}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView >
        </View >
    );
}

export default Index;