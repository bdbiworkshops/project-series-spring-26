import { View } from 'react-native';
import Camera from '../components/camera';
import styles from '../styles';

const Scan = () => {
    return (
        <View style={styles.flex}>
            <View>
                <View style={[styles.flex, { height: '100%', }]}>
                    <View style={[styles.card, {
                        backgroundColor: 'transparent'
                    }]}>
                        <Camera />
                    </View>
                </View>
            </View>
        </View >
    );
}

export default Scan;