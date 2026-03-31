import FontAwesome from '@expo/vector-icons/FontAwesome';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useRef, useState } from 'react';
import { ActivityIndicator, Alert, Button, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles';

/**
 * TODO #1: Replace YOUR_LOCAL_IP with your computer's local IP address.
 * Start the the Flask server, then the address will print in the terminal.
 */
const API_URL = "http://YOUR_LOCAL_IP:8080/predict";

type PredictionResult = {
    prediction: string;
    confidence: number;
} | null;

const CameraScreen = () => {
    const [permission, requestPermission] = useCameraPermissions();
    const [torchEnabled, setTorchEnabled] = useState(false);
    const [photoUri, setPhotoUri] = useState<string | null>(null);
    const [result, setResult] = useState<PredictionResult>(null);
    const [loading, setLoading] = useState(false);
    const cameraRef = useRef<CameraView | null>(null);

    if (!permission) return <View />;

    if (!permission.granted) {
        return (
            <View style={styles.card}>
                <Text style={styles.description}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="Grant Permission" />
            </View>
        );
    }

    const takePicture = async () => {
        if (!cameraRef.current) return;

        try {
            const photo = await cameraRef.current.takePictureAsync();
            setPhotoUri(photo.uri);
            setResult(null);

            const { status } = await MediaLibrary.requestPermissionsAsync();
            if (status === 'granted') {
                await MediaLibrary.createAssetAsync(photo.uri);
            }

            await classify(photo.uri);
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Failed to take photo');
        }
    };

    const classify = async (uri: string) => {
        /**
         * TODO #2: Implement the classify function.
         * Send the photo to the Flask server and fetch the prediction result.
         */

        setLoading(true);

        const formData = new FormData();
        formData.append("image", {
            uri,
            name: "photo.jpg",
            type: "image/jpeg",
        } as any);

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                body: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });
            const data = await response.json();
            setResult(data);
        } catch (err) {
            Alert.alert('Error', 'Could not reach the classification server');
        } finally {
            setLoading(false);
        }
    };

    const resetCamera = () => {
        setPhotoUri(null);
        setResult(null);
    };

    if (photoUri) {
        return (
            <View style={styles.card}>
                <Image
                    source={{ uri: photoUri }}
                    style={{ width: '100%', height: '60%', borderRadius: 10 }}
                />

                <View style={{ alignItems: 'center', marginTop: 20, minHeight: 60 }}>
                    {loading ? (
                        <ActivityIndicator size="large" />
                    ) : result ? (
                        <>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                {result.prediction}
                            </Text>
                            <Text style={{ fontSize: 14, color: 'gray', marginTop: 4 }}>
                                Confidence: {(result.confidence * 100).toFixed(1)}%
                            </Text>
                        </>
                    ) : null}
                </View>

                <View style={[styles.horizontalFlex, { marginTop: 20 }]}>
                    {!loading && (
                        /**
                         * TODO #3: Implement the refresh button to re-classify the same image.
                         */
                        <TouchableOpacity
                            style={[{ padding: 10 }, styles.shadow]}
                            onPress={() => classify(photoUri)}
                        >
                            <FontAwesome size={28} name="refresh" color="black" />
                        </TouchableOpacity>
                    )}
                    {/**
                     * TODO #4: Implement the close button to retake the photo.
                     */}
                    <TouchableOpacity
                        style={[{ padding: 10 }, styles.shadow]}
                        onPress={resetCamera}
                    >
                        <FontAwesome size={28} name="close" color="black" />
                    </TouchableOpacity>
                </View>
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