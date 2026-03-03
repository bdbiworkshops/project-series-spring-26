import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from '../styles';

const Index = () => {
    {/** TODO: Setup useUser() hook */ }

    return (
        <View style={styles.flex}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.flex}>
                    <View style={styles.card}>
                        {/* TODO: display username inside the text. Check for existence before display */}
                        <Text style={styles.description}>Let's take a look at where you've been.</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.heading}>Your Recent Activity</Text>
                        <View style={[styles.flex, { gap: 10 }]}>
                            {/* TODO: implement mapping of visited location data. The locations array is given as follows::
                                
                                locations: [
                                    { name: 'Crosland', lastVisited: '2024-01-15', timesVisited: 5 },
                                    ...
                                ]
                             */}
                        </View>
                    </View>
                </View>
            </ScrollView >
        </View >
    );
}

export default Index;