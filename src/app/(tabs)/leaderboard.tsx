import { ScrollView, Text, useWindowDimensions, View } from 'react-native';
import { BarChart } from "react-native-gifted-charts";
import Colors from '../colors';
import useDb from '../hooks/useDb';
import styles from '../styles';


const Leaderboard = () => {
    const { db, setDb } = useDb();
    const { width: screenWidth } = useWindowDimensions();

    const chartData = db.users.map((user, index) => ({
        value: user.points,
        label: user.name,
    }));

    return (
        <View style={styles.flex}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.flex}>
                    <View>
                        <Text style={[styles.heading, styles.content]}>Leaderboard</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.flex}>
                            {/**
                             * TODO #5: Implement the bar chart when there are users in the database to visualize the points of each user.
                             */}
                            {/**
                             * TODO #6: Display the list of users with a template card component.
                             */}
                        </View>
                    </ScrollView>
                </View>
            </ScrollView >
        </View >
    );
}

export default Leaderboard;