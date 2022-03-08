import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, Alert, TextInput, Pressable } from 'react-native';

function VerifyMyID() {

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

            <View style={styles.infoContainer}>
                <View style={styles.balance}>
                    <Text style={{color: '#FAB593', fontSize: 30, fontWeight: 'bold'}}>Balance: ￥120</Text>
                </View>
                <Text style={styles.info}>ID No: 182020XXXX</Text>
                <Text style={styles.info}>Major: Software Engineering</Text>
                <Text style={styles.info}>留学生中心</Text>
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
        color: '#ffffff'
    },
    infoContainer: {
        width: '100%',
        position: "absolute",
        bottom: "27%",
        alignItems: "center",
        justifyContent: "center",
    },
    balance: {
        width: "65%",
        height: 80,
        margin: 12,
        borderRadius: 10,
        backgroundColor: '#B11D2B',
        justifyContent: 'center',
        alignItems: 'center'
    },
    info: {
        fontSize: 20, 
        color: '#000000', 
        fontWeight: 'bold', 
        paddingBottom: 12
    },
    qrcode: {
        width: 100, height: 100, bottom: 120, borderRadius: 8
    }
})

export default VerifyMyID;