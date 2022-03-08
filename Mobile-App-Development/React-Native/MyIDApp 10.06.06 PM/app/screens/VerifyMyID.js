import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, TextInput, Pressable } from 'react-native';

function VerifyMyID({navigation}) {
    
    const [number, onChangeNumber] = React.useState(null);

    return (
        <ImageBackground 
            source={require("../assets/background.png")}
            style={styles.background}
        >
            <View style={styles.profileContainer}>
                <Image 
                    source={require("../assets/profile.png")}
                    style={styles.profile}
                />
                <Text style={styles.name}>
                    Your Name 
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="ID number"
                    keyboardType="numeric"
                />
                <View style={styles.verifyButton}>
                    <Pressable
                        onPress={() => navigation.navigate('ViewMyID')}
                        style={{width: '100%', alignItems: 'center'}}
                    >
                        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Verify ID</Text>
                    </Pressable> 
                </View>
            </View>
            <Image 
                source={require("../assets/qrcode.jpg")}
                style={styles.qrcode}
            />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center"
    },
    profile: {
        width: 150,
        height: 150,
        borderWidth: 8,
        borderRadius: 200,
        borderColor: "#B11D2B"
    },
    profileContainer: {
        position: "absolute",
        top: 200,
        alignItems: "center",
    },
    name: {
        top: 20, 
        fontSize: 30, 
        fontWeight: 'bold',
        color: 'white'
    },
    buttonsContainer: {
        width: '100%',
        position: "absolute",
        bottom: "34%",
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        width: "70%",
        height: 50,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#B11D2B',
        padding: 10,
        textAlign: 'center',
        color: 'white'
    },
    verifyButton: {
        width: "70%",
        height: 50,
        margin: 12,
        borderRadius: 10,
        backgroundColor: '#B11D2B',
        justifyContent: 'center',
        alignItems: 'center'
    },
    qrcode: {
        width: 100, height: 100, bottom: 140, borderRadius: 8
    }
})

export default VerifyMyID;