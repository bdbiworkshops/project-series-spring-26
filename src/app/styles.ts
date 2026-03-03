import { StyleSheet } from 'react-native';
import Colors from './colors';

const styles = StyleSheet.create({
    "*": {
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    contentContainer: {
        padding: 20,
    },
    content: {
        paddingHorizontal: 20,
        padding: 10,
    },
    flex: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    horizontalFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        marginBottom: 10,
        color: Colors.navy,
    },
    heading: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 5,
        color: Colors.darkGold,
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
    camera: {
        width: '100%',
        height: 400,
        borderRadius: 10,
    },
});

export default styles;