import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs, useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../colors';
import styles from '../styles';

export default function TabLayout() {
    const router = useRouter();
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }} edges={['top']}>
                <View style={[styles.horizontalFlex, { paddingHorizontal: 40, paddingTop: 20 }]}>
                    <Text style={styles.title}>GT Finder</Text>
                    <TouchableOpacity onPress={() => router.navigate('/scan')}>
                        <FontAwesome size={28} name={"camera-retro"} color={Colors.gold} />
                    </TouchableOpacity>
                </View>
                <Tabs screenOptions={{ tabBarActiveTintColor: Colors.gold, headerShown: false }}>
                    <Tabs.Screen
                        name="index"
                        options={{
                            title: 'Home',
                            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                        }}
                    />
                    <Tabs.Screen
                        name="scan"
                        options={{
                            title: '',
                            tabBarIcon: ({ color }) =>
                                <View style={[{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 40,
                                    backgroundColor: 'white',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }, styles.shadow]}>
                                    <FontAwesome size={32} name="camera-retro" color={color} />
                                </View>,
                        }}
                    />
                    <Tabs.Screen
                        name="leaderboard"
                        options={{
                            title: 'Leaderboard',
                            tabBarIcon: ({ color }) => <FontAwesome size={28} name="trophy" color={color} />,
                        }}
                    />
                </Tabs>
            </SafeAreaView>
        </SafeAreaProvider >
    );
}