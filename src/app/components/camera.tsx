import FontAwesome from '@expo/vector-icons/FontAwesome';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import styles from '../styles';

const CameraScreen = () => {
    const [permission, requestPermission] = useCameraPermissions();
    const [torchEnabled, setTorchEnabled] = useState(false);
    const [photoUri, setPhotoUri] = useState<string | null>(null);
    const cameraRef = useRef<CameraView | null>(null);

    if (!permission) return <View />;

    if (!permission.granted) {
        return (
            <View style={styles.card}>
                {/** TODO: Add a user-friendly permission request button with a text label on top. */}
            </View>
        );
    }

    const takePicture = async () => {
        if (!cameraRef.current) return;

        {/** TODO: implement the request for picture taking. */ }
    };

    const resetCamera = () => setPhotoUri(null);

    if (photoUri) {
        return (
            <View style={styles.card}>
                <Image
                    source={{ uri: photoUri }}
                    style={{ width: '100%', height: '80%', borderRadius: 10 }}
                />
                <TouchableOpacity onPress={resetCamera} style={{ alignItems: 'center', marginTop: 50, }}>
                    <FontAwesome size={28} name="close" color="black" />
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.card}>
            <CameraView
                ref={cameraRef}
                style={styles.camera}
                enableTorch={torchEnabled}
            />
            <View style={[styles.card, styles.horizontalFlex]}>
                <TouchableOpacity
                    style={[{ padding: 10 }, styles.shadow]}
                    onPress={() => setTorchEnabled(!torchEnabled)}
                >
                    <FontAwesome size={28} name="flash" color={torchEnabled ? 'yellow' : 'black'} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[{ padding: 10 }, styles.shadow]}
                    onPress={takePicture}
                >
                    <FontAwesome size={28} name="camera" color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CameraScreen;