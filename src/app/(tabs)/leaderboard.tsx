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
                            {db?.users?.length > 0 &&
                                <BarChart
                                    data={chartData}
                                    width={screenWidth * 0.7}
                                    height={220}
                                    barWidth={30}
                                    spacing={20}
                                    frontColor={Colors.navy}
                                    yAxisThickness={0}
                                />
                            }
                            {/**
                             * TODO #6: Display the list of users with a template card component.
                             */}
                            {db.users.map((user, index) => (
                                <View key={index} style={styles.card}>
                                    <View style={styles.horizontalFlex}>
                                        <Text style={styles.title}>#{index + 1}</Text>
                                        <Text style={styles.heading}>{user.points} pts</Text>
                                    </View>
                                    <Text style={styles.heading}>{user.name}</Text>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            </ScrollView >
        </View >
    );
}

export default Leaderboard;